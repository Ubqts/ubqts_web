'use client';
import "./sign_up_icon.css";
import { useSession } from "next-auth/react"

export default function SignUpIcon() {
    const { data: session } = useSession();

    if (session?.user.role === "admin" && !window.location.href.includes("/sign_up")) {
        return (
            <div className="signUpIconContainer">
                <a href="/sign_up" className="signUpIcon" />
                <div className="plusSign1" />
                <div className="plusSign2" />
            </div>
        )
    }

    return null;
}