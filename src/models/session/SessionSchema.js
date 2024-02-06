import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    associate: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const SessionSchema = mongoose.model("Session", userSchema);

// function to run crud
export const createNewSession = (obj) => {
  return SessionSchema(obj).save();
};
export const deleteSession = (filter) => {
  return SessionSchema.findOneAndDelete(filter);
};
export const getSession = (filter) => {
  return SessionSchema.findOne(filter);
};
