import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async function () {
  try {
    const connectionInstance = mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error Connecting to MongoDB ", error);
    process.exit(1);
  }
};

export default connectDB;
