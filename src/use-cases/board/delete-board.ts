import { type BoardDependencies, type DeleteBoardRequest } from "./types";

export const makeDeleteBoard = ({ boardDb, userDb }: BoardDependencies) => {
  const deleteBoard = async ({
    params: { boardId },
    user,
  }: DeleteBoardRequest) => {
    await boardDb.remove(boardId);

    await userDb.update(user, { $pull: { boards: boardId } });

    return "Board deleted";
  };

  return deleteBoard;
};
