import bcrypt from "bcrypt";

export const hashPassword = async (plainPassword: string, salt: number) =>
  bcrypt.hash(plainPassword, salt);

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string,
) => bcrypt.compare(plainPassword, hashedPassword);
