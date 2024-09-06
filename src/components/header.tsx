'use client';
import "./header.css";
import useAds from "../hooks/useAds";
import useNews from "../hooks/useNews";
import useProducts from "../hooks/useProducts";
import Link from "next/link";

export default function Header() {
    const adTest = { picture: "ads_picture" };
    const newsTest = {
        title: "news_title",
        picture: "news_picture",
        description: "news_description",
        date: new Date(),
    };
    const productTest = {
        picture: "product_picture",
        name: "product_title",
        description: "product_description",
    };

    const { postAds } = useAds();
    const { postNews } = useNews();
    const { postProducts } = useProducts();

    const AdsApiTest = async () => {
        try {
            console.log(adTest);
            await postAds(adTest);
            alert("廣告api測試成功");
        } catch (error) {
            console.error(error);
            alert("廣告api測試失敗");
        }
    };

    const NewsApiTest = async () => {
        try {
            console.log(newsTest);
            await postNews(newsTest);
            alert("新聞api測試成功");
        } catch (error) {
            console.error(error);
            alert("新聞api測試失敗");
        }
    };

    const ProductsApiTest = async () => {
        try {
            console.log(productTest);
            await postProducts(productTest);
            alert("產品api測試成功");
        } catch (error) {
            console.error(error);
            alert("產品api測試失敗");
        }
    };

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
            <div className="headerLogo">
                <img className="logo" src="/img/logo.png" alt="logo" />
                <div className="logoText">
                    <div className="zh">洲通能源科技有限公司</div>
                    <div className="en">UBQTS Power Technology Co.,Ltd</div>
                </div>
            </div>

            <div className="headerMenu">
                <a href="/#">首頁</a>
                <a href="product_solutions">產品解決方案</a>
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
                <img className="sidebarIcon" src="./img/menu.png" alt="menu" onClick={handleSidebarDisplay} />
            </div>

            <div className="apiTests">
                <button onClick={() => AdsApiTest()}>廣告api測試</button>
                <button onClick={() => NewsApiTest()}>新聞api測試</button>
                <button onClick={() => ProductsApiTest()}>產品api測試</button>
            </div>
        </div>
    );
}