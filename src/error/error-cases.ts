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

export class NotFoundError extends BaseError {
  constructor(meta?: Record<string, unknown>) {
    super("NOT FOUND", 404, true, "Resource doesn't exist", meta);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(meta?: Record<string, unknown>) {
    super(
      "UNAUTHORIZED",
      401,
      true,
      "The request lacks valid authentication credentials for the requested resource.",
      meta,
    );
  }
}

export class ConflictError extends BaseError {
  constructor(meta?: Record<string, unknown>) {
    super(
      "CONFLICCT",
      409,
      true,
      "The request could not be completed due to a conflict with the current state of the target resource",
      meta,
    );
  }
}
