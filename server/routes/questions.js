const express = require('express');
const router = express.Router();
const Question = require('../models/questions');


router.get('/', async(req, res, next) => {
    try {
        const questions = await Question.find();
        res.send(questions)
    } catch (e) {
        res.send(e.message)
    }
})

router.post('/add', async(req, res, next) => {

    try {
        const Qes = new Question({
            title: req.body.title,
            content: req.body.content
        })
        const savedQues = await Qes.save();
        res.send(savedQues);
    } catch (e) {
        res.send(e.message)
    }

})
module.exports = router;