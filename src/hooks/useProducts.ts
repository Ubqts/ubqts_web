'use client';
import { useRouter } from "next/navigation";

export default function useProducts() {
    const router = useRouter();

    //POST
    const postProducts = async ({
        name, 
        picture,
        description,
        language,
    }: {
        name: string;
        picture: File;
        description: string;
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
            console.log("imageUrl: ", imageUrl);

            // upload the image url and data to the database
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name, 
                    picture: imageUrl.url,
                    description: description,
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
        picture: File;
        description: string;
    }) => {
        // get the image url from the database
        const resGet = await fetch("/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!resGet.ok) {
            const body = await resGet.json();
            throw new Error(body.error);
        }
        const productsList = await resGet.json();
        const products = productsList.products;
        const target = products.find((product: any) => product.id === id);
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

        // upload the new image to cloud
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
        console.log("imageUrl: ", imageUrl);

        // update the object in the database
        const res = await fetch('/api/products', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                name: name, 
                picture: imageUrl.url,
                description: description,
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
        // get the image url from the database
        const resGet = await fetch("/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!resGet.ok) {
            const body = await resGet.json();
            throw new Error(body.error);
        }
        const productsList = await resGet.json();
        const products = productsList.products;
        const target = products.find((product: any) => product.id === id);
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