import { type BoardDb } from "../../data-access/board.db";
import { type ColumnDb } from "../../data-access/column.db";
import { type ApiRequest } from "../types";

export interface ColumnDependencies {
  boardDb: BoardDb;
  columnDb: ColumnDb;
}

export interface ColumnRequest extends ApiRequest {
  params: {
    boardId: string;
    columnId: string;
  };
}

export interface ColumnBody {
  title: string;
}

export interface CreateColumnRequest extends ColumnRequest {
  body: ColumnBody;
}

export interface UpdateColumnRequest extends ColumnRequest {
  body: ColumnBody;
}

export interface DeleteColumnRequest extends ColumnRequest {}

export interface FindColumnRequest extends ColumnRequest {
  query: {
    limit: string;
    skip: string;
  };
}

export interface MoveColumnRequest extends ColumnRequest {
  body: {
    position: number;
  };
}
