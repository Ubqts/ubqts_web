'use client';
import "./layout.css";
import { ProductContext } from "@/src/context/Products";
import useProducts from "@/src/hooks/useProducts";

import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type LayoutProps = {
    children: React.ReactNode;
    isEditing: boolean;
    saveProduct: boolean;
}

export default function RootLayout({ children }: LayoutProps) {
    const router = useRouter();
    const { products } = useContext(ProductContext);
    const { getProducts, deleteProducts } = useProducts();
    const [ productList, setProductList ] = useState<ProductContext[]>([]);
    const [ homePage, setHomePage ] = useState<boolean>(true);
    const [ isEditing, setIsEditing ] = useState<boolean>(false);
    const [ saveProduct, setSaveProduct ] = useState<boolean>(false);

    useEffect(() => {
        const fetchProductList = async () => {
            const productListInit = await getProducts();
            const productListJSON: ProductContext[] = productListInit["products"];
            setProductList(productListJSON);
        }
        const checkHomePage = () => {
            if (window.location.pathname === "/product_page") {
                setHomePage(true);
            } else {
                setHomePage(false);
            }
        }
        checkHomePage();
        fetchProductList();
    }, [getProducts]);

    // const childrenWithProps = React.Children.map(children, (child) => {
    //     if (React.isValidElement(child)) {
    //         return React.cloneElement(child, { isEditing, saveProduct } as React.Attributes);
    //     }
    //     return child;
    // });

    const deleteProduct = async (id: number) => {
        try {
            await deleteProducts(id);
            alert("產品刪除成功！");
            location.reload();
        } catch (error) {
            alert("產品刪除失敗！");
            console.log("error: ", error);
        }
    }

    console.log("isEditing in Layout.tsx: ", isEditing);
    console.log("saveProduct in Layout.tsx: ", saveProduct);

    return (
        <div className="container">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>
            <div className="blankBanner" />
            <div className="wrapper">
                <div className="productPanel">
                    <p onClick={() => {
                        setHomePage(true);
                        router.push("/product_page");
                    }}>產品介紹</p>
                    {productList.map((product) => (
                        <p
                            className="product"
                            key={product.id}
                            onClick={() => {
                                setHomePage(false);
                                router.push(`/product_page/id=${product.id}`);
                            }}>
                            {product.name}
                        </p>
                    ))}
                </div>
                {/* {childrenWithProps} */}
                {children}
            </div>
            <div className="blankBanner" />
            {homePage && <a className="prevPage" href="/new_product">新增產品</a>}
            {!homePage && !isEditing && <a className="prevPage" onClick={() => setIsEditing(true)}>編輯產品</a>}
            {!homePage && isEditing && <a className="prevPage" onClick={() => setIsEditing(false)}>取消編輯</a>}
            {!homePage && <a className="prevPage" onClick={() => {
                const url = window.location.href;
                const id = Number(url.split('=').pop());
                deleteProduct(id);
            }}>刪除產品</a>}
            {homePage && <a className="prevPage" href="/#">回上一頁</a>}
            {!homePage && isEditing && <a className="prevPage" onClick={() => setSaveProduct(true)}>儲存編輯</a>}

            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    )
}