'use client';
import { useRouter } from "next/navigation";

export default function useDownloads() {
    const router = useRouter();

    // POST
    const postDownloads = async ({
        name,
        file_url,
        file_type, 
        file_size,
    }: {
        name: string;
        file_url: string;
        file_type: string;
        file_size: string;
    }) => {
        try {
            // // upload image to cloud and get the url
            // const formData = new FormData();
            // formData.append("file", file);

            // const fileRes = await fetch("/api/image", {
            //     method: "POST",
            //     body: formData,
            // });
            // if (!fileRes.ok) {
            //     const error = await fileRes.json();
            //     alert("Error uploading file");
            //     throw new Error(error);
            // }
            // const fileUrl = await fileRes.json();
            // const fileSize = file.size.toString();
            // let fileType = file.type.split("/")[1];
            // if (file.name.endsWith(".exe")) {
            //     fileType = "exe";
            // }
            // console.log("file upuloaded.");

            // upload the image url and data to the database
            const res = await fetch("/api/downloads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name, 
                    type: file_type, 
                    size: file_size,
                    url: file_url,
                }),
            });
            if (!res.ok) {
                const body = await res.json();
                throw new Error(body.error);
            }
            console.log("downloads posted.");
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
        // // get the file url from the database
        // const resGet = await fetch("/api/downloads", {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // if (!resGet.ok) {
        //     const body = await resGet.json();
        //     throw new Error(body.error);
        // }
        // const downloadsList = await resGet.json();
        // const downloads = downloadsList.downloads;
        // const target = downloads.find((download: any) => download.id === id);
        // const url = target.url;
        // console.log("get file url.");

        // // delete file from cloud
        // const resDelete = await fetch("/api/image", {
        //     method: "DELETE",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         url,
        //     }),
        // });
        // if (!resDelete.ok) {
        //     const body = await resDelete.json();
        //     throw new Error(body.error);
        // }
        // console.log("file deleted.");

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
        console.log("downloads deleted.");
        router.refresh();
    }

    return {
        postDownloads,
        getDownloads,
        deleteDownloads,
    };
}