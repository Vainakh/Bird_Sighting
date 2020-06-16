const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.use(express.static('public'));


// animals controller
// const birdsController = require('./controllers/birds.js');
// app.use('/birds', birdsController);

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/birdscrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
    console.log('I am connected to mongoose');
});

app.get('/', (req, res)=>{
        res.send('hello world');
    });


app.listen(3000, ()=>{
    console.log('cherp cherp');
});
