const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 255
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.jwtPrivteKey);
    return token;
}
module.exports = mongoose.model('User', userSchema);