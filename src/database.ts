import { connect, set, connection, disconnect } from "mongoose";
import logger from "./logger";

const connectToDatabase = async (uri: string) => {
  try {
    await connect(uri);
    set("debug", true);
    set("toJSON", {
      transform(doc, ret) {
        ret.id = doc._id.toString();

        delete ret._id;
        delete ret.__v;
      },
    });
    connection.on("error", (error) => {
      logger.error(error as Error);
    });
  } catch (error) {
    logger.error(error as Error);
  }
};

const disconnectDatabase = async () => {
  await disconnect();
};

const dropDatabase = async () => {
  await connection.db.dropDatabase();
};

const emptyAllCollections = async () => {
  const collections = await connection.db.collections();

  await Promise.all(
    collections.map(async (collection) => collection.deleteMany({})),
  );
};

export {
  connectToDatabase,
  disconnectDatabase,
  dropDatabase,
  emptyAllCollections,
};
