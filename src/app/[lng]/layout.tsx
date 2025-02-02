import type { Metadata } from "next";
import { ReactElement } from "react";
import { dir } from "i18next";
import { languages } from "@/src/i18n/settings";
import { Inter } from "next/font/google";
import "./globals.css";

import favicon from "@/public/img/favicon.ico";
import Providers from "@/src/app/[lng]/Providers";
import { Header } from "@/src/components/Header/client";
import { Sidebar } from "@/src/components/Sidebar/client";
import { Footer } from "../../components/Footer/client";
import PrivacyNotification from "@/src/components/privacy_notification";
import SignUpIcon from "@/src/components/sign_up_icon";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = { children: ReactElement; params: { lng: string } };
export async function generateStaticParams() {
    return languages.map((lng) => ({ params: { lng } }));
}

export const metadata: Metadata = {
    title: "洲通能源科技有限公司",
    description: "洲通能源科技成立於2017年，承測試設備業界知名廠商──佳優科技團隊邀約於2024年正式合併，提供各類型符合成本效益且具高效率、高精確度之自動化測試設備與自動化監控系統。",
    icons: {
        icon: favicon.src,
    },
};

export default function RootLayout({
    children,
    params: { lng },
}: RootLayoutProps) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <body className={inter.className}>
                <Provider>
                    <Providers>
                        <Header lng={lng} />
                        <Sidebar lng={lng} />
                        <div style={{ height: "80px" }} />
                        <div className="mainContent">{children}</div>
                        <Footer lng={lng} />
                        <PrivacyNotification />
                        <SignUpIcon />
                    </Providers>
                </Provider>
            </body>
        </html>
    );
}