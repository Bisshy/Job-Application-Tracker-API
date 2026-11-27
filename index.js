import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";

import router from "./routes/applicationRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import getLogger from "./middleware/requestLogger.js";

const application = express();

const port = process.env.PORT || 4000;

//Middleware

application.use(express.json());
application.use(getLogger);
application.use(router);

application.get("/test-async-error", async (req, res) => {
  throw new Error("Async error test");
});

application.get("/test-error", (req, res, next) => {
  const error = new Error("Testing centralized error hanling");
  next(error);
});

application.use(errorHandler);

const startServer = async () => {
  await connectDB();
  application.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
};

startServer();
