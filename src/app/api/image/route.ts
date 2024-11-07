'use server';
import { Storage } from '@google-cloud/storage';

export async function POST(req: Request) {
    const form = await req.formData();

    try {
        const file = form.get("file") as File;
        if (!file) {
            return new Response(JSON.stringify({ error: "Please provide a file." }), { status: 400 });
        } else if (file.size < 1) {
            return new Response(JSON.stringify({ error: "File is empty." }), { status: 400 });
        }

        const buffer = await file.arrayBuffer();
        const storage = new Storage();
        const bucket = storage.bucket('ubqts-web-image-storage');
        await storage.bucket(bucket.name).file(file.name).save(Buffer.from(buffer));

        return new Response(JSON.stringify({ message: "File uploaded successfully.", url: `https://storage.googleapis.com/${bucket.name}/${file.name}` }), { status: 200 });
    } catch (error) {
        console.log("error: ", error);
        return new Response(JSON.stringify({ error: "Something went wrong." }), { status: 500 });
    }
}