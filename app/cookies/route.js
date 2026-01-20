import { connectDB } from "@/lib/connectDB";
import { cookies } from "next/headers";

export async function GET() {
    await connectDB();
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    return Response.json({message : "Hello", token});
}

cookieStore.set("UserId" , "1234" , {
    httpOnly : true,
    secure : true,
    sameSite : "strict",
    maxAge : 60 * 60 * 24 * 7,
    path : "/"
});

export async function POST(request) {
    await connectDB();
    const cookieStore = await cookies();
    const {token} = await request.json();
    cookieStore.set("token", token);
    return Response.json({message : "Hello", token});
}