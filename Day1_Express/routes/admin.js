const path = require('path');
const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

// router.use()

router.get('/add-product',(req,res,next)=>{
    // console.log("Add-Product")
    res.sendFile(path.join(rootDir,'views','add-product.html'))
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;
