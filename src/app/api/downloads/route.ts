import prisma from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// POST
export async function POST(req: NextRequest)  {
    const data = await req.json();
    const { name, type, size, url } = data;

    try {
        const downloads = await prisma.downloads.create({
            data: {
                name,
                type,
                size,
                url,
            },
        });
        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json(
            { error: "Something went wrong." }, 
            { status: 500 }
        );
    }
}

// GET
export async function GET() {
    try {
        const downloads = await prisma.downloads.findMany();
        // console.log("downloads: ", downloads);
        return NextResponse.json({ downloads }, { status: 200 });
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json(
            { error: "Something went wrong." }, 
            { status: 500 }
        );
    }
}

// DELETE
export async function DELETE(req: NextRequest) {
    const data = await req.json();
    const id = data.id;

    try {
        const downloads = await prisma.downloads.delete({
            where: {
                id,
            },
        });
        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json(
            { error: "Something went wrong." }, 
            { status: 500 }
        );
    }
}