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

const Page = () => {
    const router = useRouter();
    const [product, setProduct] = useState<Product>();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editName, setEditName] = useState<string>("");
    const [editImage, setEditImage] = useState<string>("");
    const [editPicture, setEditPicture] = useState<File | null>(null);
    const [editDescription, setEditDescription] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
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
        if (e.target.files && e.target.files[0]) {
            setEditPicture(e.target.files[0]);
            const newImage = URL.createObjectURL(e.target.files[0]);
            setEditImage(newImage);
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
            router.push("/product_page");
        } catch (error) {
            setLoading(false);
            alert("刪除失敗！");
            console.log("error: ", error);
        }
    }

    return (
        <>
            <div className="container">
                <div className="content">
                    {!isEditing && <h1 className="title">{product?.name}</h1>}
                    {!isEditing && <img src={product?.picture} alt="productImg" />}
                    {!isEditing && <div dangerouslySetInnerHTML={{ __html: product?.description || "" }}></div>}
                    {isEditing && <input className="title" defaultValue={product?.name} onChange={(e) => setEditName(e.target.value)} />}
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
                    {/* {isEditing && <textarea defaultValue={product?.description} onChange={(e) => setEditDescription(e.target.value)}/>} */}
                    {isEditing &&
                        <TextEditor
                            editorContent={editDescription}
                            setEditorContent={setEditDescription}
                        />
                    }
                </div>
                <div className="blankBanner" />
            </div>
            {session?.user.role === "admin" &&
                <div className="adminButtons">
                    {!isEditing && <button className="prevPage" onClick={() => setIsEditing(true)}>編輯產品</button>}
                    {isEditing && <button className="prevPage" onClick={() => setIsEditing(false)}>取消編輯</button>}
                    {isEditing && <button className="prevPage" onClick={() => handleSave()}>儲存編輯</button>}
                    <button className="prevPage" onClick={() => handleDelete()}>刪除產品</button>
                    <a className="prevPage" href="/new_product">新增產品</a>
                </div>
            }
            <Loading open={loading} />
        </>
    )
}

export default Page;