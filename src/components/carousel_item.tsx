import "./carousel_item.css";
import useAds from "../hooks/useAds";

type CarouselProps = {
    id: number;
    picture: string;
};

export default function CarouselItem({ id, picture}: CarouselProps) {
    const { deleteAds } = useAds();

    const handleDelete = () => {
        deleteAds(id);
        alert("刪除成功");
    }

    return (
        <div className="entity">
            <img className="carouselImg" src={picture} alt="1" />
            <img className="deleteBtn" src="./img/closeIcon.png" alt="delete" onClick={() => handleDelete()}/>
        </div>
    )
}