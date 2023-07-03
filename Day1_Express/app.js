const express = require('express');
const bodyParser = require('body-parser')
const path= require('path');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const rootDir = require('./util/path.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'/public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    // res.status(404).send('<h1>Error Page Not Found</h1>');
    // const fp = path.join(rootDir,'views','404.html');
    // console.log(fp);
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(3000);