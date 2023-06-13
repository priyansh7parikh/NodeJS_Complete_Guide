const express = require('express');

const app = express();

app.use('/',(req,res,next)=>{
    console.log('This Always runs');
    next();
});

app.use('/add-product',(req,res,next)=>{
    console.log("Add-Product")
    res.send('<form action="/product" method="POST"><input type="text" name ="title"><button type="Submit"></button></form>')
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    
})
app.listen(3000);