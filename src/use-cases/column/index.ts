import { boardDb, columnDb } from "../../data-access";
import { makeCreateColumn } from "./create-column";
import { makeDeleteColumn } from "./delete-column";
import { makeFindColumn } from "./find-column";
import { makeMoveColumn } from "./move-column";
import { makeUpdateColumn } from "./update-column";

const createColumn = makeCreateColumn({ boardDb, columnDb });
const deleteColumn = makeDeleteColumn({ boardDb, columnDb });
const updateColumn = makeUpdateColumn({ columnDb });
const findColumn = makeFindColumn({ columnDb });
const moveColumn = makeMoveColumn({ boardDb });

const columnService = Object.freeze({
  createColumn,
  deleteColumn,
  updateColumn,
  findColumn,
  moveColumn,
});

export default columnService;
