const express = require('express');
const app = express();
// const bodyPraser = require('body-praser');
// const path = require('path');
const bodyParser = require('body-parser')
const userRoutes = require('./router')
const port = 3000;

 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use('/',userRoutes);

app.listen(port, () => {
    console.log('server started',port)
})