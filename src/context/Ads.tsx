'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export type Ad = {
    id: number;
    picture: string;
};

export type AdContext = {
    ad?: Ad | null;
    setAd?: (ad: Ad) => void;
    sendAd?: (ad: Omit<Ad, 'id' | 'picture'>) => void;
};

export const AdContext = createContext<AdContext>({
    ad: null,
    setAd: () => {},
    sendAd: async () => {},
});

type Props = {
    children: React.ReactNode;
};
export function AdProvider({ children }: Props) {
    // const router = useRouter();
    const [ad, setAd] = useState<Ad | null>(null);

    useEffect(() => {
        const fetchAd = async () => {
            try {
                const res = await fetch(`/api/ad`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                console.log(data);
                setAd(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAd();
    }, []);

    const sendAd = async (ad: Omit<Ad, 'id' | 'picture'>) => {
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
        <AdContext.Provider value={{ ad, setAd, sendAd }}>
            {children}
        </AdContext.Provider>
    );
}