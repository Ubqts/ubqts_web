'use client';
import { useRouter } from "next/navigation";

export default function useNews() {
    const router = useRouter();

    //POST
    const postNews = async ({
        title, 
        picture, 
        description,
        date,
        language,
    }: {
        title: string;
        picture: string;
        description: string;
        date: Date;
        language: string;
    }) => {
        try {
            // // upload image to cloud and get the url
            // const formData = new FormData();
            // formData.append("file", picture);

            // const imageRes = await fetch("/api/image", {
            //     method: "POST",
            //     body: formData,
            // });
            // if (!imageRes.ok) {
            //     const error = await imageRes.json();
            //     alert("Error uploading image");
            //     throw new Error(error);
            // }
            // const imageUrl = await imageRes.json();
            // console.log("image upuloaded.");

            // upload the image url and data to the database
            const res = await fetch("/api/news", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    picture: picture,
                    title: title,
                    description: description,
                    date: date,
                    language: language,
                }),
            });
            if (!res.ok) {
                const body = await res.json();
                throw new Error(body.error);
            }
            console.log("news posted.");
            router.refresh();
        } catch(error) {
            console.error("error: ", error);
        }
    }

    //GET
    const getNews = async () => {
        const res = await fetch("/api/news", {
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
    const putNews = async ({
        id,
        picture,
        title, 
        description,
        // date,
    }: {
        id: number;
        picture: string;
        title: string;
        description: string;
        // date: Date;
    }) => {
        // // get the image url from the database
        // const resGet = await fetch("/api/news", {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // if (!resGet.ok) {
        //     const body = await resGet.json();
        //     throw new Error(body.error);
        // }
        // const newsList = await resGet.json();
        // const news = newsList.news;
        // const target = news.find((news: any) => news.id === id);
        // const url = target.picture;
        // console.log("get image url.");

        // let imageUrl = { url: url };
        // if (picture !== null) {
        //     // delete image from cloud
        //     const resDelete = await fetch("/api/image", {
        //         method: "DELETE",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             url,
        //         }),
        //     });
        //     if (!resDelete.ok) {
        //         const body = await resDelete.json();
        //         throw new Error(body.error);
        //     }
        //     console.log("old image deleted.");

        //     // upload the new image to cloud
        //     const formData = new FormData();
        //     formData.append("file", picture);

        //     const imageRes = await fetch("/api/image", {
        //         method: "POST",
        //         body: formData,
        //     });
        //     if (!imageRes.ok) {
        //         const error = await imageRes.json();
        //         alert("Error uploading image");
        //         throw new Error(error);
        //     }
        //     imageUrl = await imageRes.json();
        //     console.log("new image uploaded.");
        // } else {
        //     console.log("no new image uploaded.");
        // }

        // update the object in the database
        const res = await fetch('/api/news', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id, 
                title: title,
                picture: picture,
                description: description,
            }),
        });
        const data = await res.json();
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        console.log("news updated.");
        router.refresh();
    }

    //DELETE
    const deleteNews = async (id: number) => {
        // // get the image url from the database
        // const resGet = await fetch("/api/news", {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // if (!resGet.ok) {
        //     const body = await resGet.json();
        //     throw new Error(body.error);
        // }
        // const newsList = await resGet.json();
        // const news = newsList.news;
        // const target = news.find((news: any) => news.id === id);
        // const url = target.picture;
        // console.log("get image url.");

        // // delete image from cloud
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
        // console.log("image deleted.");

        // delete the object from the database
        const res = await fetch('/api/news', {
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
        console.log("news deleted.");
        router.refresh();
    }

    return {
        postNews,
        getNews,
        putNews,
        deleteNews,
    };
}