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
                    <img src="./img/close.png" alt="close" />
                </div>
                <div className="sidebarLink">首頁</div>
                <div className="linkSplit" />
                <div className="sidebarLink">產品解決方案</div>
                <div className="linkSplit" />
                <div className="sidebarLink">合作夥伴</div>
                <div className="linkSplit" />
                <div className="sidebarLink">聯絡我們</div>
                <div className="linkSplit" />
                <div className="sidebarLink">公司最新消息</div>
                <div className="linkSplit" />
                <div className="sidebarLink">下載專區</div>
            </div>
        </div>
    );
};

export default Sidebar;