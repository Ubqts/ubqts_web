'use client'
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export type Download = {
    id: number;
    name: string;
    type: string;
    size: string;
    url: string;
};

export type DownloadContext = {
    downloads: Download[];
    setDownloads?: (download: Download[]) => void;
    sendDownload?: (download: Omit<Download, 'id'>) => void;
};

export const DownloadContext = createContext<DownloadContext>({
    downloads: [],
    setDownloads: () => { },
    sendDownload: async () => { },
});

type Props = {
    children: React.ReactNode;
};
export function DownloadProvider({ children }: Props) {
    // const router = useRouter();
    const [downloads, setDownloads] = useState<Download[]>([]);

    // useEffect(() => {
    //     const fetchDownload = async () => {
    //         try {
    //             const res = await fetch('/api/downloads', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             });
    //             const data = await res.json();
    //             // console.log(data);
    //             setDownloads(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchDownload();
    // }, []);

    const sendDownload = async (download: Omit<Download, 'id'>) => {
        try {
            const res = await fetch('/api/downloads', {
                method: 'POST',
                body: JSON.stringify(download),
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
        <DownloadContext.Provider value={{ downloads, setDownloads, sendDownload }}>
            {children}
        </DownloadContext.Provider>
    );
}