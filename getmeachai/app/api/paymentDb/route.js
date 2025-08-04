"use server"
import { NextResponse } from "next/server";
import connectDB from "../../db/connectDB";
import Payment from "@/app/models/Payment";
import User from "@/app/models/User";

 export async function GET(req){
    const {searchParams} = new URL(req.url)
    const username = searchParams.get("username")
    await connectDB();
    try{
        let data = await Payment.find({to_user: username})
        return NextResponse.json(data);  
    } catch (error) {
        console.error("Error fetching payment:", error);
        return NextResponse.json({message:"Payment Fetched Failed"}, {status: 500});
    }
 }
 export async function PUT(req){
    const {searchParams} = new URL(req.url)
    const username = searchParams.get("username")
    await connectDB();
    try{
        const body = await req.json();
       await User.findOneAndUpdate({username: username}, body, {
            new: true,
        });
        return NextResponse.json({message:"User Found"}, {status: 200});  
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({message:"User Fetch Failed"}, {status: 500});
    }
 }  