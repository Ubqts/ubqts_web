'use client';
import { useRouter } from "next/navigation";

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

            const imageRes = await fetch("/api/image", {
                method: "POST",
                body: formData,
            });
            if (!imageRes.ok) {
                const error = await imageRes.json();
                alert("Error uploading image");
                throw new Error(error);
            }
            const imageUrl = await imageRes.json();

            // upload the image url and language to the database
            const res = await fetch("/api/ads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    picture: imageUrl.url, 
                    language: language,
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
        // get the image url from the database
        const resGet = await fetch("/api/ads", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!resGet.ok) {
            const body = await resGet.json();
            throw new Error(body.error);
        }
        const adsList = await resGet.json();
        const ads = adsList.ads;
        const target = ads.find((ad: any) => ad.id === id);
        const url = target.picture;

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