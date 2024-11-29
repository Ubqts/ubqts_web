import "./page.css";
import { useTranslation } from "@/src/i18n";

import banner from "@/public/img/banner.png";

type PrivacyPageProps  = { params: { lng: string; }; }

export default async function Privacy({ params: { lng } }: PrivacyPageProps) {
    const { t } = await useTranslation(lng, "privacy-page");
    return (
        <div>
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <h1>{t("title")}</h1>
            <div className="content">
                <p>{t("content_1")}</p>
                <div className="par">
                    <p>{t("content_2")}</p>
                    <p>{t("content_3")}</p>
                </div>
                <div className="par">
                    <p>{t("content_4")}</p>
                    <p>{t("content_5")}</p>
                    <p>{t("content_6")}</p>
                    <p>{t("content_7")}</p>
                    <p>{t("content_8")}</p>
                </div>
                <div className="par">
                    <p>{t("content_9")}</p>
                    <p>{t("content_10")}</p>
                    <p>{t("content_11")}</p>
                </div>
                <div className="par">
                    <p>{t("content_12")}</p>
                    <p>{t("content_13")}</p>
                </div>
                <div className="par">
                    <p>{t("content_14")}</p>
                    <p>{t("content_15")}</p>
                    <p>{t("content_16")}</p>
                    <ol>
                        <li>{t("content_17")}</li>
                        <li>{t("content_18")}</li>
                        <li>{t("content_19")}</li>
                        <li>{t("content_20")}</li>
                        <li>{t("content_21")}</li>
                        <li>{t("content_22")}</li>
                        <li>{t("content_23")}</li>
                    </ol>
                </div>
                <div className="par">
                    <p>{t("content_24")}</p>
                    <p>{t("content_25")}</p>
                </div>
                <div className="par">
                    <p>{t("content_26")}</p>
                    <p>{t("content_27")}</p>
                </div>
            </div>
            <div className="blankBanner"></div>
            <div className="blankBanner"></div>
        </div>
    )
}