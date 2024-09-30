"use client";
import "./page.css";
import banner from "@/public/img/banner.png";
import { NewsContext, News } from "@/src/context/News";

import { useState, useContext, useEffect } from "react";

export default function NewsPage() {
    const { news } = useContext(NewsContext);
    const [ newsItem, setNewsItem ] = useState<News>();

    useEffect(() => {
        const fetchNews = async () => {
            const url = window.location.href;
            const id = Number(url.split('=').pop());
            try {
                const response = await fetch(`/api/news/${id}`);
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const newsData = await response.json();
                setNewsItem(newsData);
            } catch (error) {
                console.log("error: ", error);
            }
        }
        fetchNews();
    }, []);

    return (
        <div className="container prevent-select">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <div className="blankBanner" />
            <h1>{newsItem?.title}</h1>
            <div className="imgWithText">
                <img src={newsItem?.picture} alt="img" />
                <p>{newsItem?.description}</p>
                <p>{newsItem?.date?.toString()}</p>
            </div>
            <div className="blankBanner" />
            <a className="prevPage" href="/news">回上一頁</a>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}