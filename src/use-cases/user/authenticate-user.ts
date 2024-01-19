import { UnauthorizedError } from "../../error";
import { type UserDependencies, type AuthenticateUserRequest } from "./types";

export const makeAuthenticateUser = ({
  comparePassword,
  userDb,
  generateToken,
  secret,
}: Pick<
  UserDependencies,
  "userDb" | "comparePassword" | "generateToken" | "secret"
>) => {
  const authenticateUser = async ({ body }: AuthenticateUserRequest) => {
    const user = await userDb.findByEmail(body.email);

    if (!user) {
      throw new UnauthorizedError({ email: body.email });
    }

    if (!(await comparePassword(body.password, user.password))) {
      throw new UnauthorizedError();
    }

    const payload = {
      id: user._id.toString(),
      name: user.name,
    };

    const token = generateToken(payload, secret);

    return { token };
  };

  return authenticateUser;
};
