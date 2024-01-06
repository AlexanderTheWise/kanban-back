import { boardDb, userDb } from "../../data-access";
import { makeCreateBoard } from "./create-board";
import { makeDeleteBoard } from "./delete-board";
import { makeUpdateBoard } from "./update-board";

const createBoard = makeCreateBoard({ boardDb, userDb });
const deleteBoard = makeDeleteBoard({ boardDb, userDb });
const updateBoard = makeUpdateBoard({ boardDb });
const findBoard = makeUpdateBoard({ boardDb });

const boardService = Object.freeze({
  createBoard,
  deleteBoard,
  updateBoard,
  findBoard,
});

export default boardService;
