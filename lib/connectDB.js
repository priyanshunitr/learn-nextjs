import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("Sample");

export async function connectDB() {
  await client.connect();
  console.log("MongoDB connected");
  return db;
}

export { db };