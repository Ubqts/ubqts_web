import "./page.css";
import banner from "@/public/img/banner.png";

export default function NewsPage() {
    return (
        <div className="container prevent-select">
            <div className="banner">
                <img src={banner.src} alt="banner" />
            </div>
            <div className="blankBanner" />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, laboriosam!</h1>
            <div className="imgWithText">
                <img src="https://picsum.photos/380/220" alt="img" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus ab praesentium minus nam. Illum dolorem
                    tempora nam, temporibus at ipsam iste quos consectetur
                    eum ea non reiciendis placeat quidem accusantium, sequi
                    eligendi, perferendis quod ab maiores omnis tempore
                    explicabo natus ducimus aperiam? Nobis officia dolorum
                    suscipit saepe nam asperiores ad praesentium, magnam quasi.
                    Sed dignissimos omnis, culpa voluptatem vero at pariatur
                </p>
            </div>
            <div className="blankBanner" />
            <a className="prevPage" href="/news">回上一頁</a>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}