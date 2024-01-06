import { connect, set, connection } from "mongoose";
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

export default connectToDatabase;
