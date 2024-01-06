import { Types } from "mongoose";
import { type BoardDependencies, type CreateBoardRequest } from "./types";

export const makeCreateBoard = ({ boardDb, userDb }: BoardDependencies) => {
  const createBoard = async ({ user, body: { title } }: CreateBoardRequest) => {
    const board = {
      user: new Types.ObjectId(user),
      title,
    };

    const doc = await boardDb.insert(board);

    await userDb.update(user, { $push: { boards: doc._id } });

    return doc.toJSON();
  };

  return createBoard;
};
