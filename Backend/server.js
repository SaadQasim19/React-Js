import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import user_routes from "./routes/user_routes.js";
import connectDB from "./config/db.js";

const app = express();
const Port = process.env.PORT || 8000;

//& MiddleWare
app.use(cors());
app.use(express.json());

//& Routes
app.use("/api/user", user_routes);

//& MongoDB Connection

connectDB();

app.listen(Port, () => {
  console.log(`Server is running on port http://localhost:${Port}`);
});
