import { type Response } from "express";
import logger from "./logger";

export class BaseError extends Error {
  constructor(
    public readonly name: string,
    public readonly status: number,
    public readonly isOperational: boolean,
    message: string,
    public readonly meta?: Record<string, unknown>,
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}

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
