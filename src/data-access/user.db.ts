import { type UpdateQuery } from "mongoose";
import { type IModels, type IUser } from "../models";

export const makeUserDb = (User: IModels["User"]) => {
  const insert = async (user: Omit<IUser, "boards">) => User.create(user);

  const update = async (_id: string, updateQuery: UpdateQuery<IUser>) =>
    User.updateOne({ _id }, updateQuery);

  const remove = async (_id: string) => User.deleteOne({ _id });

  const findById = async (_id: string) => User.findById(_id);

  const findByEmail = async (email: string) => User.findOne({ email });

  const emailExists = async (email: string) => User.findOne({ email }).exec();

  return Object.freeze({
    insert,
    update,
    remove,
    findById,
    findByEmail,
    emailExists,
  });
};

export type UserDb = ReturnType<typeof makeUserDb>;
