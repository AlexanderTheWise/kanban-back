import { type ColumnDb } from "../../data-access/column.db";
import { type TaskDb } from "../../data-access/task.db";
import { type ApiRequest } from "../types";

export interface TaskDependencies {
  columnDb: ColumnDb;
  taskDb: TaskDb;
}

interface TaskRequest extends ApiRequest {
  params: {
    columnId: string;
    taskId: string;
  };
}

interface TaskBody {
  title: string;
  description: string;
}

export interface CreateTaskRequest extends TaskRequest {
  body: TaskBody;
}

export interface UpdateTaskRequest extends TaskRequest {
  body: TaskBody;
}

export interface DeleteTaskRequest extends TaskRequest {}

export interface FindTaskRequest extends TaskRequest {}

export interface MoveTaskRequest extends ApiRequest {
  params: {
    columnId: string;
    taskId: string;
    nextColumnId: string;
  };
  body: {
    position: number;
  };
}

export type SubtaskDependency = Pick<TaskDependencies, "taskDb">;

interface SubtaskRequest extends ApiRequest {
  params: {
    taskId: string;
    subtaskId: string;
  };
}

export interface CreateSubtaskRequest extends SubtaskRequest {
  body: {
    title: string;
  };
}

export interface DeleteSubtaskRequest extends SubtaskRequest {}

export interface ToggleSubtaskRequest extends SubtaskRequest {}
