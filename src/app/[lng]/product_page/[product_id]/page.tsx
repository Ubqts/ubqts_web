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
    const [ editImage, setEditImage ] = useState<string>("");
    const [ editPicture, setEditPicture ] = useState<File | null>(null);
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
                setEditImage(productData.picture);
                setEditName(productData.name);
                setEditDescription(productData.description);
            } catch (error) {
                console.log("error: ", error);
            }
        }
        fetchProduct();
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setEditPicture(e.target.files[0]);
            const newImage = URL.createObjectURL(e.target.files[0]);
            setEditImage(newImage);
        }
    }

    const handleSave = async () => {
        const url = window.location.href;
        const id = Number(url.split('=').pop());
        if (editPicture === null) {
            alert("請輸入圖片");
            return;
        } else if (editName === "") {
            alert("請輸入名稱");
            return;
        } else if (editDescription === "") {
            alert("請輸入描述");
            return;
        } else {
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
                    {isEditing &&
                        <>
                            <label htmlFor="fileInput">
                                <img src={editImage} alt="1" className="editNewsImgButton" />
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                        </>
                    }
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