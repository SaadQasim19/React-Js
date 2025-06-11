import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import user_routes from "./routes/user.js";

const app = express();
const Port = process.env.PORT || 3000;

//& MiddleWare
app.use(cors());
app.use(express.json());

//& Routes
app.use("/api/user", user_routes);

//& MongoDB Connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(Port, () => {
  console.log(`Server is running on port https://localhost:${Port}`);
});
