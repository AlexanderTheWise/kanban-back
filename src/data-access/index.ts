import * as models from "../models";
import { makeBoardDb } from "./board.db";
import { makeColumnDb } from "./column.db";
import { makeTaskDb } from "./task.db";
import { makeUserDb } from "./user.db";

export const userDb = makeUserDb(models.User);
export const boardDb = makeBoardDb(models.Board);
export const columnDb = makeColumnDb(models.Column);
export const taskDb = makeTaskDb(models.Task);
