import { Router } from "express";
import userControllers from "../controllers/user.controllers";
import makeExpressCallback from "./make-express-callback";

const userRouter = Router();

userRouter.post("/register", makeExpressCallback(userControllers.register));
userRouter.post("/login", makeExpressCallback(userControllers.login));

export default userRouter;
