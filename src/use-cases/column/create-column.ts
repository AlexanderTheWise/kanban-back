import { Types } from "mongoose";
import { type CreateColumnRequest, type ColumnDependencies } from "./types";

export const makeCreateColumn = ({ boardDb, columnDb }: ColumnDependencies) => {
  const createColumn = async ({
    body: { title },
    params: { boardId },
  }: CreateColumnRequest) => {
    const column = {
      board: new Types.ObjectId(boardId),
      title,
    };

    const doc = await columnDb.insert(column);

    await boardDb.update(boardId, { $push: { columns: doc._id } });

    return doc.toJSON();
  };

  return createColumn;
};
