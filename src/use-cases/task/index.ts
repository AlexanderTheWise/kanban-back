import { columnDb, taskDb } from "../../data-access";
import { makeCreateSubtask } from "./create-subtask";
import { makeCreateTask } from "./create-task";
import { makeDeleteSubtask } from "./delete-subtask";
import { makeDeleteTask } from "./delete-task";
import { makeFindTask } from "./find-task";
import { makeMoveTask } from "./move-task";
import { makeToggleSubtask } from "./toggle-subtask";
import { makeUpdateTask } from "./update-task";

const createTask = makeCreateTask({ columnDb, taskDb });
const deleteTask = makeDeleteTask({ columnDb, taskDb });
const updateTask = makeUpdateTask({ taskDb });
const findTask = makeFindTask({ taskDb });
const moveTask = makeMoveTask({ columnDb, taskDb });
const createSubtask = makeCreateSubtask({ taskDb });
const deleteSubtask = makeDeleteSubtask({ taskDb });
const toggleSubtask = makeToggleSubtask({ taskDb });

const taskService = Object.freeze({
  createTask,
  deleteTask,
  updateTask,
  findTask,
  moveTask,
  createSubtask,
  deleteSubtask,
  toggleSubtask,
});

export default taskService;
