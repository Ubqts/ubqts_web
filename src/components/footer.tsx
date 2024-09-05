import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <div className="logo">
                    <img src="https://picsum.photos/200/100?random=1" alt="logo" />
                    <div>Lorem, ipsum.</div>
                </div>

                <div className="split" />

                <div>
                    <h3>聯絡我們</h3>
                    <p>地址: 台北市大安區復興南路一段390號</p>
                    <p>電話: 02-1234-5678</p>
                    <p>傳真: 02-1234-5678</p>
                </div>

                <div>
                    <h3>營業時間</h3>
                    <p>星期一至星期五: 08:00 - 17:00</p>
                    <p>星期六: 08:00 - 12:00</p>
                    <p>星期日: 休息</p>
                </div>

                <div>
                    <h3>關於我們</h3>
                    <p>公司簡介</p>
                    <p>產品介紹</p>
                    <p>聯絡我們</p>
                </div>
            </div>
        </footer>
    );
}