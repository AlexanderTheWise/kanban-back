import { type Request } from "express";
import { type BoardDb } from "../../data-access/board.db";
import { type UserDb } from "../../data-access/user.db";

export interface BoardDependencies {
  boardDb: BoardDb;
  userDb: UserDb;
}

export interface BoardRequest extends Request {
  params: {
    boardId: string;
  };
  user: string;
}

export interface CreateBoardRequest extends BoardRequest {
  body: {
    title: string;
  };
}

export interface UpdateBoardRequest extends CreateBoardRequest {}
