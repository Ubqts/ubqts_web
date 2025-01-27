import { useRouter } from "next/navigation";
import { useState } from "react";
import "./carousel_item.css";
import useAds from "../hooks/useAds";
import Loading from "./loading";
import closeIcon from "@/public/img/closeIcon.png";

type CarouselProps = {
    id: number;
    picture: string;
};

export default function CarouselItem({ id, picture }: CarouselProps) {
    const [ loading, setLoading ] = useState(false);
    const { deleteAds } = useAds();
    const router = useRouter();

    const handleDelete = async () => {
        try {
            setLoading(true);
            await deleteAds(id);
            setLoading(false);
            alert("廣告刪除成功");
            router.refresh();
        } catch (error) {
            alert("廣告刪除失敗");
            setLoading(false);
            console.log("error: ", error);
        }
    }

    return (
        <div className="entity">
            <img className="carouselImg" src={picture} alt="1" />
            <img className="deleteBtn" src={closeIcon.src} alt="delete" onClick={() => handleDelete()} />

            <Loading open={loading} />
        </div>
    )
}