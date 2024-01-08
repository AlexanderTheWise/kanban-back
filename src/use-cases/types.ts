import { type Request } from "express";

export interface ApiRequest extends Request {
  user: string;
}
