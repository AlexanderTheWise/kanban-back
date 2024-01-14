import { type Request } from "express";
import { type UserDb } from "../../data-access/user.db";
import { type Payload } from "../../utils/token";

export interface UserDependencies {
  userDb: UserDb;
  hashPassword: (plainPassword: string, salt: number) => Promise<string>;
  comparePassword: (
    plainPasswod: string,
    hashedPassword: string,
  ) => Promise<boolean>;
  salt: number;
  generateToken: (payload: Payload, secret: string) => string;
  verifyToken: (token: string, secret: string) => Payload;
  secret: string;
}

export interface UserRequest extends Request {}

export interface CreateUserRequest extends UserRequest {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

export interface AuthenticateUserRequest extends UserRequest {
  body: {
    email: string;
    password: string;
  };
}

export interface AuthorizeUserRequest extends Request {
  user: string;
}
