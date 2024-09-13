import "./carousel_item.css";

export default function CarouselItem() {
    return (
        <div className="entity">
            <img className="carouselImg" src="https://picsum.photos/400/200?random=1" alt="1" />
            <img className="deleteBtn" src="./img/closeIcon.png" alt="delete" />
        </div>
    )
}