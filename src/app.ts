import express from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import logger from "./logger";
import userRouter, { auth } from "./routes/user.route";
import boardRouter from "./routes/board.route";
import columnRouter from "./routes/column.route";

const app = express();

const apiPaths = ["/user", "/board", "/column"];

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(compression());
app.use(apiPaths[0], userRouter);
app.use(apiPaths.slice(1), auth);
app.use(apiPaths[1], boardRouter);
app.use(apiPaths[2], columnRouter);

const startServer = (port: number) => {
  const server = app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
  });

  server.on("error", (error) => {
    logger.error(error);
  });
};

export default startServer;
