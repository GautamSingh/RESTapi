const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongo db 
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.send({error: err.message});
});

app.listen(3000, function(){
    console.log("I am listening on 3000");
});