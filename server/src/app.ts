import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { connectDb } from "./config/db.js";
import taskRouter from "./routes/task.routes.js";
import { logger } from "./utils/logger.js";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5000", 
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(logger);

//Route
app.use("/api/task", taskRouter);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
