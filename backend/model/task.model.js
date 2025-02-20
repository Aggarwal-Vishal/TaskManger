import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }

  //   description: {
  //     type: String,
  //   },
  //   completed: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
);

export const Task = mongoose.model("Task", taskSchema);
