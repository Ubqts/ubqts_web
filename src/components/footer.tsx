import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footerCompany">
                <p className="zh">洲通能源科技有限公司</p>
                <p className="en">UBQTS Power Technology Co.,LTD</p>
            </div>

            <div className="split-1" />

            <div className="split-2" />

            <div className="contact">
                <p>地址: 台北市大安區復興南路一段390號</p>
                <p>電話: 02-1234-5678</p>
                <p>傳真: 02-1234-5678</p>
            </div>

            <div className="split-3" />

            <div className="hashTags">
                <p>星期一至星期五: 08:00 - 17:00</p>
                <p>星期六: 08:00 - 12:00</p>
                <p>星期日: 休息</p>
            </div>
        </footer>
    );
}