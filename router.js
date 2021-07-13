const express = require ('express');
const router = express.Router();

router.get('/student',(req,res)=>{
    res.send("your host address is /student/studentLists ")
})
router.get('/student/studentLists',(req,res)=>{
    res.json({
        results :[
        "chris heaven","gal gadot","Robert tony jr","scarlett johnson"
    ]}); 
    
})


module.exports = router