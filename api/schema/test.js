import { model, Schema } from "mongoose";

const Test = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    autoIndex: true,
  }
);

export const TestCollection = model('test', Test);