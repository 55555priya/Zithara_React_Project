const express = require("express")
const nodemon = require("nodemon")
const cors = require("cors")
const client = require('./database.js')

const app = express()

app.use(express.json())
app.use(cors())

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