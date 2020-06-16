const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const birdsController = require('./controllers/bird_controller');
app.use('/birds', birdsController);

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
