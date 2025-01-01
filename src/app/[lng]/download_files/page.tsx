"use client";
import "./page.css";
import banner from "@/public/img/banner.png";
import DownloadItemSmall from "@/src/components/download_item_small";
import DownloadItemLarge from "@/src/components/download_item_large";
import NewDownloadDialog from "@/src/components/NewDownloadDialog";
import { DownloadContext, type Download } from "@/src/context/Downloads";
import useDownloads from "@/src/hooks/useDownloads";

import { useTranslation } from "@/src/i18n/client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

type DownloadFilesProps = { params: { lng: string; }; }

export default function DownloadFiles({ params: { lng } }: DownloadFilesProps) {
    const [ addDialog, setAddDialog ] = useState<boolean>(false);
    const [ downloadsList, setDownloadsList ] = useState<Download[]>([]);
    const { getDownloads } = useDownloads();

    const { t } = useTranslation(lng, "download-files-page");
    const { data: session } = useSession();

    useEffect (() => {
        const fetchDownloadsList = async () => {
            const downloadsListInit = await getDownloads();
            const downloadsListJSON: Download[] = downloadsListInit["downloads"];
            setDownloadsList(downloadsListJSON);
        };
        fetchDownloadsList();
    }, [getDownloads]);

    return (
        <div className="container prevent-select">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <h1>{t("downloadFiles")}</h1>
            <div className="largeSize">
                <table>
                    <thead className="category">
                        <tr><th colSpan={session?.user.role === "admin" ? 5 : 5}>{t("catalog")}</th></tr>
                    </thead>
                    <thead className="title">
                        <tr>
                            <th className="name">{t("name")}</th>
                            <th className="type">{t("catagory")}</th>
                            <th className="size">{t("size")}</th>
                            <th className="download">{t("download")}</th>
                            {/* session?.user.role === "admin" && */ <th className="edit">刪除</th>}
                        </tr>
                    </thead>
                    <tbody>
                        <DownloadItemLarge id={1} fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="https://storage.googleapis.com/ubqts-web-image-storage/WMN%E6%9C%9F%E6%9C%AB%E5%A4%A7%E6%8A%84.pdf"/>
                        <DownloadItemLarge id={1} fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                        <DownloadItemLarge id={1} fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                        <DownloadItemLarge id={1} fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                        {downloadsList.filter((download) => (download.type === "pdf")).map((download) => (
                            <DownloadItemLarge 
                                key={download.id}
                                id={download.id}
                                fileName={download.name}
                                fileType={download.type}
                                fileSize={download.size}
                                downloadUrl={download.url}
                            />
                        ))}
                        {/* {session?.user.role === "admin" &&  */}
                            <tr>
                                <td colSpan={5} className="more" onClick={() => setAddDialog(true)}>
                                    add
                                </td>
                            </tr>
                        {/* } */}
                    </tbody>
                </table>
                <div className="blankBanner" />
                <div className="blankBanner" />
                {/* {session?.user.role === "user" && */}
                    <table>
                        <thead className="category">
                            <tr><th colSpan={session?.user.role === "admin" ? 5 : 5}>{t("software")}</th></tr>
                        </thead>
                        <thead className="title">
                            <tr>
                                <th className="name">{t("name")}</th>
                                <th className="type">{t("catagory")}</th>
                                <th className="size">{t("size")}</th>
                                <th className="download">{t("download")}</th>
                                {/* session?.user.role === "admin" && */ <th className="edit">刪除</th>}
                            </tr>
                        </thead>
                        <tbody>
                            <DownloadItemLarge id={1} fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="https://storage.cloud.google.com/ubqts-web-image-storage/strawberry-perl-5.40.0.1-64bit.msi"/>
                            <DownloadItemLarge id={1} fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                            <DownloadItemLarge id={1} fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                            {downloadsList.filter((download) => (download.type !== "pdf")).map((download) => (
                                <DownloadItemLarge 
                                    key={download.id}
                                    id={download.id}
                                    fileName={download.name}
                                    fileType={download.type}
                                    fileSize={download.size}
                                    downloadUrl={download.url}
                                />
                            ))}
                            {/* {session?.user.role === "admin" &&  */}
                                <tr>
                                    <td colSpan={5} className="more" onClick={() => setAddDialog(true)}>
                                        add
                                    </td>
                                </tr>
                            {/* } */}
                        </tbody>
                    </table>
                {/* } */}
            </div>
            <div className="smallSize">
                <div className="category">
                    <h2>{t("catalog")}</h2>
                </div>
                <ul>
                    <DownloadItemSmall fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                    <DownloadItemSmall fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                    <DownloadItemSmall fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                    <DownloadItemSmall fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                    <DownloadItemSmall fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                    {downloadsList.filter((download) => (download.type === "pdf")).map((download) => (
                        <DownloadItemSmall
                            key={download.id}
                            fileName={download.name}
                            fileType={download.type}
                            fileSize={download.size}
                            downloadUrl={download.url}
                        />
                    ))}
                </ul>
                <div className="blankBanner" />
                {/* {session?.user.role === "user" && */}
                <>
                    <div className="category">
                        <h2>{t("software")}</h2>
                    </div>
                    <ul>
                        <DownloadItemSmall fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                        <DownloadItemSmall fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                        <DownloadItemSmall fileName="lorem ipsum" fileType="pdf" fileSize={1.5} downloadUrl="about:blank"/>
                        {downloadsList.filter((download) => (download.type !== "pdf")).map((download) => (
                            <DownloadItemSmall
                                key={download.id}
                                fileName={download.name}
                                fileType={download.type}
                                fileSize={download.size}
                                downloadUrl={download.url}
                            />
                        ))}
                    </ul>
                </>
                {/* } */}
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />

            <NewDownloadDialog open={addDialog} onClose={() => setAddDialog(false)} />
        </div>
    );
}