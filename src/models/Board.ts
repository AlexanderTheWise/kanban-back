import { type HydratedDocument, Schema, model } from "mongoose";
import { type IBoard } from "./types";
import { Column } from "./Column";

const boardSchema = new Schema<IBoard>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  columns: [{ type: Schema.Types.ObjectId, ref: "Column" }],
});

boardSchema.pre(
  "deleteOne",
  { document: false, query: true },
  async function () {
    const board = (await this.model
      .findOne(this.getFilter())
      .exec()) as HydratedDocument<IBoard>;

    await Promise.all(board.columns.map((_id) => Column.deleteOne({ _id })));
  },
);

export const Board = model("Board", boardSchema, "boards");
