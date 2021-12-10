const express = require("express")
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth')
const isAdmin = require('../../middleware/isAdmin')
const { getMaxListeners } = require("../../models/User");
// Comments Documentation : Type of Route and endpoint : Description : Public/Private (Do you need a token or not)

//  POST api/users : Regiter User : Public
router.post('/', [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must include one lowercase character, one uppercase character, a number, and a special character.').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, role } = req.body;


    try {
        // User exists 
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // 2. Get users gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        user = new User({
            name,
            email,
            avatar,
            role,
            password
        })
        //Doesnt Save it yet
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id,
                isAdmin: user.isAdmin,
                role: user.role
            }
        };

        jwt.sign(
            payload,
            config.get('jwtsecret'),
            { expiresIn: 36000 },
            (err, token) => {
                if (err) throw err;
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

router.get('/', auth, isAdmin, async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Error happened on the Server')
    }
});

module.exports = router;

