import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    if(!req.url){
        return
    }

    const redirectTo =  new URL('/', req.url)

    return NextResponse.redirect(redirectTo,{
        headers:{
            'Set-Cookie': `token=; Path=/; max-age=0;`,
        }
    })
}