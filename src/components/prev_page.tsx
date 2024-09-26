'use client';
import useProduct from '../hooks/useProducts';
import { useEffect, useState } from 'react';

export default function PrevPage() {
    const { deleteProducts, putProducts } = useProduct();
    const [ homePage, setHomePage ] = useState<boolean>(true);
    const [ isEditing, setIsEditing ] = useState<boolean>(false);

    useEffect(() => {
        const url = window.location.href;
        if (url.includes('id')) {
            setHomePage(false);
        }
    }, [setHomePage]);

    const handleSave = async () => {
        const url = window.location.href;
        const id = Number(url.split('=').pop());
        // putProducts({
        //     id: id, 
        //     name: editName,
        //     picture: editPicture,
        //     description: editDescription, 
        // });
    }

    console.log(homePage);
    
    return (
        <>
            {homePage && <a className="prevPage" href="/new_product">新增產品</a>}
            {!homePage && !isEditing && <a className="prevPage" onClick={() => setIsEditing(true)}>編輯產品</a>}
            {!homePage && isEditing && <a className="prevPage" onClick={() => setIsEditing(false)}>取消編輯</a>}
            {!homePage && <a className="prevPage" onClick={() => {
                const url = window.location.href;
                const id = Number(url.split('=').pop());
                deleteProducts(id);
            }}>刪除產品</a>}
            {!homePage && isEditing && <a className="prevPage" onClick={() => handleSave()}>儲存編輯</a>}
        </>
    )
}