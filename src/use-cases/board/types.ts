import { type BoardDb } from "../../data-access/board.db";
import { type UserDb } from "../../data-access/user.db";
import { type ApiRequest } from "../types";

export interface BoardDependencies {
  boardDb: BoardDb;
  userDb: UserDb;
}

export interface BoardRequest extends ApiRequest {
  params: {
    boardId: string;
  };
}

export interface BoardBody {
  title: string;
}

export interface CreateBoardRequest extends BoardRequest {
  body: BoardBody;
}

export interface UpdateBoardRequest extends BoardRequest {
  body: BoardBody;
}

export interface DeleteBoardRequest extends BoardRequest {}

export interface FindBoardRequest extends BoardRequest {}
