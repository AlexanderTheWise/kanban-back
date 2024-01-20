import { type DeleteTaskRequest, type TaskDependencies } from "./types";

export const makeDeleteTask = ({ columnDb, taskDb }: TaskDependencies) => {
  const deleteTask = async ({
    params: { columnId, taskId },
  }: DeleteTaskRequest) => {
    await taskDb.remove(taskId);

    await columnDb.update(columnId, { $pull: { tasks: taskId } });

    return "Task deleted";
  };

  return deleteTask;
};
