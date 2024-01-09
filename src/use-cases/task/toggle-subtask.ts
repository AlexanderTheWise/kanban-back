import { type ToggleSubtaskRequest, type SubtaskDependency } from "./types";

export const makeToggleSubtask = ({ taskDb }: SubtaskDependency) => {
  const toggleSubtask = async ({
    params: { subtaskId, taskId },
  }: ToggleSubtaskRequest) => {
    await taskDb.updateSubtask(taskId, subtaskId, {
      $set: { "subtasks.$.isCompleted": { $not: "$subtasks.isCompleted" } },
    });

    return "Subtask completition toggled";
  };

  return toggleSubtask;
};
