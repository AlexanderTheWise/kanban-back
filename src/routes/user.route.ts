import { Router } from "express";
import userController from "../controllers/user.controller";
import makeExpressCallback from "./make-express-callback";

const userRouter = Router();
export const auth = makeExpressCallback(userController.auth, false);

userRouter.post("/register", makeExpressCallback(userController.register));
userRouter.post("/login", makeExpressCallback(userController.login));

export default userRouter;
