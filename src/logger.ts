import winston from "winston";
import { BaseError } from "./error";

const formatter = winston.format.combine(
  winston.format.colorize({ level: true }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.align(),
  winston.format.printf(
    ({ level, message, timestamp, ...meta }) =>
      `[${timestamp}] ${level}: ${message} ${
        Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ""
      }`,
  ),
);

class Logger {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      format: formatter,
      transports: [new winston.transports.Console()],
    });
  }

  public info(message: string) {
    this.logger.info(message);
  }

  public error(error: Error) {
    const { message, ...rest } = error;
    const meta = error instanceof BaseError ? error.meta : {};

    this.logger.error(message, { ...rest, meta });
  }
}

const logger = new Logger();

export default logger;
