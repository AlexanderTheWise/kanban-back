import { MongoMemoryServer } from "mongodb-memory-server";
import {
  connectToDatabase,
  disconnectDatabase,
  dropDatabase,
} from "../../src/database";
import config from "./config";

const globalSetup = async () => {
  if (config.Memory) {
    const instance = await MongoMemoryServer.create();
    const uri = instance.getUri();

    (global as any).__MONGOINSTANCE = instance;
    process.env.MONGO_URI = uri.slice(0, uri.lastIndexOf("/"));
  } else {
    process.env.MONGO_URI = `mongodb://${config.IP}:${config.Port}`;
  }

  await connectToDatabase(`${process.env.MONGO_URI}/${config.Database}`);
  await dropDatabase();
  await disconnectDatabase();
};

export default globalSetup;
