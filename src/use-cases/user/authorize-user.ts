import { type NextFunction } from "express";
import { UnauthorizedError } from "../../error";
import { type AuthorizeUserRequest, type UserDependencies } from "./types";

export const makeAuthorizeUser = ({
  secret,
  verifyToken,
}: Pick<UserDependencies, "secret" | "verifyToken">) => {
  const authorizeUser = (request: AuthorizeUserRequest, next: NextFunction) => {
    const authorization = request.header("authorization");

    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw new UnauthorizedError();
    }

    const token = authorization.replace(/^Bearer\s*/, "");

    const payload = verifyToken(token, secret);

    request.user = payload.id;

    next();
  };

  return authorizeUser;
};
