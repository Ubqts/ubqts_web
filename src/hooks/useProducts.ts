'use client';
import { useRouter } from "next/navigation";

export default function useProducts() {
    const router = useRouter();

    //POST
    const postProducts = async ({
        name, 
        picture,
        description,
    }: {
        name: string;
        picture: string;
        description: string;
    }) => {
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, 
                picture,
                description,
            }),
        });
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
    }

    //GET
    const getProducts = async () => {
        const res = await fetch("/api/products", {
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
    const putProducts = async ({
        id,
        name,
        picture,
        description,
    }: {
        id: number;
        name: string;
        picture: string;
        description: string;
    }) => {
        const res = await fetch('/api/products', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                name, 
                picture,
                description,
            }),
        });
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
    }

    //DELETE
    const deleteProducts = async (id: number) => {
        const res = await fetch('/api/products', {
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
        postProducts,
        getProducts,
        putProducts,
        deleteProducts,
    };
}