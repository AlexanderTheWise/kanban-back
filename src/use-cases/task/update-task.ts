import { type UpdateTaskRequest, type TaskDependencies } from "./types";

export const makeUpdateTask = ({
  taskDb,
}: Pick<TaskDependencies, "taskDb">) => {
  const updateTask = async ({
    params: { taskId },
    body,
  }: UpdateTaskRequest) => {
    await taskDb.update(taskId, body);

    return "Task updated";
  };

  return updateTask;
};
