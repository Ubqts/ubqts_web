import { NextResponse, type NextRequest } from 'next/server';
import { Storage } from '@google-cloud/storage';

export async function POST(req: NextRequest) {
    const form = await req.formData();

    try {
        const file = form.get("file") as File;
        if (!file)  throw new Error("No file uploaded.");
        if (file.size < 1)  throw new Error("File is empty.");

        const buffer = await file.arrayBuffer();
        const storage = new Storage();
        await storage.bucket('ubqts-web-image-storage').file(file.name).save(Buffer.from(buffer));
        await storage.bucket('ubqts-web-image-storage').file(file.name).makePublic();

        return NextResponse.json(
            { url: `https://storage.googleapis.com/ubqts-web-image-storage/${file.name}` },
            { status: 200 }
        );
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json(
            { error: "Error uploading image." }, 
            { status: 500 }
        );
    }
}

export async function DELETE(req: NextRequest) {
    const data = await req.json();
    const { url } = data;
    const filename = url.split("/").pop();
    // console.log("filename: ", filename);

    try {
        const storage = new Storage();
        await storage.bucket('ubqts-web-image-storage').file(filename).delete();

        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json(
            { error: "Error deleting image." },
            { status: 500 }
        );
    }
}