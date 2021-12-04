const express = require("express")
const router = express.Router();
const User = require('../../models/User')
const {check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config')
// Comments Documentation : Type of Route and endpoint : Description : Public/Private (Do you need a token or not)
const auth = require('../../middleware/auth')
//const isAdmin = require('../../middleware/isAdmin')
//  GET api/auth : Test Route : Public

router.get('/', auth, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Error happened on the Server')
    }
});

//  POST api/auth : Authenticate User and get token : Public

router.post('/', [ 
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

// POST Admin Login

module.exports = router;
