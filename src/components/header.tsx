'use client';
import "./header.css";

export default function Header() {

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
                    <img className="logo" src="/img/logo.png" alt="logo" width={103} height={60}/>
                    <div className="logoText">
                        <div className="zh">洲通能源科技有限公司</div>
                        <div className="en">UBQTS Power Technology Co.,Ltd</div>
                    </div>
                </div>
            </a>

            <div className="headerMenu">
                <a href="/#">首頁</a>
                {/* <a href="product_solutions">產品解決方案</a> */}
                <a href="partners">合作夥伴</a>
                <a href="contact_us">聯絡我們</a>
                <a href="news">公司最新消息</a>
                <a href="download_files">下載專區</a>
            </div>

            <div className="headerRight">
                <div className="languageDropDown">
                    <div className="languageBtn">
                        <img src="img/langIcon.png" alt="lang" />
                        <img src="img/dropDownIcon.png" alt="dropdown" />
                    </div>
                    <div className="languageList">
                        <a href="/zh-tw">繁體中文</a>
                        <a href="/zh-cn">简体中文</a>
                        <a href="/en">English</a>
                    </div>
                </div>
                <img className="sidebarIcon" src="./img/menuIcon.png" alt="menu" onClick={handleSidebarDisplay} />
            </div>
        </div>
    );
}