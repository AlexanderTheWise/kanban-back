import express from "express";
import logger from "./logger";

const app = express();

const startServer = (port: number) => {
  const server = app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
  });

  server.on("error", (error) => {
    logger.error(error);
  });
};

export default startServer;
