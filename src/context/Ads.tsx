'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export type Ad = {
    id: number;
    picture: string;
    language: string;
};

export type AdContext = {
    ads: Ad | null;
    setAds: (ad: Ad) => void;
    sendAds: (ad: Omit<Ad, 'id'>) => Promise<void>;
};

export const AdContext = createContext<AdContext>({
    ads: null,
    setAds: () => {},
    sendAds: async () => {},
});

type Props = {
    children: React.ReactNode;
};
export function AdProvider({ children }: Props) {
    const [ads, setAds] = useState<Ad | null>(null);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const res = await fetch('/api/ads', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                console.log(data);
                setAds(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAds();
    }, []);

    const sendAds = async (ad: Omit<Ad, 'id'>) => {
        try {
            const res = await fetch(`/api/ad`, {
                method: 'POST',
                body: JSON.stringify(ad),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AdContext.Provider value={{ ads, setAds, sendAds }}>
            {children}
        </AdContext.Provider>
    );
}