const express = require("express");
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const routes = require("./routes");
const cors =require('cors');
const bodyParser = require("body-parser");

dotenv.config()

const app=express() 
const port= process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.get("/",(req,res)=>{ 
    res.send("Hello Restful API")     
}) 


routes(app);

mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect Db success!')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port,()=>{ 
    console.log(`My Server listening on port ${port}`) 
}) 