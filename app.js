const express = require('express');
const app = express();
// const bodyPraser = require('body-praser');
// const path = require('path');
const bodyParser = require('body-parser');
// const userRoutes = require('./router');
const DATA = require('./data');
const path = require('path');
const port = process.env.PORT || 3000;

 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/student/studentLists',(req,res)=>{
        res.send(DATA);});
app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
})