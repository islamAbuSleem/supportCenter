const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
    // routes
const questions = require('./routes/questions');
app.use('/questions', questions)




// db connection
mongoose.connect('mongodb://localhost:27017/supportCenter', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('app is running on port ' + port)
})