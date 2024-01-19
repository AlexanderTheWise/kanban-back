import columnService from "../use-cases/column";
import {
  type DeleteColumnRequest,
  type CreateColumnRequest,
  type FindColumnRequest,
  type UpdateColumnRequest,
  type MoveColumnRequest,
} from "../use-cases/column/types";

const columnController = Object.freeze({
  create: async (httpRequest: CreateColumnRequest) =>
    columnService.createColumn(httpRequest),
  delete: async (httpRequest: DeleteColumnRequest) =>
    columnService.deleteColumn(httpRequest),
  find: async (httpRequest: FindColumnRequest) =>
    columnService.findColumn(httpRequest),
  update: async (httpRequest: UpdateColumnRequest) =>
    columnService.updateColumn(httpRequest),
  move: async (httpRequest: MoveColumnRequest) =>
    columnService.moveColumn(httpRequest),
});

export default columnController;
