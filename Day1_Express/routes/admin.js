const express = require('express');

const router = express.Router();

// router.use()

router.get('/add-product',(req,res,next)=>{
    console.log("Add-Product")
    res.send('<form action="/product" method="POST"><input type="text" name ="title"><button type="submit">Add Product</button></form>')
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;
