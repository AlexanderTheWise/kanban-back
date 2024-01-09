import { type MoveTaskRequest, type TaskDependencies } from "./types";

export const makeMoveTask = ({ columnDb, taskDb }: TaskDependencies) => {
  const moveTask = async ({
    params: { columnId, taskId, nextColumnId },
    body: { $position },
  }: MoveTaskRequest) => {
    const isTheSameColumn = columnId === nextColumnId;

    const $push = {
      $each: [taskId],
      $position,
    };

    await columnDb.update(columnId, {
      $pull: {
        tasks: taskId,
      },

      ...(isTheSameColumn && { $push }),
    });

    if (!isTheSameColumn) {
      await columnDb.update(nextColumnId, { $push });
    }

    await taskDb.update(taskId, { column: nextColumnId });

    return `Task moved to position ${$position} in column ${nextColumnId}`;
  };

  return moveTask;
};
