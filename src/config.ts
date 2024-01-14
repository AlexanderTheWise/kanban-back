import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT ?? 3000,
  mongoUri: process.env.MONGO_URI ?? "",
  salt: +(process.env.SALT ?? 10),
  secret: process.env.JWT_SECRET ?? "",
};

export default config;
