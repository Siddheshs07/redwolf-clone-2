import mongoose from "mongoose";
const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("ALREADY CONNECTED TO DATABASE");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;
    console.log("	CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
    console.log("	FAILED TO CONNECT TO DATABASE", error);
    process.exit(1);
  }
}

export default dbConnect;
