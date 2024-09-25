'use client';
import { NewsContext, type News } from "@/src/context/News";
import useNews from "@/src/hooks/useNews";
import "./page.css";
import NewsItem from "@/src/components/news_item";

import React, { useState, useEffect, useContext } from "react";
import addIcon from "@/public/img/addIcon.png";
import banner from "@/public/img/banner.png";

type NewsProps = { params: { lng: string } };
export default function News({ params: { lng } }: NewsProps) {
    const { news } = useContext(NewsContext);
    const { getNews } = useNews();
    const [ newsList, setNewsList ] = useState<News[]>([]);
    const [ isAdding, setIsAdding ] = useState<boolean>(false);

    useEffect(() => {
        const fetchNewsList = async () => {
            const newsListInit = await getNews();
            const newsListJSON: News[] = newsListInit["news"];
            setNewsList(newsListJSON);
        }
        fetchNewsList();
    }, [getNews]);

    // console.log(newsList);

    return (
        <div className="container prevent-select">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>

            <div className="content">
                <h1>最新消息</h1>
                <div className="newsList">
                    {newsList.filter((news) => (news.language.match(lng))).map((news) => (
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
                    ))}
                    {isAdding &&
                        <>
                            <NewsItem
                                title="new title"
                                picture="https://picsum.photos/300/200?random=1"
                                description="new description"
                                isAdding={isAdding}
                                setIsAdding={setIsAdding}
                            />
                            <div className="split" />
                        </>
                    }
                    <div className="addNews" onClick={() => setIsAdding(true)}>
                        <img src={addIcon.src} alt="addNews" />
                    </div>
                    <div className="split" />
                </div>
            </div>

            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}