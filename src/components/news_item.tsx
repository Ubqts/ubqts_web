import "./news_item.css";
import useNews from "@/src/hooks/useNews";
import Loading from "./loading";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@mui/material";

export type NewsProps = {
    id?: number;
    title: string;
    picture: string;
    description: string;
    language?: string;
    date?: Date;
    isAdding: boolean;
    setIsAdding?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewsItem({ id, title, picture, description, language, date, isAdding, setIsAdding }: NewsProps) {
    const router = useRouter();
    const { data: session } = useSession();
    const [EditTitle, setEditTitle] = useState(title);
    // const [EditPicture, setEditPicture] = useState<File | null>(null);
    const [EditPicture, setEditPicture] = useState(picture);
    const [EditImage, setEditImage] = useState(picture);
    const [EditDescription, setEditDescription] = useState(description);
    const [imgLng, setImgLng] = useState<string | null>(language || null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const { postNews, putNews, deleteNews } = useNews();

    useEffect(() => {
        if (isAdding) {
            setIsEditing(true);
        }
    }, [isAdding]);

    const handleSave = async () => {
        if (!EditTitle) {
            alert("新聞標題不得為空！");
        } else if (!EditDescription) {
            alert("新聞內容不得為空！");
        } else if (imgLng === null) {
            alert("請選擇語言！");
        } else {
            if (!isAdding && id) {
                try {
                    setLoading(true);
                    await putNews({
                        id,
                        picture: EditPicture,
                        title: EditTitle,
                        description: EditDescription,
                        // date,
                    });
                    setLoading(false);
                    alert("編輯新聞成功！");
                    router.refresh();
                } catch (error) {
                    alert("發生錯誤！");
                    setLoading(false);
                    console.log("error: ", error);
                }
            } else {
                if (EditPicture === null) {
                    alert("請選擇圖片！");
                    return;
                } else {
                    try {
                        setLoading(true);
                        await postNews({
                            title: EditTitle,
                            picture: EditPicture,
                            description: EditDescription,
                            date: new Date(),
                            language: imgLng,
                        });
                        setLoading(false);
                        alert("新增新聞成功！");
                        router.refresh();
                    } catch (error) {
                        alert("發生錯誤！");
                        setLoading(false);
                        console.log("error: ", error);
                    }
                }
            }
            setIsEditing(false);
            setIsEditing(false);
            location.reload();
        }
    }

    const handleDelete = async () => {
        if (id) {
            try {
                setLoading(true);
                await deleteNews(
                    id,
                );
                setIsEditing(false);
                setLoading(false);
                alert("刪除成功");
                location.reload();
            } catch (error) {
                alert("發生錯誤！");
                setLoading(false);
                console.log("error: ", error);
            }
        }
    }

    const handleOnClick = () => {
        if (session?.user.role === "admin") {
            setIsEditing(true);
        } else {
            // router.push(`/news/id=${id}`);
            window.location.href = `/news/id=${id}`;
        }
    }

    const handleCancel = () => {
        setIsEditing(false);
        if (setIsAdding) {
            setIsAdding(false);
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEditPicture(e.target.value);
            setEditImage(e.target.value);
        }
    }

    return (
        <div>
            {/* <div className="newsItem prevent-select" onClick={!isEditing ? () => handleOnClick() : undefined}> */}
            <a className="newsItem prevent-select" onClick={!isEditing ? () => handleOnClick() : undefined}>
                <div className="newsImg">
                    {!isEditing && <img src={picture} alt="1" />}
                    {isEditing &&
                        <>
                            <label htmlFor="fileInput">
                                <img src={EditImage} alt="1" className="editNewsImgButton" />
                                {/* <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                /> */}
                                <Input
                                    id="fileInput"
                                    type="text"
                                    defaultValue={EditImage}
                                    onChange={handleImageChange}
                                />
                            </label>
                        </>
                    }
                </div>
                <div className="newsInfo">
                    {!isEditing && <p className="newsTitle">{title}</p>}
                    {!isEditing && <p className="newsContent">{description}</p>}
                    {isEditing && <input className="newsTitle" defaultValue={title} onChange={(e) => setEditTitle(e.target.value)} />}
                    {isEditing && <textarea className="newsContent" defaultValue={description} onChange={(e) => setEditDescription(e.target.value)} />}
                    {(isAdding || isEditing) &&
                        <div className="langContainer">
                            <div className="choice">
                                <input type="checkbox" value="en" id="enNews" checked={imgLng === "en"} onChange={(e) => setImgLng(e.target.value)} />
                                <label htmlFor="enNews">英文</label>
                            </div>
                            <div className="choice">
                                <input type="checkbox" value="zh-tw" id="twNews" checked={imgLng === "zh-tw"} onChange={(e) => setImgLng(e.target.value)} />
                                <label htmlFor="twNews">繁體中文</label>
                            </div>
                            {/* <div className="choice">
                                <input type="checkbox" value="zh-cn" id="cnNews" checked={imgLng === "zh-cn"} onChange={(e) => setImgLng(e.target.value)} />
                                <label htmlFor="cnNews">簡體中文</label>
                            </div> */}
                        </div>
                    }
                </div>
                {/* <p className="date">{date?.getFullYear()}-{date?.getMonth()}-{date?.getDate()}</p> */}
                <p className="date">{date?.toString().split("T")[0]}</p>
            </a>
            {/* </div > */}
            <div className="apiButtons">
                {(!isAdding && isEditing) && <button className="deleteButton" onClick={() => handleDelete()}>刪除</button>}
                {isEditing && <button className="saveButton" onClick={() => handleSave()}>儲存</button>}
                {isEditing && <button className="cancelButton" onClick={() => handleCancel()}>取消</button>}
            </div>

            <Loading open={loading} />
        </div>
    );
}