"use client";
import "./page.css";
import banner from "@/public/img/banner.png";
import addIcon from "@/public/img/addIcon.png";
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
    const [addDialog, setAddDialog] = useState<boolean>(false);
    const [downloadsList, setDownloadsList] = useState<Download[]>([]);
    const { getDownloads } = useDownloads();

    const { t } = useTranslation(lng, "download-files-page");
    const { data: session } = useSession();

    useEffect(() => {
        const fetchDownloadsList = async () => {
            try {
                const downloadsListInit = await getDownloads();
                const downloadsListJSON: Download[] = downloadsListInit["downloads"];
                setDownloadsList(downloadsListJSON);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDownloadsList();
        // console.log(downloadsList);
    }, []);

    if (!session) {
        return (
            <div className="container prevent-select">
                <div className="banner">
                    <img src={banner.src} alt="banner" />
                </div>
                {session && <h1>{t("downloadFiles")}</h1>}
                {!session && <h1>{t("downloadFiles")}<br />{t("loginPrompt")}</h1>}
                <div className="blankBanner" />
                <div className="blankBanner" />
            </div>
        );
    }

    return (
        <div className="container prevent-select">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <h1>{t("downloadFiles")}</h1>
            <div className="largeSize">
                <table>
                    <thead className="category">
                        <tr><th colSpan={session?.user.role === "admin" ? 5 : 4}>{t("catalog")}</th></tr>
                    </thead>
                    <thead className="title">
                        <tr>
                            <th className="name">{t("name")}</th>
                            <th className="type">{t("catagory")}</th>
                            <th className="size">{t("size")}</th>
                            <th className="download">{t("download")}</th>
                            {session?.user.role === "admin" && <th className="edit">刪除</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {downloadsList && downloadsList.filter((download) => (download.type === "pdf")).map((download) => (
                            <DownloadItemLarge
                                key={download.id}
                                id={download.id}
                                fileName={download.name}
                                fileType={download.type}
                                fileSize={download.size}
                                downloadUrl={download.url}
                            />
                        ))}
                        {session?.user.role === "admin" &&
                            <tr>
                                <td colSpan={5} className="more" onClick={() => setAddDialog(true)}>
                                    <img className="addIcon" src={addIcon.src} alt="add" />
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
                <div className="blankBanner" />
                <div className="blankBanner" />
                {(session?.user.role === "user" || session?.user.role === "admin") &&
                    <table>
                        <thead className="category">
                            <tr><th colSpan={session?.user.role === "admin" ? 5 : 4}>{t("software")}</th></tr>
                        </thead>
                        <thead className="title">
                            <tr>
                                <th className="name">{t("name")}</th>
                                <th className="type">{t("catagory")}</th>
                                <th className="size">{t("size")}</th>
                                <th className="download">{t("download")}</th>
                                {session?.user.role === "admin" && <th className="edit">刪除</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {downloadsList && downloadsList.filter((download) => (download.type !== "pdf")).map((download) => (
                                <DownloadItemLarge
                                    key={download.id}
                                    id={download.id}
                                    fileName={download.name}
                                    fileType={download.type}
                                    fileSize={download.size}
                                    downloadUrl={download.url}
                                />
                            ))}
                            {session?.user.role === "admin" &&
                                <tr>
                                    <td colSpan={5} className="more" onClick={() => setAddDialog(true)}>
                                        <img className="addIcon" src={addIcon.src} alt="add" />
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                }
            </div>
            <div className="smallSize">
                <div className="category">
                    <h2>{t("catalog")}</h2>
                </div>
                <ul>
                    {downloadsList && downloadsList.filter((download) => (download.type === "pdf")).map((download) => (
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
                {(session?.user.role === "user" || session?.user.role === "admin") &&
                    <>
                        <div className="category">
                            <h2>{t("software")}</h2>
                        </div>
                        <ul>
                            {downloadsList && downloadsList.filter((download) => (download.type !== "pdf")).map((download) => (
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
                }
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />

            <NewDownloadDialog open={addDialog} onClose={() => setAddDialog(false)} />
        </div>
    );
}