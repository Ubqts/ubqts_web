import { useTranslation } from "@/src/i18n";
import "./page.css";

import banner from "@/public/img/partnersBanner.png";

import sefLogo from "@/public/img/partner_logos/sefLogo.png";
import cmcLogo from "@/public/img/partner_logos/cmcLogo.png";
import nemkoLogo from "@/public/img/partner_logos/nemkoLogo.png";
import googleLogo from "@/public/img/partner_logos/googleLogo.png";
import gogoroLogo from "@/public/img/partner_logos/gogoroLogo.png";
import garminLogo from "@/public/img/partner_logos/garminLogo.png";
import btlLogo from "@/public/img/partner_logos/btlLogo.png";

import tuvLogo from "@/public/img/partner_logos/tuvLogo.png";
import tdLogo from "@/public/img/partner_logos/tdLogo.png";
import sgsLogo from "@/public/img/partner_logos/sgsLogo.png";
import kyyLogo from "@/public/img/partner_logos/kyyLogo.png";

import nthuLogo from "@/public/img/partner_logos/nthuLogo.png";
import nckuLogo from "@/public/img/partner_logos/nckuLogo.png";
import fjcuLogo from "@/public/img/partner_logos/fjcuLogo.png";

import deltaLogo from "@/public/img/partner_logos/deltaLogo.png";
import compal from "@/public/img/partner_logos/compalLogo.png";
import qisdaLogo from "@/public/img/partner_logos/qisdaLogo.png";
import liteonLogo from "@/public/img/partner_logos/liteonLogo.png";
import gigabyteLogo from "@/public/img/partner_logos/gigabyteLogo.png";

import eternalLogo from "@/public/img/partner_logos/eternalLogo.png";
import darfonLogo from "@/public/img/partner_logos/darfonLogo.png";
import hwtLogo from "@/public/img/partner_logos/hwtLogo.png";
import techwayLogo from "@/public/img/partner_logos/techwayLogo.png";
import wteLogo from "@/public/img/partner_logos/wteLogo.png";
import nanyaLogo from "@/public/img/partner_logos/nanyaLogo.png";
import glwLogo from "@/public/img/partner_logos/glwLogo.png";
import merryLogo from "@/public/img/partner_logos/merryLogo.png";

type PartnersProps = { params: { lng: string; }; }

export default async function Partners({ params: { lng } }: PartnersProps) {
    const { t } = await useTranslation(lng, "partners-page");
    return (
        <div className="container prevent-select">
            <div className="banner partnersBanner">
                <img src={banner.src} alt="banner" />
            </div>
            {/* <h1>合作夥伴</h1> */}
            <h1>{t("partners")}</h1>
            <div className="partnerType">
                {/* <h2>國際品牌大廠</h2> */}
                <h2>{t("manufacturers")}</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><img src={sefLogo.src} alt="SEF" /></div>
                    <div className="partnerCard"><img src={cmcLogo.src} alt="CMC" /></div>
                    <div className="partnerCard"><img src={nemkoLogo.src} alt="Nemko" /></div>
                    <div className="partnerCard"><img src={googleLogo.src} alt="Google" /></div>
                    <div className="partnerCard"><img src={gogoroLogo.src} alt="gogoro" /></div>
                    <div className="partnerCard"><img src={garminLogo.src} alt="garmin" /></div>
                    <div className="partnerCard"><img src={btlLogo.src} alt="BTL" /></div>
                </div>
            </div>
            <div className="partnerType">
                {/* <h2>研究及認證機構</h2> */}
                <h2>{t("institutions")}</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><img src={tuvLogo.src} alt="TUV" /></div>
                    <div className="partnerCard"><img src={tdLogo.src} alt="TD" /></div>
                    <div className="partnerCard"><img src={sgsLogo.src} alt="SGS" /></div>
                    <div className="partnerCard"><img src={kyyLogo.src} alt="KYY" /></div>
                </div>
            </div>
            <div className="partnerType">
                {/* <h2>高等學術單位</h2> */}
                <h2>{t("academic")}</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><img src={nthuLogo.src} alt="NTHU" /></div>
                    <div className="partnerCard"><img src={nckuLogo.src} alt="NCKU" /></div>
                    <div className="partnerCard"><img src={fjcuLogo.src} alt="FJCU" /></div>
                </div>
            </div>
            <div className="partnerType">
                {/* <h2>系統及組裝廠</h2> */}
                <h2>{t("assembly")}</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><img src={deltaLogo.src} alt="DELTA" /></div>
                    <div className="partnerCard"><img src={compal.src} alt="COMPAL" /></div>
                    <div className="partnerCard"><img src={qisdaLogo.src} alt="Qisda" /></div>
                    <div className="partnerCard"><img src={liteonLogo.src} alt="LITEON" /></div>
                    <div className="partnerCard"><img src={gigabyteLogo.src} alt="GIGABYTE" /></div>
                </div>
            </div>
            <div className="partnerType">
                {/* <h2>電池材料及模組廠</h2> */}
                <h2>{t("battery")}</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><img src={eternalLogo.src} alt="Eternal" /></div>
                    <div className="partnerCard"><img src={darfonLogo.src} alt="DARFON" /></div>
                    <div className="partnerCard"><img src={hwtLogo.src} alt="HWT" /></div>
                    <div className="partnerCard"><img src={techwayLogo.src} alt="techway" /></div>
                    <div className="partnerCard"><img src={wteLogo.src} alt="WTE" /></div>
                    <div className="partnerCard"><img src={nanyaLogo.src} alt="NANYA" /></div>
                    <div className="partnerCard"><img src={glwLogo.src} alt="GLW" /></div>
                    <div className="partnerCard"><img src={merryLogo.src} alt="MERRY" /></div>
                </div>
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}