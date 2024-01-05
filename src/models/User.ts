import { Schema, model } from "mongoose";
import { type IUser } from "./types";

const userSchema = new Schema<IUser>({
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

const User = model("User", userSchema, "users");

export default User;
