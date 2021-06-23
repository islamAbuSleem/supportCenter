const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config()



// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// routes
const questions = require('./routes/questions');
app.use('/questions', questions)
const users = require('./routes/users');
app.use('/users', users)
const auth = require('./routes/auth');
app.use('/login', auth)




// db connection
mongoose.connect(process.env.DB_connection, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('app is running on port ' + port)
})