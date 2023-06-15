const {Client} = require('pg');

const fs = require('fs');

const client = new Client({
    dbName : "riskmanager",
    host : "localhost",
    user : "drm",
    port : "6432",
    password : "9ovLOLDP",
    database : "riskmanager",
        ssl: {
          require: true, 
          rejectUnauthorized: false 
        }    
});
 
client.connect();

client.query(
    "SELECT user_id,user_name FROM ra_5151409d_3278_49af_8090_933c7dda0030.a3_user", (err,res)=>{
    if(!err){
        console.log("Connected");
        console.log(res.rows);
        var data = JSON.stringify(res.rows, null, 4);
        // console.log(data);
        fs.writeFileSync('example.json', data);
    }
    else{
        // console.log(err);
        console.log(err.message);
    }
    client.end;
})