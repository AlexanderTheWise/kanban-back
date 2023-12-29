import connectToDatabase from "./database";
import startServer from "./app";
import config from "./config";

await connectToDatabase(config.mongoUri);

startServer(+config.port);
