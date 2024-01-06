import { type UpdateQuery } from "mongoose";
import { type IModels, type IUser } from "../models";

export const makeUserDb = (User: IModels["User"]) => {
  const insert = async (user: Omit<IUser, "columns">) => User.create(user);

  const update = async (_id: string, updateQuery: UpdateQuery<IUser>) =>
    User.updateOne({ _id }, updateQuery);

  const remove = async (_id: string) => User.deleteOne({ _id });

  const find = async (_id: string) => User.findById(_id);

  return Object.freeze({ insert, update, remove, find });
};

export type UserDb = ReturnType<typeof makeUserDb>;
