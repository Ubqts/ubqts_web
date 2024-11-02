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
        const formData = new FormData();
        formData.append("picture", picture, language);
        console.log(formData)

        const res = await fetch("/api/ads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: formData,
        });
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
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