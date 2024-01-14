import jwt from "jsonwebtoken";

export interface Payload {
  id: string;
  name: string;
}

export const generateToken = (payload: Payload, secret: string) =>
  jwt.sign(payload, secret);

export const verifyToken = (token: string, secret: string) =>
  jwt.verify(token, secret) as Payload;
