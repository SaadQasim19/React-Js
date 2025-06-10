import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import user_routes from './routes/user_routes.js';
dotenv.config();
const Port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());


//& Routes

//& /user is a base URL .it will be present in the URL even if we don't add it in the postman/router.
app.use("/user", user_routes);

app.listen(Port,()=>{
    console.log(`Server Running at https://localhost:${Port}`);
});