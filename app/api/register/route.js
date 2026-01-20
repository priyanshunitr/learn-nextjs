import connectDB from "@/lib/connectDB";
import UserSchema from "@/model/userModel";

export async function POST(request) {
    await connectDB();
    const user = await request.json();
    try {
        await UserSchema.create(user);
        return Response.json({message : "User created successfully"}, {status : 201});
    } catch (error) {
        if (error.code === 11000) {
            return Response.json({message : "User already exists"}, {status : 409});
        }
        return Response.json({message : error.message}, {status : 500});
    }
}