import prisma from '@/src/lib/prisma';

export async function GET(req, { params }: { params: { id: string } }) {
    const id = params.id;
    console.log("id: ", id);
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
        return new Response(error, { status: 500 });
        }
}