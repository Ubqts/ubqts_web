'use client';
import "./layout.css";
import { SidePanel } from "@/src/components/SidePanel/client";
// import PrevPage from "@/src/components/prev_page";

import React, { ReactElement } from "react";

import banner from "@/public/img/banner.png";

type RootLayoutProps = { children: ReactElement; params: { lng: string } };

export default function RootLayout({
    children,
    params: { lng },
}: RootLayoutProps) {

    return (
        <div className="container">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <div className="blankBanner" />
            <div className="wrapper">
                <SidePanel lng={lng} />
                {children}
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    )
}