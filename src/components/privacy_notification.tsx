'use client';

import { useEffect, useState } from "react";
import "./privacy_notification.css";

export default function PrivacyNotification() {
    const [isClient, setIsClient] = useState(false);
    const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== "undefined") {
            setIsPrivacyAccepted(localStorage.getItem("privacy") === "true");
        }
    }, []);

    const handleAgreePrivacy = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem("privacy", "true");
            setIsPrivacyAccepted(true);
        }
    }

    if (!isClient || isPrivacyAccepted) return null;

    return (
        <div className="privacyModal">
            <div className="modalText">
                We use cookies and collect data to enhance your experience. By continuing to use this website, you agree to our <a href="/privacy" className="privacyLink">Privacy Policy</a>.
            </div>
            <div className="privacyBtn" onClick={() => handleAgreePrivacy()}>OK</div>
        </div>
    )
}