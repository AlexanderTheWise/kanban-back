import taskService from "../use-cases/task";
import {
  type FindTaskRequest,
  type CreateTaskRequest,
  type DeleteTaskRequest,
  type UpdateTaskRequest,
  type MoveTaskRequest,
  type CreateSubtaskRequest,
  type DeleteSubtaskRequest,
  type ToggleSubtaskRequest,
} from "../use-cases/task/types";

const taskController = Object.freeze({
  create: async (httpRequest: CreateTaskRequest) =>
    taskService.createTask(httpRequest),
  delete: async (httpRequest: DeleteTaskRequest) =>
    taskService.deleteTask(httpRequest),
  find: async (httpRequest: FindTaskRequest) =>
    taskService.findTask(httpRequest),
  update: async (httpRequest: UpdateTaskRequest) =>
    taskService.updateTask(httpRequest),
  move: async (httpRequest: MoveTaskRequest) =>
    taskService.moveTask(httpRequest),
  createSubtask: async (httpRequest: CreateSubtaskRequest) =>
    taskService.createSubtask(httpRequest),
  deleteSubtask: async (httpRequest: DeleteSubtaskRequest) =>
    taskService.deleteSubtask(httpRequest),
  toggleSubtask: async (httpRequest: ToggleSubtaskRequest) =>
    taskService.toggleSubtask(httpRequest),
});

export default taskController;
