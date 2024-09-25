import prisma from '@/src/lib/prisma';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        const news = await prisma.news.findMany({
            orderBy: {
                date: 'desc',
            },
        });
        return NextResponse.json({ news }, { status: 200 });
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json(
            { error: "Something went wrong." }, 
            { status: 500 }
        );
    }
}