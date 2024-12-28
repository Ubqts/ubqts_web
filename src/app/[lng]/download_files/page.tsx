import "./page.css";
import banner from "@/public/img/banner.png";
import DownloadItemSmall from "@/src/components/download_item_small";
import DownloadItemLarge from "@/src/components/download_item_large";

import { useTranslation } from "@/src/i18n";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

type DownloadFilesProps = { params: { lng: string; }; }

export default async function DownloadFiles({ params: { lng } }: DownloadFilesProps) {
    const { t } = await useTranslation(lng, "download-files-page");
    const session = await getServerSession(authOptions);

    return (
        <div className="container prevent-select">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <h1>{t("downloadFiles")}</h1>
            <div className="largeSize">
                <table>
                    <thead className="category">
                        <tr><th colSpan={4}>{t("catalog")}</th></tr>
                    </thead>
                    <thead className="title">
                        <tr>
                            <th className="name">{t("name")}</th>
                            <th className="type">{t("catagory")}</th>
                            <th className="size">{t("size")}</th>
                            <th className="download">{t("download")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DownloadItemLarge />
                        <DownloadItemLarge />
                        <DownloadItemLarge />
                        <DownloadItemLarge />
                        <DownloadItemLarge />
                        <tr>
                            <td colSpan={4} className="more">
                                <button>
                                    add
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="blankBanner" />
                <div className="blankBanner" />
                {/* {session && */}
                    <table>
                        <thead className="category">
                            <tr><th colSpan={4}>{t("software")}</th></tr>
                        </thead>
                        <thead className="title">
                            <tr>
                                <th className="name">{t("name")}</th>
                                <th className="type">{t("catagory")}</th>
                                <th className="size">{t("size")}</th>
                                <th className="download">{t("download")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DownloadItemLarge />
                            <DownloadItemLarge />
                            <DownloadItemLarge />
                        </tbody>
                    </table>
                {/* } */}
            </div>
            <div className="smallSize">
                <div className="category">
                    <h2>{t("catalog")}</h2>
                </div>
                <ul>
                    <DownloadItemSmall />
                    <DownloadItemSmall />
                    <DownloadItemSmall />
                    <DownloadItemSmall />
                    <DownloadItemSmall />
                </ul>
                <div className="blankBanner" />
                {/* {session && */}
                <>
                    <div className="category">
                        <h2>{t("software")}</h2>
                    </div>
                    <ul>
                        <DownloadItemSmall />
                        <DownloadItemSmall />
                        <DownloadItemSmall />
                    </ul>
                </>
                {/* } */}
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}