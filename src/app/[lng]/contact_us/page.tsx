import "./page.css";
import { useTranslation } from "@/src/i18n";

type ContactUsProps = { params: { lng: string; }; }

export default async function ContactUs({ params: { lng } }: ContactUsProps) {
    const { t } = await useTranslation(lng, "contact-us-page");
    return (
        <div className="container">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>
            <h1>{t("contact-us")}</h1>
            <div className="blankBanner" />
            <div className="fastContact">
                <div className="contactSales">
                    {/* <h2>業務聯絡</h2> */}
                    <h2>{t("business-contact")}</h2>
                    <div className="businessCard">
                        {/* <div className="region">業務聯絡方式</div>
                        <div className="company">洲通能源科技有限公司</div>
                        <div className="name">姓名：林建成/Jason Lin</div>
                        <div className="phone">電話：(02)2228-7016<br />&emsp;&emsp;&emsp;0926-9096-16</div>
                        <div className="email">E-Mail：sales@ubqts.com.tw</div> */}
                        <div className="region">{t("business-contact-region")}</div>
                        <div className="company">{t("company-name-1")}</div>
                        <div className="name">{t("agent-name-1")}</div>
                        <div className="phone">{t("agent-phone-1")}<br />&emsp;&emsp;&emsp;{t("agent-cellphone-1")}</div>
                        <div className="email">{t("agent-email-1")}</div>
                    </div>
                    <a className="contactBtn" href="https://mail.google.com/mail/?view=cm&fs=1&to=sale@ubqts.com.tw" target="_blank">發送Email</a>
                </div>
                <div className="contactService">
                    {/* <h2>售後聯絡</h2> */}
                    <h2>{t("after-sales-contact")}</h2>
                    <div className="businessCard">
                        {/* <div className="region">售後聯絡方式</div>
                        <div className="company">洲通能源科技有限公司</div>
                        <div className="name">姓名：林建成/Jason Lin</div>
                        <div className="phone">電話：(02)2228-7016<br />&emsp;&emsp;&emsp;0926-9096-16</div>
                        <div className="email">E-Mail：sales@ubqts.com.tw</div> */}
                        <div className="region">{t("after-sales-contact-region")}</div>
                        <div className="company">{t("company-name-1")}</div>
                        <div className="name">{t("agent-name-1")}</div>
                        <div className="phone">{t("agent-phone-1")}<br />&emsp;&emsp;&emsp;{t("agent-cellphone-1")}</div>
                        <div className="email">{t("agent-email-1")}</div>
                    </div>
                    <a className="contactBtn" href="https://mail.google.com/mail/?view=cm&fs=1&to=sale@ubqts.com.tw" target="_blank">發送Email</a>
                </div>
            </div>
            <div className="blankBanner" />
            <div className="contactOthers">
                {/* <h2>其他地區合作廠商聯絡方式</h2> */}
                <h2>{t("other-contact")}</h2>
                <div className="businessCardTable">
                    <div className="businessCard">
                        {/* <div className="region">台灣總公司聯絡方式（北、中區）</div>
                        <div className="company">洲通能源科技有限公司</div>
                        <div className="name">姓名：林建成/Jason Lin</div>
                        <div className="phone">電話：(02)2228-7016<br />&emsp;&emsp;&emsp;0926-9096-16</div>
                        <div className="email">E-Mail：sales@ubqts.com.tw</div> */}
                        <div className="region">{t("other-contact-region-1")}</div>
                        <div className="company">{t("company-name-1")}</div>
                        <div className="name">{t("agent-name-1")}</div>
                        <div className="phone">{t("agent-phone-1")}<br />&emsp;&emsp;&emsp;{t("agent-cellphone-1")}</div>
                        <div className="email">{t("agent-email-1")}</div>
                    </div>
                    <div className="businessCard">
                        {/* <div className="region">台灣聯絡方式（南區）</div>
                        <div className="company">洲通能源科技有限公司</div>
                        <div className="name">姓名：蘇泓斌 </div>
                        <div className="phone">電話：0911-673-529</div>
                        <div className="email">E-Mail：puppy0529@gmail.com</div> */}
                        <div className="region">{t("other-contact-region-2")}</div>
                        <div className="company">{t("company-name-1")}</div>
                        <div className="name">{t("agent-name-2")} </div>
                        <div className="phone">{t("agent-cellphone-2")}</div>
                        <div className="email">{t("agent-email-2")}</div>
                    </div>
                    <div className="businessCard">
                        {/* <div className="region">泰國聯絡方式</div>
                        <div className="company">偉勝電子科技（泰國）有限公司</div>
                        <div className="name">姓名：郭志豪</div>
                        <div className="phone">電話：095-5535205</div>
                        <div className="email">E-Mail：allenkuo1980@jsscwww.com</div> */}
                        <div className="region">{t("other-contact-region-3")}</div>
                        <div className="company">{t("company-name-3")}</div>
                        <div className="name">{t("agent-name-3")}</div>
                        <div className="phone">{t("agent-phone-3")}</div>
                        <div className="email">{t("agent-email-3")}</div>
                    </div>
                    <div className="businessCard">
                        {/* <div className="region">大陸聯絡方式（華東區） </div>
                        <div className="company">蘇州康皓興電子科技有限公司</div>
                        <div className="name">姓名：孔雪刚</div>
                        <div className="phone">電話：15862569236</div>
                        <div className="email">E-Mail：793588865@qq.com</div> */}
                        <div className="region">{t("other-contact-region-4")} </div>
                        <div className="company">{t("company-name-4")}</div>
                        <div className="name">{t("agent-name-4")}</div>
                        <div className="phone">{t("agent-phone-4")}</div>
                        <div className="email">{t("agent-email-4")}</div>
                    </div>
                    {/* <div className="businessCard">
                        <div className="region">大陸聯絡方式（華東區）</div>
                        <div className="company">蘇州康皓興電子科技有限公司</div>
                        <div className="name">姓名：孔雪刚</div>
                        <div className="phone">電話：</div>
                        <div className="email">E-Mail：sales@ubqts.com.tw</div>
                    </div> */}
                    <div className="businessCard">
                        {/* <div className="region">大陸聯絡方式（華南區）</div>
                        <div className="company">廣州雙城電子有限公司</div>
                        <div className="name">姓名：汤文欣</div>
                        <div className="phone">電話：15800268922</div>
                        <div className="email">E-Mail：tongzai1023@163.com</div> */}
                        <div className="region">{t("other-contact-region-5")}</div>
                        <div className="company">{t("company-name-5")}</div>
                        <div className="name">{t("agent-name-5")}</div>
                        <div className="phone">{t("agent-phone-5")}</div>
                        <div className="email">{t("agent-email-5")}</div>
                    </div>
                </div>
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}