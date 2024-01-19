import { type HydratedDocument, Schema, model } from "mongoose";
import { type IUser } from "./types";
import { Board } from "./Board";

const userSchema = new Schema<IUser>({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  boards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Board",
    },
  ],
});

userSchema.pre(
  "deleteOne",
  { document: false, query: true },
  async function () {
    const user = (await this.model
      .findOne(this.getQuery)
      .exec()) as HydratedDocument<IUser>;

    if (user.boards.length) {
      await Promise.all(user.boards.map((_id) => Board.deleteOne({ _id })));
    }
  },
);

export const User = model("User", userSchema, "users");
