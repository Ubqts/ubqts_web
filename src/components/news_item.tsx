import "./news_item.css";
import useNews from "@/src/hooks/useNews";
import { useContext, useEffect, useState } from "react";

export type NewsProps = {
    id?: number;
    title: string;
    picture: string;
    description: string;
    date?: Date;
    isAdding: boolean;
    setIsAdding?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewsItem({ id, title, picture, description, date, isAdding, setIsAdding }: NewsProps) {
    const [EditTitle, setEditTitle] = useState(title);
    const [EditPicture, setEditPicture] = useState(picture);
    const [EditDescription, setEditDescription] = useState(description);
    const [isEditing, setIsEditing] = useState(false);
    const { postNews, putNews, deleteNews } = useNews();

    useEffect(() => {
        if (isAdding) {
            setIsEditing(true);
        }
    }, [])

    const handleChangeImg = () => {
        const newImg = prompt("請輸入新圖片網址");
        if (newImg) {
            setEditPicture(newImg);
        }
    }

    const handleSave = () => {
        if (!EditTitle) {
            alert("新聞標題不得為空！");
        } else if (!EditDescription) {
            alert("新聞內容不得為空！");
        } else if (!EditPicture) {
            alert("圖片網址不得為空！");
        } else {
            if (!isAdding) {
                try {
                    putNews({
                        id,
                        picture: EditPicture,
                        title: EditTitle,
                        description: EditDescription,
                        // date,
                    });
                    alert("編輯新聞成功！");
                } catch (error) {
                    alert("發生錯誤！");
                    console.log("error: ", error);
                }
            } else {
                try {
                    postNews({
                        title: EditTitle,
                        picture: EditPicture,
                        description: EditDescription,
                        date: new Date(),
                        language: "zh-tw",
                    });
                    alert("新增新聞成功！");
                } catch (error) {
                    alert("發生錯誤！");
                    console.log("error: ", error);
                }
            }
            setIsEditing(false);
            setIsEditing(false);
            location.reload();
        }
    }

    const handleDelete = () => {
        deleteNews(
            id,
        );
        setIsEditing(false);
    }

    const handleCancel = () => {
        setIsEditing(false);
        if (setIsAdding) {
            setIsAdding(false);
        }
    }

    return (
        <div>
            <div className="newsItem prevent-select" onClick={() => setIsEditing(true)}>
                <div className="newsImg">
                    {!isEditing && <img src={picture} alt="1" />}
                    {isEditing && <img src={picture} className="editNewsImgButton" onClick={() => handleChangeImg()} />}
                </div>
                <div className="newsInfo">
                    {!isEditing && <p className="newsTitle">{title}</p>}
                    {!isEditing && <p className="newsContent">{description}</p>}
                    {isEditing && <input className="newsTitle" defaultValue={title} onChange={(e) => setEditTitle(e.target.value)} />}
                    {isEditing && <textarea className="newsContent" defaultValue={description} onChange={(e) => setEditDescription(e.target.value)} />}
                </div>
                {/* <p className="date">{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</p> */}
                <p className="date">{date?.toString()}</p>
            </div >
            <div className="apiButtons">
                {(!isAdding && isEditing) && <button className="deleteButton" onClick={() => handleDelete()}>刪除</button>}
                {isEditing && <button className="saveButton" onClick={() => handleSave()}>儲存</button>}
                {isEditing && <button className="cancelButton" onClick={() => handleCancel()}>取消</button>}
            </div>
        </div>
    );
}