'use client';
import "./page.css";
// import EditProductItem from "@/src/components/edit_product_item";
import { ProductContext, Product } from "@/src/context/Products";
import useProducts from "@/src/hooks/useProducts";
import TextEditor from "@/src/components/text_editor";
import Loading from "@/src/components/loading";
import { useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@mui/material";

const Page = () => {
    const router = useRouter();
    const [product, setProduct] = useState<Product>();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editName, setEditName] = useState<string>("");
    const [editImage, setEditImage] = useState<string>("");
    // const [editPicture, setEditPicture] = useState<File | null>(null);
    const [editPicture, setEditPicture] = useState<string>("");
    const [editDescription, setEditDescription] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [imgLoaded, setImgLoaded] = useState<boolean>(false);
    const { products } = useContext(ProductContext);
    const { deleteProducts, putProducts } = useProducts();
    const { data: session } = useSession();

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
        if (e.target.value) {
            setEditPicture(e.target.value);
            setEditImage(e.target.value);
        }
    }

    const handleSave = async () => {
        const url = window.location.href;
        const id = Number(url.split('=').pop());
        if (editName === "") {
            alert("請輸入名稱");
            return;
        } else if (editDescription === "") {
            alert("請輸入描述");
            return;
        } else {
            try {
                setLoading(true);
                await putProducts({
                    id: id,
                    name: editName,
                    picture: editPicture,
                    description: editDescription,
                });
                setLoading(false);
                alert("編輯成功！");
                router.refresh();
            } catch (error) {
                setLoading(false);
                alert("編輯失敗！");
                console.log("error: ", error);
            }
        }
    }

    const handleDelete = async () => {
        const url = window.location.href;
        const id = Number(url.split('=').pop());
        try {
            setLoading(true);
            await deleteProducts(id);
            setLoading(false);
            alert("刪除成功！");
            // router.push("/product_page");
            window.location.href = "/product_page";
        } catch (error) {
            setLoading(false);
            alert("刪除失敗！");
            console.log("error: ", error);
        }
    }

    if (!imgLoaded) {
        return (
            <>
                <div className="spinnerBox">
                    <div className="circleBorder">
                        <div className="circleCore"></div>
                    </div>
                </div>
                <img src={editImage} alt="productImg" onLoad={() => setImgLoaded(true)} style={{ display: 'none' }} />
            </>
        )
    }

    return (
        <>
            <div className="container">
                <div className="productContent">
                    {!isEditing && <h1 className="title">{product?.name}</h1>}
                    {!isEditing && <img src={product?.picture} alt="productImg" />}
                    {!isEditing && <div dangerouslySetInnerHTML={{ __html: product?.description || "" }}></div>}
                    {isEditing && <input className="title" defaultValue={product?.name} onChange={(e) => setEditName(e.target.value)} />}
                    {isEditing &&
                        <>
                            <label htmlFor="fileInput">
                                <img src={editImage} alt="1" className="editNewsImgButton" />
                            </label>
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
                                onChange={handleImageChange}
                            />
                        </>
                    }
                    {/* {isEditing && <textarea defaultValue={product?.description} onChange={(e) => setEditDescription(e.target.value)}/>} */}
                    {isEditing &&
                        <TextEditor
                            editorContent={editDescription}
                            setEditorContent={setEditDescription}
                        />
                    }
                </div>
                {session?.user.role === "admin" &&
                    <>
                        <div className="blankBanner" />
                        <div className="adminButtons">
                            {!isEditing && <button className="edit" onClick={() => setIsEditing(true)}>編輯產品</button>}
                            {isEditing && <button className="cancel" onClick={() => setIsEditing(false)}>取消編輯</button>}
                            {isEditing && <button className="save" onClick={() => handleSave()}>儲存編輯</button>}
                            {!isEditing && <button className="delete" onClick={() => handleDelete()}>刪除產品</button>}
                            {!isEditing && <a className="add" href="/new_product">新增產品</a>}
                        </div>
                    </>
                }
            </div>
            <Loading open={loading} />
        </>
    )
}

export default Page;