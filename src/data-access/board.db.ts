import { type UpdateQuery } from "mongoose";
import { type IBoard, type IModels } from "../models";

export const makeBoardDb = (Board: IModels["Board"]) => {
  const insert = async (board: IBoard) => Board.create(board);

  const update = async (_id: string, updateQuery: UpdateQuery<IBoard>) =>
    Board.updateOne({ _id }, updateQuery);

  const remove = async (_id: string) => Board.deleteOne({ _id });

  const find = async (_id: string) => Board.findById(_id);

  return Object.freeze({ insert, update, remove, find });
};
