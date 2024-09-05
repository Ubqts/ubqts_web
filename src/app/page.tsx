import Image from "next/image";
import "./page.css";

export default function Home() {
    return (
        <div className="container prevent-select">
            <div className="carousel">
                <div className="carouselContainer">
                    <img src="https://picsum.photos/1700/600?random=1" alt="1" />
                    <img src="https://picsum.photos/1700/600?random=2" alt="2" />
                    <img src="https://picsum.photos/1700/600?random=3" alt="3" />
                </div>
            </div>
            {/* WARNING: the position of the carouselUI will break when the size of the window different. */}
            <div className="carouselUI">
                <div className="btn prev">&lt;</div>
                <div className="indices">
                    <div className="index-item current"></div>
                    <div className="index-item"></div>
                    <div className="index-item"></div>
                </div>
                <div className="btn next">&gt;</div>
            </div>

            <div className="blankBanner" />

            <div className="content origin">
                <h1>公司起源</h1>
                <div className="imgWithText">
                    <img src="https://picsum.photos/400?random=4" alt="1" />
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa in fugit accusantium enim, porro eius. Dignissimos soluta, necessitatibus, distinctio tempora aut tenetur amet, alias atque provident quae veniam quis.</p>
                        <p>Accusantium explicabo qui quia mollitia, ab deserunt inventore odio ipsam expedita ratione cumque nihil corrupti consequuntur delectus fugit maiores quidem eligendi earum reiciendis! Optio quod tempore maiores dolore quaerat.</p>
                        <p>Sint veritatis, architecto tenetur illo fuga et sapiente ad culpa iure velit unde enim doloremque magnam molestiae dolore eligendi, dolorem magni tempore praesentium suscipit minus delectus? Quibusdam, ullam eligendi.</p>
                        <p>Quaerat enim optio magnam illo id. Deserunt suscipit tenetur atque impedit voluptatem nam aperiam labore maxime sint, magnam unde delectus quae, error amet, corrupti rerum consequuntur veniam corporis doloremque.</p>
                        <p>Nobis non hic vero provident porro ad eius est consequuntur! Minima, commodi architecto nam natus sapiente similique nihil ut necessitatibus non repellat provident, et velit! Exercitationem est illum maiores!</p>
                        <p>Animi quae est fugiat harum quidem vel perspiciatis, distinctio ad, corrupti vitae expedita reiciendis hic ipsum culpa, blanditiis optio eaque. Illum totam, nihil aliquid fuga quaerat deserunt ipsa nostrum!</p>
                        <p>Quibusdam maxime iusto repellendus nam harum, vitae odit eligendi! Non porro facilis ducimus esse, voluptates beatae assumenda nihil quisquam, maxime expedita molestiae ea similique sunt qui, corrupti aperiam officiis!</p>
                    </div>
                </div>
            </div>

            <div className="blankBanner" />

            <div className="content">
                <h1>產品介紹</h1>
                <div className="productTable">
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=5" alt="1" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=6" alt="2" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=7" alt="3" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=8" alt="4" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=9" alt="5" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=10" alt="6" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=11" alt="7" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=12" alt="8" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="product">
                        <img src="https://picsum.photos/300/400?random=13" alt="9" />
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
