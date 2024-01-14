import { hashPassword, comparePassword } from "../../utils/password";
import { makeAuthenticateUser } from "./authenticate-user";
import { generateToken, verifyToken } from "../../utils/token";
import { makeCreateuser } from "./create-user";
import { userDb } from "../../data-access";
import config from "../../config";
import { makeAuthorizeUser } from "./authorize-user";

const { salt, secret } = config;

const createUser = makeCreateuser({ userDb, hashPassword, salt });
const authenticateUser = makeAuthenticateUser({
  userDb,
  comparePassword,
  generateToken,
  secret,
});
const authorizeUser = makeAuthorizeUser({ secret, verifyToken });

const userService = Object.freeze({
  createUser,
  authenticateUser,
  authorizeUser,
});

export default userService;
