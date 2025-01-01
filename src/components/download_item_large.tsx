import downloadIcon from "@/public/img/downloadIcon.png";

import useDownloads from "@/src/hooks/useDownloads";

export type DownloadItemProps = {
    id: number;
    fileName: string;
    fileType: string;
    fileSize: number;
    downloadUrl: string;
}

export default function DownloadItemSmall({ id, fileName, fileType, fileSize, downloadUrl }: DownloadItemProps) {
    const { deleteDownloads } = useDownloads();

    const handleDelete = async () => {
        if (id) {
            try {
                await deleteDownloads(id);
                alert("Delete successfully");
            } catch (error) {
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

    return (
        <tr>
            <td className="fileName">{fileName}</td>
            <td>.{fileType}</td>
            <td>{fileSize} MB</td>
            <td>
                <a href="#" onClick={(e) => {e.preventDefault(); handleDownload();}}>
                    <img className="downloadIcon" src={downloadIcon.src} alt="download"/>
                </a>
            </td>
            <td>
                <a href="#" onClick={() => handleDelete()}>
                    <img className="deleteIcon" src="" alt="delete"/>
                </a>
            </td>
        </tr>
    );
}