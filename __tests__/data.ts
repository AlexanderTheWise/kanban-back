import config from "../src/config";
import { hashPassword } from "../src/utils/password";

const user = {
  name: "Alexander",
  email: "email@email.com",
  password: "userpassword",
};

const hashedPassword = hashPassword(user.password, config.salt);

const statuses = {
  ok: 200,
  notFound: 404,
  unauthorized: 401,
  conflict: 409,
};

export { user, hashedPassword, statuses };
