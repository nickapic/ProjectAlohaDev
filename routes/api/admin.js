const express = require("express")
const router = express.Router();
const {check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth')
const isAdmin = require('../../middleware/isAdmin')
const { getMaxListeners } = require("../../models/User");

router.get('/users', auth, isAdmin, async(req, res) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Error happened on the Server')
    }
});

router.post('/register', [ 
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must include one lowercase character, one uppercase character, a number, and a special character.').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
] ,async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const {name,email,password, secret_key } = req.body;
    
    
    try {
    // User exists 
    let user = await User.findOne({email})
    if (user) {
       return res.status(400).json({ errors: [{msg: 'User already exists'}] });
    }

    if(secret_key !== config.get('admin-secret')){
        return res.status(400).json({ errors: [{msg: 'Sorry That Action is not allowed'}] });
    }

    // 2. Get users gravatar

    const isAdmin = true
    const avatar = gravatar.url(email,{
        s: '200',
        r: 'pg',
        d: 'mm'
    })
    user = new User({
        name,
        email,
        avatar,
        password,
        isAdmin
    })
    //Doesnt Save it yet
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
        user:{
            id : user.id,
            isAdmin: user.isAdmin
        }
    };

    jwt.sign(
        payload, 
        config.get('jwtsecret'),
        {expiresIn: 36000}, 
        (err, token) => {
            if(err) throw err;
            res.json({ token });
        }
    );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error has occured')
    }
    // console.log(req.body); For testing
   // res.send('Here is some good data')
});

router.post('/login', [ 
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password').exists()
] ,async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { email,password } = req.body;
    try {
    // User exists 
    let user = await User.findOne({email})
    if (!user) {
       return res.status(400).json({ errors: [{msg: 'Invalid Credentials'}] });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch){
        return res.status(400).json({ errors: [{msg: 'Invalid Credentials'}] });
    }    
    if (user.isAdmin === false ){
        return res.status(400).json({ errors: [{msg: 'Invalid Credentials'}] });
    }
    const payload = {
        user:{
            id : user.id,
            isAdmin: user.isAdmin
        }
    };

    jwt.sign(
        payload, 
        config.get('jwtsecret'),
        {expiresIn: 36000}, 
        (err, token) => {
            if(err) throw err;
            res.json({ token });
        }
    );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error has occured')
    }
   //// console.log(req.body);
   
});


router.delete('/job/:jobid',auth,isAdmin,  async(req,res) => {
    try {
        const job = await Job.findById(req.params.jobid);
        if(!job){
            return res.status(404).json({msg : 'Job not found'})
        }
        //Check if the User is the Admin
        await job.remove();
        res.json({msg: 'Job Removed'})

    } catch (err) {
        console.error(err.message)
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg : 'Job not found'})
        }
        res.status(500).send('Server Error')
    }
})

router.delete('/user/:userid', auth, isAdmin, async(req,res) => {
    try {
        // Todo remove users posts as well.
        await Profile.findOneAndRemove({ user: req.params.userid });
        // Remove User
        await User.findOneAndDelete({ _id: req.params.userid });
        res.json({ msg:'User Deleted'})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error occured')        
    }
})
module.exports = router;