import { type UpdateQuery } from "mongoose";
import { type ITask, type IModels } from "../models";

export const makeTaskDb = (Task: IModels["Task"]) => {
  const insert = async (task: Omit<ITask, "subtasks">) => Task.create(task);

  const update = async (_id: string, updateQuery: UpdateQuery<ITask>) =>
    Task.updateOne({ _id }, updateQuery);

  const remove = async (_id: string) => Task.deleteOne({ _id });

  const find = async (_id: string) => Task.findById(_id);

  const updateSubtask = async (
    _id: string,
    subtask_id: string,
    updateQuery: UpdateQuery<ITask>,
  ) => Task.updateOne({ _id, "subtasks._id": subtask_id }, updateQuery);

  return Object.freeze({ insert, update, remove, find, updateSubtask });
};

export type TaskDb = ReturnType<typeof makeTaskDb>;
