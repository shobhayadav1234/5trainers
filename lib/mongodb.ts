import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
      );
    }

    const { connection } = await mongoose.connect(MONGODB_URI);

    if (connection.readyState === 1) {
      console.log("MongoDB connected successfully");
      return true;
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};  