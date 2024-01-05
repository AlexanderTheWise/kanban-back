import { type UpdateQuery } from "mongoose";
import { type IColumn, type IModels } from "../models";

export const makeColumnDb = (Column: IModels["Column"]) => {
  const insert = async (column: IColumn) => Column.create(column);

  const update = async (_id: string, updateQuery: UpdateQuery<IColumn>) =>
    Column.updateOne({ _id }, updateQuery);

  const remove = async (_id: string) => Column.deleteOne({ _id });

  const find = async (_id: string) => Column.findById(_id);

  return Object.freeze({ insert, update, remove, find });
};
