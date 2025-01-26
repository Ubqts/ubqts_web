'use client';
import banner from "@/public/img/banner.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import "./page.css";
import useProducts from "@/src/hooks/useProducts";
import TextEditor from "@/src/components/text_editor";

export default function NewProduct() {
    const router = useRouter();
    const { data: session } = useSession();
    const { postProducts } = useProducts();
    const [ productName, setProductName ] = useState("");
    const [ productDescription, setproductDescription ] = useState("");
    const [ picture, setPicture ] = useState<File | null>(null);
    const [ image, setImage ] = useState("");
    const [ imgLng, setImgLng ] = useState("");

    useEffect(() => {
        if (session?.user.role !== "admin") {
            alert("您無權限新增產品！");
            router.push("/");
        }
    }, [session]);

    const handleSave = () => {
        if (!productName) {
            alert("產品名稱不得為空！");
        } else if (!picture) {
            alert("請輸入產品圖片網址！");
        } else if (!productDescription) {
            alert("產品敘述不得為空！");
        } else if (!imgLng) {
            alert("請選擇語言！");
        } else {
            try {
                postProducts({
                    name: productName,
                    picture: picture,
                    description: productDescription,
                    language: imgLng
                });
                alert("產品新增成功！");
                router.push("/");
            } catch (error) {
                alert("產品新增失敗！");
                console.log(error);
            }
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPicture(e.target.files[0]);
            const newImage = URL.createObjectURL(e.target.files[0]);
            setImage(newImage);
        }
    }

    return (
        <div className="container">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <div className="blankBanner" />
            <div className="content">
                <div className="flex">
                    <div className="titleAndImage">
                        <input className="title" placeholder="產品名稱" onChange={(e) => setProductName(e.target.value)} />
                        <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <label htmlFor="fileInput">
                        {image !== "" && <img src={image} alt="product picture preview" />}
                    </label>
                </div>
                {/* <textarea className="description" placeholder="產品描述" onChange={(e) => setproductDescription(e.target.value)} /> */}
                <TextEditor editorContent={productDescription} setEditorContent={setproductDescription}/>
            </div>
            <div className="langContainer">
                <div className="choice">
                    <input type="checkbox" value="en" id="enProduct" checked={imgLng === "en"} onChange={(e) => { setImgLng(e.target.value) }} />
                    <label htmlFor="enProduct">英文</label>
                </div>
                <div className="choice">
                    <input type="checkbox" value="zh-tw" id="twProduct" checked={imgLng === "zh-tw"} onChange={(e) => setImgLng(e.target.value)} />
                    <label htmlFor="twProduct">繁體中文</label>
                </div>
                <div className="choice">
                    <input type="checkbox" value="zh-cn" id="cnProduct" checked={imgLng === "zh-cn"} onChange={(e) => setImgLng(e.target.value)} />
                    <label htmlFor="cnProduct">簡體中文</label>
                </div>
            </div>
            <div className="blankBanner" />
            <div className="btnContainer prevent-select">
                <a className="add" href="/#" onClick={() => handleSave()}>新增</a>
                <a className="cancel" href="/#">取消</a>
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
};