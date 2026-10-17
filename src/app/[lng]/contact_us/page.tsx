import "./page.css";
import { useTranslation } from "@/src/i18n";

import banner from "@/public/img/banners/contactUsBanner.jpg";
import map from "@/public/img/contactMap.png";

type ContactUsProps = { params: { lng: string; }; }

export default async function ContactUs({ params: { lng } }: ContactUsProps) {
    const { t } = await useTranslation(lng, "contact-us-page");
    return (
        <div className="container">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <h1>{t("contact-us")}</h1>
            <img className="contactMap" src={map.src} alt="map" />
            <div className="blankBanner" />
            <div className="fastContact">
                <div className="contactSales">
                    <h2>{t("business-contact")}</h2>
                    <div className="businessCard">
                        <div className="region">{t("business-contact-region")}</div>
                        <div className="company">{t("company-name-1")}</div>
                        <div className="name">{t("agent-name-1")}</div>
                        <div className="phone">{t("agent-phone-1")}<br />&emsp;&emsp;&emsp;{t("agent-cellphone-1")}</div>
                        <div className="email">{t("agent-email-1")}</div>
                    </div>
                    <a className="contactBtn" href="https://mail.google.com/mail/?view=cm&fs=1&to=sale@ubqts.com.tw" target="_blank">{t("send-email")}</a>
                </div>
                <div className="contactService">
                    <h2>{t("after-sales-contact")}</h2>
                    <div className="businessCard">
                        <div className="region">{t("after-sales-contact-region")}</div>
                        <div className="company">{t("company-name-1")}</div>
                        <div className="name">{t("agent-name-1-2")}</div>
                        <div className="phone">{t("agent-phone-1")}</div>
                        <div className="email">{t("service-email-1")}</div>
                    </div>
                    <a className="contactBtn" href="https://mail.google.com/mail/?view=cm&fs=1&to=service@ubqts.com.tw" target="_blank">{t("send-email")}</a>
                </div>
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}