import "./header.css";

export default function Header() {
    return (
        <div className="header prevent-select" style={{ scrollbarGutter: "auto" }}>
            <div className="headerContainer">
                <div className="headerLogo">
                    <img src="https://picsum.photos/120/60?random=1" alt="logo" />
                </div>

                <div className="headerMenu">
                    <a href="/#">首頁</a>
                    <a href="product_solutions">產品解決方案</a>
                    <a href="partners">合作夥伴</a>
                    <a href="contact_us">聯絡我們</a>
                    <a href="news">公司最新消息</a>
                    <a href="download_files">下載專區</a>
                </div>

                <div className="languageSelector">
                    <img src="img/langIcon.png" alt="lang" />
                    <img src="img/dropDownIcon.png" alt="dropdown" />
                </div>
            </div>
        </div>
    );
}