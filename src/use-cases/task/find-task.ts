import { NotFoundError } from "../../error";
import { type FindTaskRequest, type TaskDependencies } from "./types";

export const makeFindTask = ({ taskDb }: Pick<TaskDependencies, "taskDb">) => {
  const findTask = async ({ params: { taskId } }: FindTaskRequest) => {
    const task = await taskDb.find(taskId);

    if (!task) {
      throw new NotFoundError({ taskId });
    }

    return task.toJSON();
  };

  return findTask;
};
