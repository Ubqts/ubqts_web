import "./download_item_small.css";
import downloadIcon from "@/public/img/downloadIcon2.png"

export type DownloadItemProps = {
    fileName: string;
    fileType: string;
    fileSize: number;
    downloadUrl: string;
}

export default function DownloadItemSmall({ fileName, fileType, fileSize, downloadUrl }: DownloadItemProps) {
    const handleDownload = async () => {
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = fileName;
        link.click();
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
                        <td>{fileSize} MB</td>
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