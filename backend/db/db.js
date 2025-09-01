import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const DatabaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("✅ Database is Connected");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        process.exit(1); // stop app if DB connection fails
    }
};

export default DatabaseConnection;
