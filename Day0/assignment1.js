const http = require('http');

// const fs = require('fs');

const server = http.createServer( (req,res)=>{
    // console.log('Its Working');
    const url = req.url;
    const method = req.method;

    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome, Create User</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');   
        res.write('</html>');
        return res.end();
    }
    if(url==='/users'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>  <ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/create-user'){
        const body =[];
        req.on('data', (chunk) =>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody= Buffer.concat(body).toString();
            const username =parsedBody.split('=')[1];
            console.log(username);
        })
        res.statusCode=302;
        res.setHeader('Location','/');
        res.end();
    }
});

server.listen(3000);