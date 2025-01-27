import "./loading.css";

import Dialog from "@mui/material/Dialog";
import React, { useEffect, useState } from "react";

type LoadingProps = {
    open: boolean;
    // onclose: () => void;
};

export default function Loading({ open }: LoadingProps) {
    const [dots, setDots] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((dots) => (dots + 1) % 4);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Dialog open={open} className="loadingDialog">
            <div className="loadingContent">
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
        </Dialog>
    );
}