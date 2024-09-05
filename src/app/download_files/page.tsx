import "./page.css";

export default function DownloadFiles() {
    return (
        <div className="container">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>
            <h1>下載專區</h1>
            <div className="catalog">
                <h2>產品型錄</h2>
                <ul>
                    <li><a>lorem ipsum</a></li>
                    <li><a>lorem ipsum</a></li>
                    <li><a>lorem ipsum</a></li>
                </ul>
            </div>
            <div className="software">
                <h2>軟體下載</h2>
                <ul>
                    <li><a>lorem ipsum</a></li>
                    <li><a>lorem ipsum</a></li>
                    <li><a>lorem ipsum</a></li>
                </ul>
            </div>
            <div className="blankBanner" />
        </div>
    );
}