import "./FooterBase.css";
import { TFunction } from "i18next";

type FooterProps = {
    t: ((key: string) => string) & TFunction<"translation", undefined>;
}

export const FooterBase = ({ t }: FooterProps) => {
    return (
        <footer>
            <div className="footerCompany">
                <p className="zh">洲通能源科技有限公司</p>
                <p className="en">UBQTS Power Technology Co.,LTD</p>
            </div>

            <div className="split-1" />

            <div className="split-2" />

            <div className="contact">
                <p>{t("address")}</p>
                <p>{t("phone")}</p>
                {/* <p>地址: 新北市中和區建一路179號9F</p>
                <p>電話: 02-2228-7016</p> */}
            </div>

            <div className="split-3" />

            <div className="hashTags">
                <p>{t("hashtag")}</p>
                {/* <p>
                    #大型電池組 #大型電池組解決方案 #鋰電池 #儲能電池 #AI伺服器電池 #AI伺服器電池解決方案 #充放電設備 #BMS #電池化成 #高精度 #客製化 #高功率 #微電流 #可攜式 #電動自行車解決方案 #半自動化解決方案 #電池材料 #超級電容 #AOI #工業自動化 #智慧能源 #零組件 #電池盒配件 #鋰電池分選設備 #鋰電池點焊設備 #佳優科技 #洲通能源科技
                </p> */}
            </div>
            <div className="counter">
                {t("visiters")}
                <a href="https://www.stylemap.co.jp/"><img src="https://www.f-counter.net/j/64/1727279783/" alt="access counter" /></a>
            </div>
        </footer>
    );
}