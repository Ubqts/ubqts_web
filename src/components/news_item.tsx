import "./news_item.css";

export default function NewsItem() {
    return (
        <div className="newsItem">
            <img src="https://picsum.photos/300/200?random=1" alt="1" />
            <div className="newsInfo">
                <div className="title">標題</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quas.</p>
            </div>
            <div className="date">2021-01-01</div>
        </div >
    );
}