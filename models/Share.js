import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    originalName: String,
    relativePath: String,
    storedPath: String,
    size: Number,
    mimetype: String
  },
  { _id: false }
);

const shareSchema = new mongoose.Schema(
  {
    shareId: {
      type: String,
      required: true,
      unique: true
    },
    files: [fileSchema],
    totalSize: {
      type: Number,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model("Share", shareSchema);