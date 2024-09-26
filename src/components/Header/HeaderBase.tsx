'use client';
import "./HeaderBase.css";
import companyLogo from "@/public/img/logo.png";
import languageList from "@/public/img/langIcon.png";
import dropDownIcon from "@/public/img/dropDownIcon.png";
import menuIcon from "@/public/img/menuIcon.png";
import loginIcon from "@/public/img/loginIcon.png";
import logoutIcon from "@/public/img/logoutIcon.png";

import { TFunction } from "i18next";
import { languages } from "../../i18n/settings";
import { signOut, useSession } from "next-auth/react";

type HeaderProps = {
    t: ((key: string) => string) & TFunction<"translation", undefined>;
};

export const HeaderBase = ({ t }: HeaderProps) => {
    const { data: session } = useSession();

    console.log(session);

    const handleSidebarDisplay = () => {
        const sidebar = document.querySelector(".sidebar")!;
        const sidebarMenu = document.querySelector(".sidebarMenu")!;
        sidebar.classList.add("active");
        setTimeout(() => {
            sidebarMenu.classList.add("active");
        }, 1);
    }

    return (
        <div className="header prevent-select">
            <a className="logoHomeLink" href="/#">
                <div className="headerLogo">
                    <img className="logo" src={companyLogo.src} alt="logo" width={103} height={60} />
                    <div className="logoText">
                        <div className="zh">洲通能源科技有限公司</div>
                        <div className="en">UBQTS Power Technology Co.,Ltd</div>
                    </div>
                </div>
            </a>

            <div className="headerMenu">
                {/* <a href="/#">首頁</a> */}
                {/* <a href="product_solutions">產品解決方案</a> */}
                {/* <a href="partners">合作夥伴</a> */}
                {/* <a href="contact_us">聯絡我們</a> */}
                {/* <a href="news">公司最新消息</a> */}
                {/* <a href="download_files">下載專區</a> */}
                <a href="/#">{t("home-page")}</a>
                <a href="partners">{t("partners")}</a>
                <a href="contact_us">{t("contact-us")}</a>
                <a href="news">{t("news")}</a>
                <a href="download_files">{t("downloads")}</a>
            </div>

            <div className="headerRight">
                <div className="languageDropDown">
                    <div className="languageBtn">
                        <img src={languageList.src} alt="lang" />
                        <img src={dropDownIcon.src} alt="dropdown" />
                    </div>
                    <div className="languageList">
                        {languages.map((lang) => (
                            <a key={lang} href={`/${lang}`}>
                                {lang === "zh-tw" ? "繁體中文" : lang === "zh-cn" ? "简体中文" : "English"}
                            </a>
                        ))}
                    </div>
                </div>
                <img className="sidebarIcon" src={menuIcon.src} alt="menu" onClick={handleSidebarDisplay} />
                {
                    session ? (
                        <div className="logout">
                            <img className="logoutIcon" onClick={() => signOut()} src={logoutIcon.src} alt="logout" />
                        </div>
                    ) : (
                        <div className="login">
                            <a href="login">
                                <img className="loginIcon" src={loginIcon.src} alt="login" />
                            </a>
                        </div>
                    )
                }
            </div>

        </div>
    );
}