import "./page.css";
import banner from "@/public/img/banner.png";
import DownloadItem from "@/src/components/download_item";
import downloadIcon from "@/public/img/downloadIcon.png";

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
            {/* <h1>下載專區</h1> */}
            <h1>{t("downloadFiles")}</h1>
            <div className="largeSize">
                <table>
                    <thead className="category">
                        {/* <tr><th colSpan={4}>產品型錄</th></tr> */}
                        <tr><th colSpan={4}>{t("catalog")}</th></tr>
                    </thead>
                    <thead className="title">
                        <tr>
                            {/* <th className="name">項目名稱</th>
                            <th className="type">檔案類型</th>
                            <th className="size">檔案大小</th>
                            <th className="download">檔案下載</th> */}
                            <th className="name">{t("name")}</th>
                            <th className="type">{t("catagory")}</th>
                            <th className="size">{t("size")}</th>
                            <th className="download">{t("download")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fileName">
                                <span>項目名稱</span>
                                <div>lorem ipsum</div>
                            </td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
                        </tr>
                    </tbody>
                </table>
                <div className="blankBanner" />
                <div className="blankBanner" />
                {session &&
                    <table>
                        <thead className="category">
                            {/* <tr><th colSpan={4}>軟體下載</th></tr> */}
                            <tr><th colSpan={4}>{t("software")}</th></tr>
                        </thead>
                        <thead className="title">
                            <tr>
                                {/* <th className="name">項目名稱</th>
                    <th className="type">檔案類型</th>
                    <th className="size">檔案大小</th>
                    <th className="download">檔案下載</th> */}
                                <th className="name">{t("name")}</th>
                                <th className="type">{t("catagory")}</th>
                                <th className="size">{t("size")}</th>
                                <th className="download">{t("download")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fileName">lorem ipsum</td>
                                <td>.pdf</td>
                                <td>1.5MB</td>
                                <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
                            </tr>
                            <tr>
                                <td className="fileName">lorem ipsum</td>
                                <td>.pdf</td>
                                <td>1.5MB</td>
                                <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
                            </tr>
                            <tr>
                                <td className="fileName">lorem ipsum</td>
                                <td>.pdf</td>
                                <td>1.5MB</td>
                                <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
            <div className="smallSize">
                <div className="category">
                    {/* <h2>產品型錄</h2> */}
                    <h2>{t("catalog")}</h2>
                </div>
                <ul>
                    <DownloadItem />
                    <DownloadItem />
                    <DownloadItem />
                    <DownloadItem />
                    <DownloadItem />
                </ul>
                <div className="blankBanner" />
                <div className="category">
                    <h2>{t("software")}</h2>
                </div>
                <ul>
                    <DownloadItem />
                    <DownloadItem />
                    <DownloadItem />
                </ul>
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}