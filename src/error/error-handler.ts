import { type Response } from "express";
import { BaseError } from "./error-cases";
import logger from "../logger";

class ErrorHandler {
  public handleError(error: Error, response: Response) {
    logger.error(error);

    if (!this.isTrustedError(error)) {
      response.status(500).json({ message: "Internal server error" });
      process.exit(1);
    }

    const { status, message } = error as BaseError;

    response.status(status).json({ message });
  }

  private isTrustedError(error: Error) {
    return error instanceof BaseError ? error.isOperational : false;
  }
}

export const errorHandler = new ErrorHandler();
