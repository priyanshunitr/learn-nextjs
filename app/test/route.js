import { connectDB } from "@/lib/connectDB";

export async function GET() {
  const db = await connectDB();
  const collectionName = "Sample.Collection";
  const data = await db.collection(collectionName).find().toArray();
  
  return Response.json({data});
}

export async function POST(request) {
  const db = await connectDB();
  const collectionName = "Sample.Collection";
  const data = await request.json();
  const result = await db.collection(collectionName).insertOne(data);
  return Response.json({result});
}

export async function PUT(request) {
  const db = await connectDB();
  const collectionName = "Sample.Collection";
  const data = await request.json();
  const result = await db.collection(collectionName).updateOne(data);
  return Response.json({result});
}

export async function DELETE(request) {
  const db = await connectDB();
  const collectionName = "Sample.Collection";
  const data = await request.json();
  const result = await db.collection(collectionName).deleteOne(data);
  return Response.json({result});
}
