'use client';
import "./page.css";
// import EditProductItem from "@/src/components/edit_product_item";
import { ProductContext, Product } from "@/src/context/Products";
import useProducts from "@/src/hooks/useProducts";

import { useContext, useState, useEffect } from "react";

const Page = () => {
    const [ product, setProduct ] = useState<Product>();
    const [ isEditing, setIsEditing ] = useState<boolean>(false);
    const [ editName, setEditName ] = useState<string>("");
    const [ editPicture, setEditPicture ] = useState<string>("");
    const [ editDescription, setEditDescription ] = useState<string>("");
    const { products } = useContext(ProductContext);
    const { deleteProducts, putProducts } = useProducts();

    useEffect(() => {
        const fetchProduct = async () => {
            const url = window.location.href;
            const id = Number(url.split('=').pop());
            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                console.log("error: ", error);
            }
        }
        fetchProduct();
    }, []);

    const handleEditPicture = () => {
        const newImg = prompt("請輸入新圖片網址");
        if (newImg) {
            setEditPicture(newImg);
        }
    }

    const handleSave = async () => {
        const url = window.location.href;
        const id = Number(url.split('=').pop());
        try {
            putProducts({
                id: id, 
                name: editName,
                picture: editPicture,
                description: editDescription,
            });
            alert("編輯成功！");    
        } catch(error) {
            alert("編輯失敗！");
            console.log("error: ", error);
        }
    }

    return (
        <>
        <div className="container">
            <div className="wrapper">
                <div className="content">
                    {!isEditing && <h1 className="title">{product?.name}</h1>}
                    {!isEditing && <img src={product?.picture} alt="productImg" />}
                    {!isEditing && <p>{product?.description}</p>}
                    {isEditing && <input className="title" defaultValue={product?.name} onChange={(e) => setEditName(e.target.value)}/>}
                    {isEditing && <img src={product?.picture} alt="productImg" onClick={() => handleEditPicture()}/>}
                    {isEditing && <textarea defaultValue={product?.description} onChange={(e) => setEditDescription(e.target.value)}/>}
                </div>
            </div>
            <div className="blankBanner" />
        </div>
        <div className="">
            {!isEditing && <a className="prevPage" onClick={() => setIsEditing(true)}>編輯產品</a>}
            {isEditing && <a className="prevPage" onClick={() => setIsEditing(false)}>取消編輯</a>}
            {isEditing && <a className="prevPage" onClick={() => handleSave()}>儲存編輯</a>}
            <a className="prevPage" onClick={() => {
                const url = window.location.href;
                const id = Number(url.split('=').pop());
                deleteProducts(id);
            }}>刪除產品</a>
        </div>
        </>
        
        
    )
}

export default Page;