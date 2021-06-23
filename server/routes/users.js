const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth')
const { validateRegister } = require('../helper/validate')
const bcrypt = require('bcrypt');


router.get('/', async(req, res, next) => {
    try {
        const users = await User.find();
        res.send(users)
    } catch (e) {
        res.send(e)
    }

})

router.get('/me', auth, async(req, res, next) => {
    const user = await User.findById(req.user.id)
    res.send(user)
})

router.post('/add', async(req, res, next) => {
    try {
        const { error } = await validateRegister(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message)
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send("user already registered")
        }

        const salt = await bcrypt.genSalt(10);
        hashedPassward = await bcrypt.hash(req.body.password, salt);
        user = new User({
            username: req.body.username,
            password: hashedPassward,
            email: req.body.email,
        })

        const token = user.generateAuthToken();
        res.header('x-auth-token', token).send(await user.save())
    } catch (e) {
        res.send(e.message)
    }
})




module.exports = router;