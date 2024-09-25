import prisma from '@/src/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest)  {
    const data = await req.json();
    const { picture, title, description, language } = data;

    try {
        const time = new Date();
        const news = await prisma.news.create({
            data: {
                picture,
                title,
                description,
                date: time,
                language,
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

//GET
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

//PUT
export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { picture, title, description } = data;
    const id = data.id;

    try {
        const news = await prisma.news.update({
            where: {
                id,
            },
            data: {
                picture: picture,
                title: title,
                description: description,
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

//DELETE
export async function DELETE(req: NextRequest) {
    const data = await req.json();
    const id = data.id;

    try {
        const news = await prisma.news.delete({
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