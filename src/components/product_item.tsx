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

    const handleOnClick = () => {
        router.push(`/${lng}/product_page/id=${id}`);
    }

    return (
        <a href={`/${lng}/product_page/id=${id}`} className="productItem">
            {/* <img src={picture} alt="1" /> */}
            <div className="productImgHolder">
                <img src={picture} alt="1" />
            </div>
            <p>{name}</p>
        </a>
    )
}