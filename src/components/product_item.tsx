import "./product_item.css";
import { useRouter } from 'next/navigation';

type ProductProps = {
    picture: string;
    name: string;
};

export default function ProductItem({ picture, name }: ProductProps) {
    const router = useRouter();

    return (
        <div className="productItem" onClick={() => { router.push(`/product_page`) }}>
            {/* <img src={picture} alt="1" /> */}
            <div className="productImgHolder">
                <img src={picture} alt="1" />
            </div>
            <p>{name}</p>
        </div>
    )
}