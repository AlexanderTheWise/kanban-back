import { Schema, model } from "mongoose";
import { type ITask, type ISubtask } from "./types";

const subtaskSchema = new Schema<ISubtask>({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  isCompleted: {
    type: Schema.Types.Boolean,
    default: false,
  },
});

const taskSchema = new Schema<ITask>({
  column: { type: Schema.Types.ObjectId, ref: "Column", required: true },
  title: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  subtasks: [subtaskSchema],
});

export const Subtask = model("Subtask", subtaskSchema);
export const Task = model("Task", taskSchema, "tasks");
