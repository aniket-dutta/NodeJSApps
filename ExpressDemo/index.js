const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./util/logger');
const course = require('./routes/courses');
const home = requires('./routes/home');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening on port ${port}`));
process.env.NODE_ENV = "development";

//to get env variable
//console.log(`Node Env: ${process.env.NODE_ENV}`);
// console.log(`app : ${app.get('env')}`);

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());   //middleware function
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public')); //to serve static content
app.use(helmet());
app.use('/api/courses', course); // for all /api/courses  it would refer this
app.use('/',home);
//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Name: ' + config.get('mail.host'));

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));// gives details
    console.log('Morgan enabled');
} 
app.use(morgan('tiny'));
//custom middleware 
app.use(logger);

app.get('/api/post/:month/:year', (req,res)=> res.send([req.params,req.query])) //read optional query params by req.query 
//add pass them as api/post/08/2021?day=5