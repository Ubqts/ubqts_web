import "./page.css";

export default function NewProduct() {
    return (
        <div className="container">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>
            <div className="blankBanner" />
            <div className="content">
                <input className="title" placeholder="產品名稱" />
                <input className="img" placeholder="產品圖片網址" />
                <textarea className="description" placeholder="產品描述" /></div>
            <div className="blankBanner" />
            <div className="btnContainer prevent-select">
                <div className="add">新增</div>
                <div className="cancel">取消</div>
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
};