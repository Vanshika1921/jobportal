//imports
//const express= require('express');
import express from "express";
import dotenv from 'dotenv';
//config
dotenv.config({path: './config'})

//rest objects
const app = express();
//routes
app.get("/",    (req,res)=>{
    res.send("<h1>WELCOME TO THE JOB BOARD</h1>");
});

//port
const PORT = process.env.PORT || 8080;
//LISTEN 
app.listen(PORT, ()=>{
    console.log(`Node Server Running in ${process.env.DEV_MODE} mode or port no. ${PORT}`);
});