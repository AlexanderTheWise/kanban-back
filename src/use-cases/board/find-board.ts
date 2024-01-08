import { type BoardDependencies, type FindBoardRequest } from "./types";
import { NotFoundError } from "../../error";

export const makeFindBoard = ({ boardDb }: BoardDependencies) => {
  const findBoard = async ({ params: { boardId } }: FindBoardRequest) => {
    const board = await boardDb.find(boardId);

    if (!board) {
      throw new NotFoundError({ boardId });
    }

    return board.toJSON();
  };

  return findBoard;
};
