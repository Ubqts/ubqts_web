import "./page.css";
import NewsItem from "@/src/components/news_item";

export default function News() {
    return (
        <div className="container">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>

            <div className="content">
                <h1>最新消息</h1>
                <div className="blankBanner" />
                <div className="newsList">
                    <NewsItem />
                    <div className="split" />
                    <NewsItem />
                    <div className="split" />
                    <NewsItem />
                    <div className="split" />
                    <NewsItem />
                    <div className="split" />
                    <NewsItem />
                    <div className="split" />
                    <NewsItem />
                </div>
            </div>

            <div className="blankBanner" />

            <div className="index">
            </div>

            <div className="blankBanner" />
        </div>
    );
}