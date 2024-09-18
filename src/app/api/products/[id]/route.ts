import prisma from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!product) {
            return new Response("Product not found", { status: 404 });
        }
        return new Response(JSON.stringify(product), {
            headers: {
                "content-type": "application/json",
            },
        });
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json(
            { error: "Something Went Wrong." }, 
            { status: 500 }
        );
    }
}