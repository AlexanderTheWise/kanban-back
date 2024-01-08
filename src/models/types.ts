import { type Model, type Types } from "mongoose";

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

export interface PopulatedColumn extends Omit<IColumn, "tasks"> {
  tasks: Types.DocumentArray<ITask>;
}

export interface IBoard {
  user: Types.ObjectId;
  title: string;
  columns: Types.Array<Types.ObjectId>;
}

export interface IUser {
  email: string;
  password: string;
  boards: Types.Array<Types.ObjectId>;
}

export interface IModels {
  User: Model<IUser>;
  Board: Model<IBoard>;
  Column: Model<IColumn>;
  Task: Model<ITask>;
}
