const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    console.log("Hello From express");
    res.status(200);
    res.json({message:"Hello EXPRESS"})
})

module.exports = app;