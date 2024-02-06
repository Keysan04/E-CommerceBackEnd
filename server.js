import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDb } from "./src/config/dbConfig.js";

import userRouter from "./src/routers/userRouter.js";

const app = express();
const PORT = process.env.PORT || 8000;

connectDb();
app.use(cors());
app.use(express.json());
app.use(morgan("test"));

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server is live",
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  const errorCode = error.errorCode || 500;

  res.status(errorCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
