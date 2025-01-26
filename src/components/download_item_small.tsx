import "./download_item_small.css";
import downloadIcon from "@/public/img/downloadIcon2.png"

export type DownloadItemProps = {
    fileName: string;
    fileType: string;
    fileSize: string;
    downloadUrl: string;
}

export default function DownloadItemSmall({ fileName, fileType, fileSize, downloadUrl }: DownloadItemProps) {
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
        <li className="downloadItem">
            <table>
                <tbody>
                    <tr>
                        <td className="title">項目名稱</td>
                        <td>{fileName}</td>
                    </tr>
                    <tr>
                        <td className="title">檔案類型</td>
                        <td>.{fileType}</td>
                    </tr>
                    <tr>
                        <td className="title">檔案大小</td>
                        <td>{formatFileSize(fileSize)}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <a href="#" onClick={(e) => {e.preventDefault(); handleDownload();}}>
                                <div className="downloadBtn">
                                    <img className="downloadIcon" src={downloadIcon.src} alt="download" />
                                    <div>檔案下載</div>
                                </div>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
}