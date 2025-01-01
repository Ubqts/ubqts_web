'use client';
import { useRouter } from "next/navigation";

export default function useDownloads() {
    const router = useRouter();

    // POST
    const postDownloads = async ({
        name,
        file,  
    }: {
        name: string;
        file: File;
    }) => {
        try {
            // upload image to cloud and get the url
            const formData = new FormData();
            formData.append("file", file);
            console.log("formData: ", formData);

            const fileRes = await fetch("/api/image", {
                method: "POST",
                body: formData,
            });
            if (!fileRes.ok) {
                const error = await fileRes.json();
                alert("Error uploading file");
                throw new Error(error);
            }
            const fileUrl = await fileRes.json();
            const fileType = file.type.split("/")[1];
            const fileSize = file.size / (1024 * 1024);
            // make type from "image/jpeg" to ".jpeg" or "application/pdf" to ".pdf"
            // make size from byte to MB
            console.log("fileUrl: ", fileUrl.url);
            console.log("fileSize: ", fileSize);
            console.log("fileType: ", fileType);

            // upload the image url and data to the database
            const res = await fetch("/api/downloads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name, 
                    type: fileType, 
                    size: fileSize,
                    url: fileUrl.url,
                }),
            });
            if (!res.ok) {
                const body = await res.json();
                throw new Error(body.error);
            }
            router.refresh();
        } catch (error) {
            console.error("error: ", error);
        }
    }

    // GET
    const getDownloads = async () => {
        const res = await fetch("/api/downloads", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
        return await res.json();
    }

    // DELETE
    const deleteDownloads = async (id: number) => {
        // get the image url from the database
        const resGet = await fetch("/api/downloads", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!resGet.ok) {
            const body = await resGet.json();
            throw new Error(body.error);
        }
        const downloadsList = await resGet.json();
        const downloads = downloadsList.products;
        const target = downloads.find((download: any) => download.id === id);
        const url = target.file;

        // delete image from cloud
        const resDelete = await fetch("/api/image", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url,
            }),
        });
        if (!resDelete.ok) {
            const body = await resDelete.json();
            throw new Error(body.error);
        }

        // delete the object from the database
        const res = await fetch('/api/downloads', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
            }),
        });
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
    }

    return {
        postDownloads,
        getDownloads,
        // putProducts,
        deleteDownloads,
    };
}