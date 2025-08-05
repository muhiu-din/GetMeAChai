 "use server"
 import { NextResponse } from "next/server";
 import connectDB from "../../db/connectDB";
 import User from "@/app/models/User";
 
 export async function PUT(req){
    const {searchParams} = new URL(req.url)
    const username = searchParams.get("username")
    await connectDB();
    try{
        const body = await req.json();
       await User.findOneAndUpdate({username: username}, body, {
            new: true,
        });
        return NextResponse.json({message:"User Updated"}, {status: 200});  
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({message:"User Failed to Update"}, {status: 500});
    }
 }  
 export async function GET(req){
    const {searchParams} = new URL(req.url)
    const username = searchParams.get("username")
    await connectDB();
    try{
       const user = await User.findOne({username: username});
       if (!user) {
           return NextResponse.json({message:"User Not Found"}, {status: 404});
       }
       else{
        return NextResponse.json(user, {status: 200});
       }
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({message:"User Fetch Failed"}, {status: 500});
    }
 }  