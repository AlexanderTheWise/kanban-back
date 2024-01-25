import { type MongoMemoryServer } from "mongodb-memory-server";
import config from "./config";

const globalTeardown = async () => {
  if (config.Memory) {
    const instance = (global as any).__MONGOINSTANCE as MongoMemoryServer;

    await instance.stop();
  }
};

export default globalTeardown;
