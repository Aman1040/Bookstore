import { timeStamp } from "console";
import mongoose from "mongoose";
import { title } from "process";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);
export const Book = mongoose.model("Cat", bookSchema);
