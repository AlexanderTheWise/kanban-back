import { type HydratedDocument, Schema, model } from "mongoose";
import { type IColumn } from "./types";
import { Task } from "./Task";

const columnSchema = new Schema<IColumn>({
  board: {
    type: Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

columnSchema.pre(
  "deleteOne",
  { document: false, query: true },
  async function () {
    const column = (await this.model
      .findOne(this.getFilter())
      .exec()) as HydratedDocument<IColumn>;

    if (column.tasks.length) {
      await Promise.all(column.tasks.map((_id) => Task.deleteOne({ _id })));
    }
  },
);

export const Column = model("Column", columnSchema, "columns");
