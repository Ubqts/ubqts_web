"use client";

import { useEffect } from "react";
import "./sidebar.css";

const Sidebar = () => {
    useEffect(() => {
        const sidebar = document.querySelector('.sidebar')!;
        const clsBtn = document.querySelector('.clsBtn > img')!;
        const pageBlur = document.querySelector('.pageBlur')!;
        const sidebarMenu = document.querySelector('.sidebarMenu')!;

        const handleSidebarHide = () => {
            sidebarMenu.classList.remove('active');
            setTimeout(() => {
                sidebar.classList.remove('active');
            }, 800);
        }

        clsBtn.addEventListener('click', handleSidebarHide);
        pageBlur.addEventListener('click', handleSidebarHide);
    }, []);

    return (
        <div className="sidebar prevent-select">
            <div className="pageBlur" />
            <div className="sidebarMenu">
                <div className="clsBtn">
                    <img src="./img/closeIcon.png" alt="close" />
                </div>
                <a className="sidebarLink" href="/#">首頁</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="product_solutions">產品解決方案</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="partners">合作夥伴</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="contact_us">聯絡我們</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="news">公司最新消息</a>
                <div className="linkSplit" />
                <a className="sidebarLink" href="download_files">下載專區</a>
            </div>
        </div>
    );
};

export default Sidebar;