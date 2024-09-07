import "./news_item.css";

export default function NewsItem() {
    return (
        <div className="newsItem prevent-select">
            <div className="newsImg"><img src="https://picsum.photos/300/200?random=1" alt="1" /></div>
            <div className="newsInfo">
                <div className="newsTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, facilis!</div>
                <p className="newsContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sed fuga repellat dolorem libero, autem aut optio quibusdam soluta voluptas, fugiat, officiis nihil eum! Cumque, voluptatibus, est ea atque tempore suscipit rem ex perferendis maxime consequatur nihil, officiis voluptatum fugit illum? Deleniti, adipisci voluptate, laborum assumenda similique aspernatur, qui porro quaerat deserunt magni dolore facere sint ipsa doloremque veniam nemo!</p>
            </div>
            <div className="date">2021-01-01</div>
        </div >
    );
}