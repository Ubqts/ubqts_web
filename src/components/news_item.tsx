import "./news_item.css";
import useNews from "@/src/hooks/useNews";
import { useContext, useState } from "react";

export type NewsProps = {
    id: number;
    title: string;
    picture: string;
    description: string;
    date: Date;
}

export default function NewsItem({ id, title, picture, description, date }: NewsProps) {
    const [EditTitle, setEditTitle] = useState(title);
    const [EditPicture, setEditPicture] = useState(picture);
    const [EditDescription, setEditDescription] = useState(description);
    const [isEditing, setIsEditing] = useState(false);
    const { putNews, deleteNews } = useNews();

    const handleChangeImg = () => {
        const newImg = prompt("請輸入新圖片網址");
        if (newImg) {
            setEditPicture(newImg);
        }
    }

    const handleSave = () => {
        putNews({
            id,
            picture: EditPicture,
            title: EditTitle,
            description: EditDescription,
            // date,
        });
        setIsEditing(!isEditing);
    }

    const handleDelete = () => {
        deleteNews(
            id,
        );
        setIsEditing(!isEditing);
    }

    return (
        <>
            <div onClick={() => setIsEditing(!isEditing)}>
                <div className="newsItem prevent-select">
                    <div className="newsImg">
                        <img src={picture} alt="1" />
                        {isEditing && <button className="editNewsImgButton" onClick={() => handleChangeImg()}>編輯</button>}
                    </div>
                    <div className="newsInfo">
                        {!isEditing && <p className="newsTitle">{title}</p>}
                        {!isEditing && <p className="newsContent">{description}</p>}
                        {isEditing && <input className="newsTitle" defaultValue={title} onChange={(e) => setEditTitle(e.target.value)} />}
                        {isEditing && <textarea className="newsContent" defaultValue={description} onChange={(e) => setEditDescription(e.target.value)} />}
                    </div>
                    {/* <p className="date">{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</p> */}
                    <p className="date">{date.toString()}</p>
                </div >
                <div className="apiButtons">
                    {isEditing && <button className="saveButton" onClick={() => handleDelete()}>刪除</button>}
                    {isEditing && <button className="saveButton" onClick={() => handleSave()}>儲存</button>}
                    {isEditing && <button className="cancelButton" onClick={() => setIsEditing(!isEditing)}>取消</button>}
                </div>
            </div>
        </>
    );
}