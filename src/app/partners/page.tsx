import "./page.css";

import Image from "next/image";

export default function Partners() {
    return (
        <div className="container prevent-select">
            <div className="banner">
                <Image src="https://picsum.photos/1700/450" alt="banner" />
            </div>
            <h1>合作夥伴</h1>
            <div className="partnerType">
                <h2>國際品牌大廠</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><Image src="./Image/partner_logos/sefLogo.png" alt="SEF" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/cmcLogo.png" alt="CMC" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/nemkoLogo.png" alt="Nemko" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/googleLogo.png" alt="Google" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/gogoroLogo.png" alt="gogoro" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/garminLogo.png" alt="garmin" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/btlLogo.png" alt="BTL" /></div>
                </div>
            </div>
            <div className="partnerType">
                <h2>研究及認證機構</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><Image src="./Image/partner_logos/tuvLogo.png" alt="TUV" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/tdLogo.png" alt="TD" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/sgsLogo.png" alt="SGS" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/kyyLogo.png" alt="KYY" /></div>
                </div>
            </div>
            <div className="partnerType">
                <h2>高等學術單位</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><Image src="./Image/partner_logos/nthuLogo.png" alt="NTHU" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/nckuLogo.png" alt="NCKU" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/fjcuLogo.png" alt="FJCU" /></div>
                </div>
            </div>
            <div className="partnerType">
                <h2>系統及組裝廠</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><Image src="./Image/partner_logos/deltaLogo.png" alt="DELTA" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/compalLogo.png" alt="COMPAL" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/qisdaLogo.png" alt="Qisda" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/liteonLogo.png" alt="LITEON" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/gigabyteLogo.png" alt="GIGABYTE" /></div>
                </div>
            </div>
            <div className="partnerType">
                <h2>電池材料及模組廠</h2>
                <div className="line" />
                <div className="partner">
                    <div className="partnerCard"><Image src="./Image/partner_logos/eternalLogo.png" alt="Eternal" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/darfonLogo.png" alt="DARFON" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/hwtLogo.png" alt="HWT" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/techwayLogo.png" alt="techway" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/wteLogo.png" alt="WTE" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/nanyaLogo.png" alt="NANYA" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/glwLogo.png" alt="GLW" /></div>
                    <div className="partnerCard"><Image src="./Image/partner_logos/merryLogo.png" alt="MERRY" /></div>
                </div>
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}