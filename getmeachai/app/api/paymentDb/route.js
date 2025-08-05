"use server"
import { NextResponse } from "next/server";
import connectDB from "../../db/connectDB";
import Payment from "@/app/models/Payment";


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
