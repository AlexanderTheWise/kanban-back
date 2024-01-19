import boardService from "../use-cases/board";
import {
  type DeleteBoardRequest,
  type CreateBoardRequest,
  type FindBoardRequest,
  type UpdateBoardRequest,
} from "../use-cases/board/types";

const boardController = Object.freeze({
  create: async (httpRequest: CreateBoardRequest) =>
    boardService.createBoard(httpRequest),
  delete: async (httpRequest: DeleteBoardRequest) =>
    boardService.deleteBoard(httpRequest),
  find: async (httpRequest: FindBoardRequest) =>
    boardService.findBoard(httpRequest),
  update: async (httpRequest: UpdateBoardRequest) =>
    boardService.updateBoard(httpRequest),
});

export default boardController;
