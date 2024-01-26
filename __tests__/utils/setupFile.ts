import {
  connectToDatabase,
  disconnectDatabase,
  emptyAllCollections,
} from "../../src/database";
import config from "../../src/config";

beforeAll(async () => {
  await connectToDatabase(config.mongoUri);
});

afterEach(async () => {
  await emptyAllCollections();
});

afterAll(async () => {
  await disconnectDatabase();
});
