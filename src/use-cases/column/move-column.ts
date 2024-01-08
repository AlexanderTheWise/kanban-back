import { type ColumnDependencies, type MoveColumnRequest } from "./types";

export const makeMoveColumn = ({
  boardDb,
}: Pick<ColumnDependencies, "boardDb">) => {
  const moveColumn = async ({
    params: { boardId, columnId },
    body: { position },
  }: MoveColumnRequest) => {
    await boardDb.update(boardId, {
      $pull: { columns: columnId },
      $push: { columns: { $each: [columnId], $position: position } },
    });

    return `Column moved to position ${position}`;
  };

  return moveColumn;
};
