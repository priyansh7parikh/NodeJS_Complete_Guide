const http= require('http');

// function rqListener(req,res) {
// };

// http.createServer(rqListener);

const server = http.createServer((req,res)=>{
    console.log(req);
    // process.exit();
});

server.listen(3000);