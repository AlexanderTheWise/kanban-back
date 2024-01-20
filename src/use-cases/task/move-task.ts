import { NotFoundError } from "../../error";
import { type MoveTaskRequest, type TaskDependencies } from "./types";

export const makeMoveTask = ({ columnDb, taskDb }: TaskDependencies) => {
  const moveTask = async ({
    params: { columnId, taskId, nextColumnId },
    body: { position: $position },
  }: MoveTaskRequest) => {
    const isTheSameColumn = columnId === nextColumnId;

    const $push = {
      $each: [taskId],
      $position,
    };

    const previousColumn = await columnDb.find(columnId);

    if (!previousColumn) {
      throw new NotFoundError({ columnId });
    }

    previousColumn.tasks.remove(taskId);

    if (isTheSameColumn) {
      previousColumn.tasks.push($push);
      await previousColumn.save();
    } else {
      await previousColumn.save();
      const nextColumn = await columnDb.find(nextColumnId);

      if (!nextColumn) {
        throw new NotFoundError({ columnId });
      }

      nextColumn.tasks.push($push);

      await nextColumn.save();
      await taskDb.update(taskId, { $set: { column: nextColumnId } });
    }

    return `Task moved to position ${$position} in column ${nextColumnId}`;
  };

  return moveTask;
};
