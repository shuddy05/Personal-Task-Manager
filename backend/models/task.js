import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
      enum: ["Urgent", "Important"],
    },
  },

  { timestamps: true },
);

export default mongoose.model("Task", taskSchema);
