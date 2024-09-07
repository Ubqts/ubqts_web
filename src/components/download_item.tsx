import "./download_item.css";

export default function DownloadItem() {
    return (
        <li className="downloadItem">
            <table>
                <tbody>
                    <tr>
                        <td className="title">項目名稱</td>
                        <td>lorem ipsum</td>
                    </tr>
                    <tr>
                        <td className="title">檔案類型</td>
                        <td>.pdf</td>
                    </tr>
                    <tr>
                        <td className="title">檔案大小</td>
                        <td>1.5MB</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <a>
                                <div className="downloadBtn">
                                    <img className="downloadIcon" src="./img/downloadIcon2.png" alt="download" />
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