const client = require('./database.js')
const express = require('express')
const app = express()

app.listen(3300, () =>{
    console.log("Server is listening to port 3300")
})

client.connect()

app.get('/customers', (req,res) => {
    client.query(`select * from customers`, (err, result) => {
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
