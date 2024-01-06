import { type BoardDependencies, type UpdateBoardRequest } from "./types";

export const makeUpdateBoard = ({
  boardDb,
}: Pick<BoardDependencies, "boardDb">) => {
  const updateBoard = async ({
    params: { boardId },
    body,
  }: UpdateBoardRequest) => {
    await boardDb.update(boardId, body);

    return "Board updated";
  };

  return updateBoard;
};
