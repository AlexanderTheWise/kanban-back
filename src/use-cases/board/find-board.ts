import { type BoardRequest, type BoardDependencies } from "./types";
import { NotFoundError } from "../../error";

export const makeFindBoard = ({ boardDb }: BoardDependencies) => {
  const findBoard = async ({ params: { boardId } }: BoardRequest) => {
    const board = await boardDb.find(boardId);

    if (!board) {
      throw new NotFoundError({ boardId });
    }

    return board.toJSON();
  };

  return findBoard;
};
