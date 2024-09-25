'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

import "./page.css";
import useProducts from "@/src/hooks/useProducts";

export default function NewProduct() {
    const router = useRouter();
    const { postProducts } = useProducts();
    const [ productName, setProductName ] = useState("");
    const [ productDescription, setproductDescription ] = useState("");
    const [ picture, setPicture ] = useState("");
    const [ imgLng, setImgLng ] = useState("");

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
                // router.push("/");
            } catch (error) {
                alert("產品新增失敗！");
                console.log(error);
            }    
        }
    }

    return (
        <div className="container">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>
            <div className="blankBanner" />
            <div className="content">
                <input className="title" placeholder="產品名稱" onChange={(e) => setProductName(e.target.value)} />
                <input className="img" placeholder="產品圖片網址" onChange={(e) => setPicture(e.target.value)} />
                <textarea className="description" placeholder="產品描述" onChange={(e) => setproductDescription(e.target.value)} />
            </div>
            <div>
                <div>
                    <input type="checkbox" value="en" checked={imgLng === "en"} onChange={(e) => {setImgLng(e.target.value)}} />
                    <p>英文</p>
                </div>
                <div>
                    <input type="checkbox" value="zh-tw" checked={imgLng === "zh-tw"} onChange={(e) => setImgLng(e.target.value)} />
                    <p>繁體中文</p>
                </div>
                <div>
                    <input type="checkbox" value="zh-cn" checked={imgLng === "zh-cn"} onChange={(e) => setImgLng(e.target.value)} />
                    <p>簡體中文</p>
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