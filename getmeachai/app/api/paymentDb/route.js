"use server"
import { NextResponse } from "next/server";
import connectDB from "../db/connectDB";
import Payment from "@/app/models/Payment";
 export async function POST(req){
    await connectDB();
    const body = await req.json();
    try{
          const newPayment = new Payment(body);
        await newPayment.save();
        return NextResponse.json({message:"Payment created successfully"}, {status:201});  
    } catch (error) {
        console.error("Error creating payment:", error);
        return NextResponse.json({message:"Payment Creation Failed"}, {status: 500});
    }
 }