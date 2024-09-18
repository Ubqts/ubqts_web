import "./product_item.css";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type ProductProps = {
    id: number;
    picture: string;
    name: string;
};

export default function ProductItem({ id, picture, name }: ProductProps) {
    const router = useRouter();

    return (
        <div className="productItem" onClick={() => { router.push(`/product_page/id=${id}`) }}>
            {/* <img src={picture} alt="1" /> */}
            <div className="productImgHolder">
                <Image src={picture} alt="1" />
            </div>
            <p>{name}</p>
        </div>
    )
}