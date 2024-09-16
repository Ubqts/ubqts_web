// import './edit_product_item.css';
import useProduct from '@/src/hooks/useProducts';

type ProductItemProps = {
    id?: number;
    name: string;
    img: string;
    description: string;
    language: string;
    isAdding?: boolean;
    setIsAdding?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditProductItem() {
    const { putProducts, postProducts } = useProduct();

    return (
        <>
            <div className="devContent">
                <input className="title" placeholder="這裡可以放原本的名稱嗎" />
                <input className="img" placeholder="原本的圖片網址" />
                <textarea className="description" placeholder="原本的描述" />
            </div>
            <div className="blankBanner" />
            <div className="btnContainer prevent-select">
                <a className="save" href="/#">儲存</a>
                <a className="cancel" href="/#">取消</a>
                <a className="delete" href="/#">刪除</a>
            </div>
        </>
    )
}