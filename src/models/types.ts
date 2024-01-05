import { type Types } from "mongoose";

export interface ISubtask {
  title: string;
  isCompleted: false;
}

export interface ITask {
  column: Types.ObjectId;
  title: string;
  description: string;
  subtasks: Types.DocumentArray<ISubtask>;
}

export interface IColumn {
  board: Types.ObjectId;
  title: string;
  tasks: Types.Array<Types.ObjectId>;
}

export interface IBoard {
  user: Types.ObjectId;
  title: string;
  columns: Types.Array<Types.ObjectId>;
}

export interface IUser {
  email: string;
  password: string;
}
