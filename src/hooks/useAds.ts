'use client';
import { useRouter } from "next/navigation";
// import { uploadGoogleFile } from "@/src/hooks/google_settings";

export default function useAds() {
    const router = useRouter();

    //POST
    const postAds = async ({
        picture,
        language,
    }: {
        picture: File;
        language: string;
    }) => {
        try {
            // upload image to cloud and get the url
            const formData = new FormData();
            formData.append("file", picture);
            console.log("formData: ", formData);
            console.log("picture: ", picture);

            const imageRes = await fetch("/api/image", {
                method: "POST",
                body: formData,
            });
            if (!imageRes.ok) {
                const error = await imageRes.json();
                alert("Error uploading image");
                throw new Error(error);
            }

            // const imageUrl = await imageRes.json();

            // console.log("imageUrl: ", imageUrl);

            // upload the image url and language to the database
            // const res = await fetch("/api/ads", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         picture: imageUrl, 
            //         language: language,
            //     }),
            // });
            // if (!res.ok) {
            //     const body = await res.json();
            //     throw new Error(body.error);
            // }
            // 
            // router.refresh();
        
        } catch (error) {
            console.error("error: ", error);
        }
    }

    //GET
    const getAds = async () => {
        const res = await fetch("/api/ads", {
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

    //PUT
    const putAds = async ({
        id,
        picture,
    }: {
        id: number;
        picture: string;
    }) => {
        const res = await fetch('/api/ads', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                picture,
            }),
        });
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
    }

    //DELETE
    const deleteAds = async (id: number) => {
        const res = await fetch('/api/ads', {
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
        postAds,
        getAds,
        putAds,
        deleteAds,
    };
}