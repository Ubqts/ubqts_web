import downloadIcon from "@/public/img/downloadIcon.png";

export default function DownloadItemSmall() {
    return (
        <tr>
            <td className="fileName">lorem ipsum</td>
            <td>.pdf</td>
            <td>1.5MB</td>
            <td><a><img className="downloadIcon" src={downloadIcon.src} alt="download" /></a></td>
        </tr>
    );
}