import { Router } from "express";
import makeExpressCallback from "./make-express-callback";
import boardController from "../controllers/board.controller";

const boardRouter = Router();

boardRouter.post("", makeExpressCallback(boardController.create));
boardRouter.delete("/:boardId", makeExpressCallback(boardController.delete));
boardRouter.get("/:boardId", makeExpressCallback(boardController.find));
boardRouter.put("/:boardId", makeExpressCallback(boardController.update));

export default boardRouter;
