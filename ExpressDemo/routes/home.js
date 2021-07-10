const express = require('express');
const router = express.Router();

router.get('/', (req,res) => { // middleware function
    //res.send('Hello World'); simple
    res.render('index', {title:'My Express App', message: 'Hello'});
});