import { type ColumnDependencies, type DeleteColumnRequest } from "./types";

export const makeDeleteColumn = ({ boardDb, columnDb }: ColumnDependencies) => {
  const deleteColumn = async ({
    params: { boardId, columnId },
  }: DeleteColumnRequest) => {
    await columnDb.remove(columnId);

    await boardDb.update(boardId, { $pull: { columns: columnId } });

    return "Column deleted";
  };

  return deleteColumn;
};
