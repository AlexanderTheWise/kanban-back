import { type Response, type Request, type NextFunction } from "express";
import { errorHandler } from "../error";

const makeExpressCallback =
  (
    controller: (
      request: Request,
      response: Response,
      next: NextFunction,
    ) => Promise<unknown>,
    respond = true,
  ) =>
  async (request: Request, response: Response, next: NextFunction) => {
    await controller(request, response, next)
      .then((data) => {
        if (respond) {
          response.status(200).json({
            status: "success",
            code: 200,
            data,
          });
        }
      })
      .catch((error: Error) => {
        errorHandler.handleError(error, response);
      });
  };

export default makeExpressCallback;
