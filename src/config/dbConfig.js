import mongoose from "mongoose";

// import { MongoClient } from "mongodb";
// const client = new MongoClient(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

export const connectDb = () => {
  try {
    const con = mongoose.connect(process.env.MONGO_URL);

    con && console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};
