'use client';
import { NewsContext } from "@/src/context/News";
import useNews from "@/src/hooks/useNews";
import React, { useState, useEffect, useContext } from "react";

import "./page.css";
import NewsItem from "@/src/components/news_item";

type NewsList = {
    id: number;
    title: string;
    picture: string;
    description: string;
    date: Date;
}

export default function News() {
    const { news } = useContext(NewsContext);
    const { getNews } = useNews();
    const [ newsList, setNewsList ] = useState<NewsList[]>([]);
    const [ isAdding, setIsAdding ] = useState<boolean>(false);

    useEffect(() => {
        const fetchNewsList = async () => {
            const newsListInit = await getNews();
            const newsListJSON: NewsList[] = newsListInit["news"];
            setNewsList(newsListJSON);
        }
        fetchNewsList();
    }, []);

    // console.log(newsList);

    return (
        <div className="container prevent-select">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>

            <div className="content">
                <h1>最新消息</h1>
                <div className="newsList">
                    {newsList.map((news) => (
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
                        <img src="./img/addIcon.png" alt="addNews" />
                    </div>
                </div>
            </div>

            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}