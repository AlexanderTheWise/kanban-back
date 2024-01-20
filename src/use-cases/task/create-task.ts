import { Types } from "mongoose";
import { type CreateTaskRequest, type TaskDependencies } from "./types";

export const makeCreateTask = ({ columnDb, taskDb }: TaskDependencies) => {
  const createTask = async ({
    body: { title, description },
    params: { columnId },
  }: CreateTaskRequest) => {
    const task = {
      column: new Types.ObjectId(columnId),
      title,
      description,
    };

    const doc = await taskDb.insert(task);

    await columnDb.update(columnId, { $push: { tasks: doc._id } });

    return doc.toJSON();
  };

  return createTask;
};
