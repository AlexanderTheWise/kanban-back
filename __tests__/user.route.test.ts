import request from "supertest";
import { app } from "../src/app";
import { hashedPassword, statuses, user } from "./data";
import { userDb } from "../src/data-access";

describe("Given a POST /user/register endpoint", () => {
  describe("When it receives a request body with the name 'Alexander', the email 'email@email.com' and the password 'userpassword'", () => {
    test("Then it should respond with the message 'User has been created'", async () => {
      const expectedMessage = "User has been created";

      await request(app)
        .post("/user/register")
        .send(user)
        .expect(statuses.ok)
        .then(({ body }) => {
          expect(body.data).toBe(expectedMessage);
        });
    });

    test("Then it should respond with the message 'The request could not be completed due to a conflict with the current state of the target resource' if the email already exists", async () => {
      await userDb.insert(user);

      const expectedMessage =
        "The request could not be completed due to a conflict with the current state of the target resource";

      await request(app)
        .post("/user/register")
        .send(user)
        .expect(statuses.conflict)
        .then(({ body }) => {
          expect(body.message).toBe(expectedMessage);
        });
    });
  });
});

describe("Given a POST /user/login endpoint", () => {
  const unauthorizedMessage =
    "The request lacks valid authentication credentials for the requested resource";

  describe("When it receives a request body with the email 'email@email.com' and the password 'userpassword'", () => {
    test("Then it should respond with a token if the user with that email exists and the password is correct", async () => {
      await userDb.insert({ ...user, password: await hashedPassword });

      await request(app)
        .post("/user/login")
        .send(user)
        .expect(200)
        .then(({ body }) => {
          expect(body.data).toHaveProperty("token");
        });
    });

    test("Then it should respond with the message 'The request lacks valid authentication credentials for the requested resource' if the user with that email doesn't exist", async () => {
      await request(app)
        .post("/user/login")
        .send(user)
        .expect(statuses.unauthorized)
        .then(({ body }) => {
          expect(body.message).toBe(unauthorizedMessage);
        });
    });

    test("Then it should respond with the message 'The request lacks valid authentication credentials for the requested resource' if the user with that email exists but the password isn't correct", async () => {
      await userDb.insert({ ...user, password: await hashedPassword });
      const password = "fakepassword";

      await request(app)
        .post("/user/login")
        .send({ ...user, password })
        .expect(statuses.unauthorized)
        .then(({ body }) => {
          expect(body.message).toBe(unauthorizedMessage);
        });
    });
  });
});
