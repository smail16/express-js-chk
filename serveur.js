const express= require('express')
const app= express()
const path = require('path');

// app.use(function (req, res, next) {
    
//     const date = new Date(Date.now());
//     let time=date.getHours()
//     let day =date.getDay()
//    if(time < 9 || time >23 || day ==0 || day == 6  ){
//     // console.log('out')
//     res.status(404).send("du lundi au vendredi de 9h à 17h")
//    }else{
//     next();
//    }
    
    
//   });
  
app.get('/', (req,res)=>{
    res.redirect('/')
})
app.get('/acc', (req,res)=>{
    res.sendFile(path.join(__dirname+'/pages/acc.html'));
})
app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname+'/pages/home.html'));
})
app.get('/contactus', (req,res)=>{
    res.sendFile(path.join(__dirname+'/pages/contactus.html'));
})
app.get('/service', (req,res)=>{
    res.sendFile(path.join(__dirname+'/pages/service.html'));
})



app.listen(3000)