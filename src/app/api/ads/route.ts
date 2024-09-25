import prisma from '@/src/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest)  {
    const data = await req.json();
    const { picture, language } = data;

    try {
        const ads = await prisma.ads.create({
            data: {
                picture,
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
        await prisma.$connect();
        console.log("Connected to the database.");

        const ads = await prisma.ads.findMany();
        return NextResponse.json({ ads }, { status: 200 });
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json(
            { error: "Something went wrong." }, 
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
        console.log("Disconnected from the database.");
    }
}

//PUT
export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { picture } = data;
    const id = data.id;

    try {
        const ads = await prisma.ads.update({
            where: {
                id,
            },
            data: {
                picture: picture,
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
        const ads = await prisma.ads.delete({
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