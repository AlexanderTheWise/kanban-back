import { type DeleteTaskRequest, type TaskDependencies } from "./types";

export const makeDeleteTask = ({ columnDb, taskDb }: TaskDependencies) => {
  const deleteTask = async ({
    params: { columndId, taskId },
  }: DeleteTaskRequest) => {
    await taskDb.remove(taskId);

    await columnDb.update(columndId, { $pull: { tasks: taskId } });

    return "Column deleted";
  };

  return deleteTask;
};
