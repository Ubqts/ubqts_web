'use server';
import { Storage } from '@google-cloud/storage';

export const UploadFile = async (form: FormData) => {
    try {
        const file = form.get("file") as File;
        if (!file)  throw new Error("No file uploaded.");
        if (file.size < 1)  throw new Error("File is empty.");

        const buffer = await file.arrayBuffer();
        const storage = new Storage();
        // const bucket = storage.bucket('ubqts-web-image-storage');
        await storage.bucket('ubqts-web-image-storage').file(file.name).save(Buffer.from(buffer));

        return true;
    } catch (error) {
        console.log("error: ", error);
        return false;
    }
}