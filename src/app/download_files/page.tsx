import "./page.css";
import DownloadItem from "@/src/components/download_item";

export default function DownloadFiles() {
    return (
        <div className="container prevent-select">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>
            <h1>下載專區</h1>
            <div className="largeSize">
                <table>
                    <thead className="category">
                        <tr><th colSpan={4}>產品型錄</th></tr>
                    </thead>
                    <thead className="title">
                        <tr>
                            <th className="name">項目名稱</th>
                            <th className="type">檔案類型</th>
                            <th className="size">檔案大小</th>
                            <th className="download">檔案下載</th>
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
                            <td><a><img className="downloadIcon" src="./img/downloadIcon.png" alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src="./img/downloadIcon.png" alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src="./img/downloadIcon.png" alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src="./img/downloadIcon.png" alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src="./img/downloadIcon.png" alt="download" /></a></td>
                        </tr>
                    </tbody>
                </table>
                <div className="blankBanner" />
                <div className="blankBanner" />
                <table>
                    <thead className="category">
                        <tr><th colSpan={4}>軟體下載</th></tr>
                    </thead>
                    <thead className="title">
                        <tr>
                            <th className="name">項目名稱</th>
                            <th className="type">檔案類型</th>
                            <th className="size">檔案大小</th>
                            <th className="download">檔案下載</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src="./img/downloadIcon.png" alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src="./img/downloadIcon.png" alt="download" /></a></td>
                        </tr>
                        <tr>
                            <td className="fileName">lorem ipsum</td>
                            <td>.pdf</td>
                            <td>1.5MB</td>
                            <td><a><img className="downloadIcon" src="./img/downloadIcon.png" alt="download" /></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="smallSize">
                <div className="category">
                    <h2>產品型錄</h2>
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
                    <h2>軟體下載</h2>
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