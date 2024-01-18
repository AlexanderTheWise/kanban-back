import { ConflictError } from "../../error";
import { type CreateUserRequest, type UserDependencies } from "./types";

export const makeCreateuser = ({
  userDb,
  hashPassword,
  salt,
}: Pick<UserDependencies, "userDb" | "hashPassword" | "salt">) => {
  const createUser = async ({ body }: CreateUserRequest) => {
    const exists = await userDb.emailExists(body.email);

    if (exists) {
      throw new ConflictError({ email: body.email });
    }

    const hashedPassword = await hashPassword(body.password, salt);

    await userDb.insert({ ...body, password: hashedPassword });

    return "User has been created";
  };

  return createUser;
};
