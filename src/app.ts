import express from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import logger from "./logger";
import userRouter from "./routes/user.route";

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(compression());
app.use("/user", userRouter);

const startServer = (port: number) => {
  const server = app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
  });

  server.on("error", (error) => {
    logger.error(error);
  });
};

export default startServer;
