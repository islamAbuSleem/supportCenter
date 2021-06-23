const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { validateLogin } = require('../helper/validate');

router.post('/', async(req, res, next) => {
    try {
        const { error } = await validateLogin(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send('Invalid Email or Password')
        }

        let isValidPassword = await bcrypt.compare(req.body.password, user.password);

        if (!isValidPassword) {
            return res.status(400).send('Invalid Email or Password')
        }

        const token = await user.generateAuthToken();
        return res.send(token)

    } catch (e) {
        console.log(e.message)
    }

})


module.exports = router;