import { Storage } from '@google-cloud/storage';
import prisma from '@/src/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';
// import formidable from 'formidable';
// import fs from 'fs';

// export const config = {
//     api: {
//         bodyParser: false, // 關閉內建body解析，因為我們使用formidable來處理檔案
//     },
// };

// const storage = new Storage({
//     projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
//     keyFilename: process.env.GOOGLE_CLOUD_KEY_FILE,
// });

// const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET);

export async function POST(req: NextRequest)  {
    // const form = new formidable.IncomingForm();

    // return new Promise((resolve, reject) => {
    //     form.parse(req, async (err, fields, files) => {
    //         if (err) {
    //             console.error('Error parsing the file:', err);
    //             return resolve(NextResponse.json(
    //                 { error: 'Failed to parse the file.' },
    //                 { status: 500 }
    //             ));
    //         }

    //         const { language } = fields;
    //         const { picture } = files;

    //         try {
    //             const blob = bucket.file(picture.originalFilename);
    //             const blobStream = blob.createWriteStream();

    //             blobStream.on('error', (error) => {
    //                 console.error('Error uploading to Google Cloud Storage:', error);
    //                 return resolve(NextResponse.json(
    //                     { error: 'Failed to upload image.' },
    //                     { status: 500 }
    //                 ));
    //             });

    //             blobStream.on('finish', async () => {
    //                 const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

    //                 // 將圖片URL與其他資料儲存到資料庫
    //                 const ads = await prisma.ads.create({
    //                     data: {
    //                         picture: publicUrl, // 儲存圖片的URL
    //                         language,
    //                     },
    //                 });

    //                 return resolve(NextResponse.json({ status: 200, ads }));
    //             });

    //             fs.createReadStream(picture.filepath).pipe(blobStream);
    //         } catch (error) {
    //             console.error(error);
    //             return resolve(NextResponse.json(
    //                 { error: 'Something went wrong.' },
    //                 { status: 500 }
    //             ));
    //         }
    //     });
    // });
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