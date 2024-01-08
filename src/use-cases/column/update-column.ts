import { type ColumnDependencies, type UpdateColumnRequest } from "./types";

export const makeUpdateColumn = ({
  columnDb,
}: Pick<ColumnDependencies, "columnDb">) => {
  const updateColumn = async ({
    params: { columnId },
    body,
  }: UpdateColumnRequest) => {
    await columnDb.update(columnId, body);

    return "Column updated";
  };

  return updateColumn;
};
