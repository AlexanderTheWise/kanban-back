import { type NextFunction, type Response } from "express";
import userService from "../use-cases/user";
import {
  type AuthenticateUserRequest,
  type AuthorizeUserRequest,
  type CreateUserRequest,
} from "../use-cases/user/types";

const userController = Object.freeze({
  register: async (httpRequest: CreateUserRequest) =>
    userService.createUser(httpRequest),
  login: async (httpRequest: AuthenticateUserRequest) =>
    userService.authenticateUser(httpRequest),
  async auth(
    httpRequest: AuthorizeUserRequest,
    _: Response,
    next: NextFunction,
  ) {
    userService.authorizeUser(httpRequest, next);
  },
});

export default userController;
