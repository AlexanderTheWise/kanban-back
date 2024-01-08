import { NotFoundError } from "../../error";
import { type ColumnDependencies, type FindColumnRequest } from "./types";

export const makeFindColumn = ({
  columnDb,
}: Pick<ColumnDependencies, "columnDb">) => {
  const findColumn = async ({
    params: { columnId },
    query: { limit, skip },
  }: FindColumnRequest) => {
    const column = await columnDb.paginate(
      columnId,
      +(limit ?? 10),
      +(skip ?? 0),
    );

    if (!column) {
      throw new NotFoundError({ columnId });
    }

    return column.toJSON();
  };

  return findColumn;
};
