import connectDB from "@/lib/connectDB";
import User from "@/model/userModel";

export async function POST(request) {
    await connectDB();
    const {email , password} = await request.json();
    try {
        const user = await User.findOne({email});
        if (!user) {
            return Response.json({message : "User not found"}, {status : 404});
        }
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return Response.json({message : "Incorrect password"}, {status : 401});
        }
        return Response.json({message : "User logged in successfully"}, {status : 200});
    } catch (error) {
        return Response.json({message : error.message}, {status : 500});
    }
}