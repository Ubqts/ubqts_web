import "./carousel_item.css";
import useAds from "../hooks/useAds";

import Image from "next/image";

type CarouselProps = {
    id: number;
    picture: string;
};

export default function CarouselItem({ id, picture }: CarouselProps) {
    const { deleteAds } = useAds();

    const handleDelete = () => {
        try {
            deleteAds(id);
            alert("廣告刪除成功");
            location.reload();    
        } catch (error) {
            alert("廣告刪除失敗");
            console.log("error: ", error);
        }
    }

    return (
        <div className="entity">
            <Image className="carouselImg" src={picture} alt="1" />
            <Image className="deleteBtn" src="./Image/closeIcon.png" alt="delete" onClick={() => handleDelete()} />
        </div>
    )
}