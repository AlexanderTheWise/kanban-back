import { type DeleteSubtaskRequest, type SubtaskDependency } from "./types";

export const makeDeleteSubtask = ({ taskDb }: SubtaskDependency) => {
  const deleteSubtask = async ({
    params: { subtaskId, taskId },
  }: DeleteSubtaskRequest) => {
    await taskDb.update(taskId, { $pull: { subtasks: subtaskId } });

    return "Subtask deleted";
  };

  return deleteSubtask;
};
