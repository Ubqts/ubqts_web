'use client';
import { NewsContext, type News } from "@/src/context/News";
import { useTranslation } from "@/src/i18n/client";
import useNews from "@/src/hooks/useNews";

import React, { useState, useEffect, useContext } from "react";
import { useSession } from "next-auth/react";

import NewsItem from "@/src/components/news_item";
import banner from "@/public/img/banners/newsBanner.jpg";
import addIcon from "@/public/img/addIcon.png";
import imagePlaceholder from "@/public/img/imagePlaceholder.png";
import "./page.css";

type NewsProps = { params: { lng: string } };

export default function News({ params: { lng } }: NewsProps) {
    const { t } = useTranslation(lng, "news-page");
    const { data: session } = useSession();
    const { news } = useContext(NewsContext);
    const { getNews } = useNews();
    const [newsList, setNewsList] = useState<News[]>([]);
    const [isAdding, setIsAdding] = useState<boolean>(false);

    useEffect(() => {
        const fetchNewsList = async () => {
            const newsListInit = await getNews();
            const newsListJSON: News[] = newsListInit["news"];
            setNewsList(newsListJSON);
        }
        fetchNewsList();
    }, []);

    // console.log(newsList);

    return (
        <div className="container prevent-select">
            <div className="banner newsBanner">
                <img src={banner.src} alt="banner" />
            </div>

            <div className="content">
                <h1>{t("latest-news")}</h1>
                <div className="newsList">
                    {session?.user.role === "admin" ? (
                        newsList.map((news) => (
                            <React.Fragment key={news.id}>
                                <NewsItem
                                    id={news.id}
                                    title={news.title}
                                    picture={news.picture}
                                    description={news.description}
                                    date={news.date}
                                    language={news.language}
                                    isAdding={false}
                                />
                                <div className="split" />
                            </React.Fragment>
                        ))) : (
                        newsList.filter((news) => (news.language.match(lng))).map((news) => (
                            <React.Fragment key={news.id}>
                                <NewsItem
                                    id={news.id}
                                    title={news.title}
                                    picture={news.picture}
                                    description={news.description}
                                    date={news.date}
                                    isAdding={false}
                                />
                                <div className="split" />
                            </React.Fragment>
                        )))}
                    {isAdding &&
                        <>
                            <NewsItem
                                title="new title"
                                picture={imagePlaceholder.src}
                                description="new description"
                                isAdding={isAdding}
                                setIsAdding={setIsAdding}
                            />
                            <div className="split" />
                        </>
                    }
                    {session?.user.role === "admin" && !isAdding && <div className="addNews" onClick={() => setIsAdding(true)}>
                        <img src={addIcon.src} alt="addNews" />
                    </div>}
                    <div className="split" />
                </div>
            </div>

            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}