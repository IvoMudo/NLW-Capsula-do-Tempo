import { api } from "@/lib/api";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    if(!req.url){
        return
    }
    const url = new URL(req.url)

    const code = url.searchParams.get("code")

    const registerReponse = await api.post('/register',{
        code,
    })
    
    const {token} = registerReponse.data

    const cookieExpiresInSeconds = 60*60*24*7
    
    const redirectTo =  new URL('/', req.url)

    return NextResponse.redirect(redirectTo,{
        headers:{
            'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`,
        }
    })
}