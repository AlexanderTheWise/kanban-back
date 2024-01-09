import { Subtask } from "../../models";
import { type CreateSubtaskRequest, type SubtaskDependency } from "./types";

export const makeCreateSubtask = ({ taskDb }: SubtaskDependency) => {
  const createSubtask = async ({
    params: { taskId },
    body,
  }: CreateSubtaskRequest) => {
    const subtask = new Subtask(body);

    await taskDb.update(taskId, { $push: { subtasks: subtask } });

    return subtask.toJSON();
  };

  return createSubtask;
};
