const Joi = require('joi');



module.exports.validateRegister = function(data) {
    const userSchema = Joi.object({
        username: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
        email: Joi.string().min(5).max(255).required().email()
    })
    return userSchema.validate(data)
}


module.exports.validateLogin = function(data) {
    const Schema = Joi.object({
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(6).required()
    })

    return Schema.validate(data)
}