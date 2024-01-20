import { NotFoundError } from "../../error";
import { type ToggleSubtaskRequest, type SubtaskDependency } from "./types";

export const makeToggleSubtask = ({ taskDb }: SubtaskDependency) => {
  const toggleSubtask = async ({
    params: { subtaskId, taskId },
  }: ToggleSubtaskRequest) => {
    const task = await taskDb.find(taskId);

    if (!task) {
      throw new NotFoundError({ taskId });
    }

    const subtask = task.subtasks.id(subtaskId);

    if (!subtask) {
      throw new NotFoundError({ subtaskId });
    }

    subtask.set("isCompleted", !subtask.isCompleted);

    await task.save();

    return "Subtask completition toggled";
  };

  return toggleSubtask;
};
