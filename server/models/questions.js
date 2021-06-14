const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 10,
        maxlength: 1024
    },
    content: String
})

module.exports = mongoose.model('Question', QuestionSchema)