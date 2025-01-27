import { useRouter } from "next/navigation";
import "./carousel_item.css";
import useAds from "../hooks/useAds";
import closeIcon from "@/public/img/closeIcon.png";

type CarouselProps = {
    id: number;
    picture: string;
};

export default function CarouselItem({ id, picture }: CarouselProps) {
    const { deleteAds } = useAds();
    const router = useRouter();

    const handleDelete = async () => {
        try {
            await deleteAds(id);
            alert("廣告刪除成功");
            router.refresh();
        } catch (error) {
            alert("廣告刪除失敗");
            console.log("error: ", error);
        }
    }

    return (
        <div className="entity">
            <img className="carouselImg" src={picture} alt="1" />
            <img className="deleteBtn" src={closeIcon.src} alt="delete" onClick={() => handleDelete()} />
        </div>
    )
}