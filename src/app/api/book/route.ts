import dbconfig from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

dbconfig();


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        console.log(reqBody)
        return NextResponse.json(reqBody);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}