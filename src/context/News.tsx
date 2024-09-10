'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export type News = {
    id: number;
    picture: string;
    title: string;
    description: string;
    date: Date;
    language: string;
};

export type NewsContext = {
    news: News[];
    setNews?: (news: News[]) => void;
    sendNews?: (news: Omit<News, 'id' | 'date'>) => Promise<void>;
};

export const NewsContext = createContext<NewsContext>({
    news: [],
    setNews: () => {},
    sendNews: async () => {},
});

type Props = {
    children: React.ReactNode;
};
export function NewsProvider({ children }: Props) {
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch('/api/news', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                // console.log(data);
                setNews(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchNews();
    }, []);

    const sendNews = async (news: Omit<News, 'id' | 'date'>) => {
        try {
            const res = await fetch('/api/news', {
                method: 'POST',
                body: JSON.stringify(news),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <NewsContext.Provider value={{ news, setNews, sendNews }}>
            {children}
        </NewsContext.Provider>
    );
}