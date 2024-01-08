import { type Types, type UpdateQuery } from "mongoose";
import { type ITask, type IColumn, type IModels } from "../models";

export const makeColumnDb = (Column: IModels["Column"]) => {
  const insert = async (column: Omit<IColumn, "tasks">) =>
    Column.create(column);

  const update = async (_id: string, updateQuery: UpdateQuery<IColumn>) =>
    Column.updateOne({ _id }, updateQuery);

  const remove = async (_id: string) => Column.deleteOne({ _id });

  const find = async (_id: string) => Column.findById(_id);

  const paginate = async (_id: string, limit: number, skip: number) =>
    Column.findById(_id)
      .populate<{ tasks: Types.DocumentArray<ITask> }>({
        path: "tasks",
        options: { limit, skip },
      })
      .exec();

  return Object.freeze({ insert, update, remove, find, paginate });
};

export type ColumnDb = ReturnType<typeof makeColumnDb>;
