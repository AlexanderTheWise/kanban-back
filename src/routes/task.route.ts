import { Router } from "express";
import makeExpressCallback from "./make-express-callback";
import taskController from "../controllers/task.controller";

const taskRouter = Router();
const subtaskRouter = Router();

subtaskRouter.post(
  "/:taskId",
  makeExpressCallback(taskController.createSubtask),
);
subtaskRouter.delete(
  "/:taskId/:subtaskId",
  makeExpressCallback(taskController.deleteSubtask),
);
subtaskRouter.put(
  "/:taskId/:subtaskId",
  makeExpressCallback(taskController.toggleSubtask),
);

taskRouter.use("/subtask", subtaskRouter);
taskRouter.post("/:columnId", makeExpressCallback(taskController.create));
taskRouter.get("/:taskId", makeExpressCallback(taskController.find));
taskRouter.put("/:taskId", makeExpressCallback(taskController.update));
taskRouter.put(
  "/:columnId/:taskId/:nextColumnId",
  makeExpressCallback(taskController.move),
);
taskRouter.delete(
  "/:columnId/:taskId",
  makeExpressCallback(taskController.delete),
);

export default taskRouter;
