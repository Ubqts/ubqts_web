import prisma from '../../../lib/prisma';
import { useRouter } from 'next/navigation';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest)  {
    const data = await req.json();
    const { name, picture, description } = data;

    try {
        const products = await prisma.products.create({
            data: {
                name,
                picture,
                description,
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
        const products = await prisma.products.findMany();
        return NextResponse.json({ products }, { status: 200 });
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
    const { newName, newPicture, newDescription } = data;
    const id = data.id;

    try {
        const news = await prisma.news.update({
            where: {
                id,
            },
            data: {
                name: newName,
                picture: newPicture,
                description: newDescription,
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