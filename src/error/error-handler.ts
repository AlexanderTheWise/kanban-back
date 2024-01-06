import { type Response } from "express";
import { BaseError } from "./error-cases";
import logger from "../logger";

export class ErrorHandler {
  public handleError(error: Error, response: Response) {
    logger.error(error);

    if (!this.isTrustedError(error)) {
      process.exit(1);
    }

    const { status, message } = error as BaseError;

    response.status(status).json({ message });
  }

  private isTrustedError(error: Error) {
    return error instanceof BaseError ? error.isOperational : false;
  }
}
