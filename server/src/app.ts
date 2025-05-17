import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import taskRouter from "./routes/task.routes.js";
import { logger } from "./utils/logger.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

//Route
app.use("/tasks", logger, taskRouter);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
