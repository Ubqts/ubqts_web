"use client";
import downloadIcon from "@/public/img/downloadIcon.png";
import deleteIcon from "@/public/img/deleteIcon.png";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

import useDownloads from "@/src/hooks/useDownloads";
import Loading from "./loading";

export type DownloadItemProps = {
    id: number;
    fileName: string;
    fileType: string;
    fileSize: string;
    downloadUrl: string;
}

export default function DownloadItemSmall({ id, fileName, fileType, fileSize, downloadUrl }: DownloadItemProps) {
    const [ loading, setLoading ] = useState(false);
    const router = useRouter();
    const { data: session } = useSession();
    const { deleteDownloads } = useDownloads();

    const handleDelete = async () => {
        if (id) {
            try {
                setLoading(true);
                await deleteDownloads(id);
                setLoading(false);
                alert("Delete successfully");
                // router.refresh();
            } catch (error) {
                setLoading(false);
                alert("Delete failed");
                console.error("error: ", error);
            }
        }
    }

    const handleDownload = async () => {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = fileName;
        link.click();
    }

    const formatFileSize = (fileSize: string) => {
        const size = parseInt(fileSize);
        if (size < 1024) {
            return `${size} B`;
        } else if (size < 1024 * 1024) {
            return `${(size / 1024).toFixed(size % 1024 === 0 ? 0 : 1)} KB`;
        } else if (size < 1024 * 1024 * 1024) {
            return `${(size / (1024 * 1024)).toFixed(size % (1024 * 1024) === 0 ? 0 : 1)} MB`;
        } else {
            return `${(size / (1024 * 1024 * 1024)).toFixed(size % (1024 * 1024 * 1024) === 0 ? 0 : 1)} GB`;
        }
    }

    return (
        <>
        <tr>
            <td className="fileName">{fileName}</td>
            <td>.{fileType}</td>
            <td>{formatFileSize(fileSize)}</td>
            <td>
                <a href="#" onClick={(e) => { e.preventDefault(); handleDownload(); }}>
                    <img className="downloadIcon" src={downloadIcon.src} alt="download" />
                </a>
            </td>
            {session?.user.role === "admin" &&
                <td>
                    <a href="#" onClick={() => handleDelete()}>
                        <img className="deleteIcon" src={deleteIcon.src} alt="delete" />
                    </a>
                </td>
            }
        </tr>
        <Loading open={loading} />
        </>
    );
}