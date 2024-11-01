import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";
import bcrypt from "bcryptjs";

import {sendVerificationEmail} from "@/helpers/sendVerificationemail"

export async function POST(request: Request){
    await dbConnect()

    try{
        const {username, email, password}=await request.json()
    }catch(error){
        console.error('ERooe is erooring', error );
        return Response.json(
            {
                success: false,
                message: "Error registring user"
            },
            {
                status: 500
            }
        )
    }
}