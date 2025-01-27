import "./loading.css";

import React, { useEffect, useState } from "react";


export default function Loading() {
    const [dots, setDots] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((dots) => (dots + 1) % 4);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p className="loadingText">系統處理中，請稍後{".".repeat(dots)}</p>
            <div className="loadingContainer">
                <div className="loadingItem"></div>
                <div className="loadingItem"></div>
                <div className="loadingItem"></div>
                <div className="loadingItem"></div>
                <div className="loadingItem"></div>
                <div className="loadingItem"></div>
                <div className="loadingItem"></div>
                <div className="loadingItem"></div>
                <div className="loadingItem"></div>
            </div>
        </div>
    );
}