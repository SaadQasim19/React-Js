import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();

const app = express();

app.get("/",(req , res)=>{
    res.send("Hello From Express");
})

app.listen(Port,()=>{
    console.log(`Server Running at https://localhost:${Port}`);
});