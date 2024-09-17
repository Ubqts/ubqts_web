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
                <p>地址: 新北市中和區建一路179號9F</p>
                <p>電話: 02-2228-7016</p>
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