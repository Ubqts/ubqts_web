import "./product_item.css";
import { useRouter } from 'next/navigation';

type ProductProps = {
    id: number;
    picture: string;
    name: string;
    lng: string;
};

export default function ProductItem({ id, picture, name, lng }: ProductProps) {
    const router = useRouter();

    return (
        <div className="productItem" onClick={() => { router.push(`/${lng}/product_page/id=${id}`) }}>
            {/* <img src={picture} alt="1" /> */}
            <div className="productImgHolder">
                <img src={picture} alt="1" />
            </div>
            <p>{name}</p>
        </div>
    )
}