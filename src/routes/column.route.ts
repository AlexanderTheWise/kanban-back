import { Router } from "express";
import makeExpressCallback from "./make-express-callback";
import columnController from "../controllers/column.controller";

const columnRouter = Router();

columnRouter.post("/:boardId", makeExpressCallback(columnController.create));
columnRouter.delete(
  "/:boardId/:columnId",
  makeExpressCallback(columnController.delete),
);
columnRouter.get("/:columnId", makeExpressCallback(columnController.find));
columnRouter.put("/:columnId", makeExpressCallback(columnController.update));
columnRouter.put(
  "/:boardId/:columnId",
  makeExpressCallback(columnController.move),
);

export default columnRouter;
