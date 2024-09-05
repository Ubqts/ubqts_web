import "./page.css";

export default function ContactUs() {
    return (
        <div className="container">
            <div className="banner">
                <img src="https://picsum.photos/1700/450" alt="banner" />
            </div>
            <h1>聯絡我們</h1>
            <div className="blankBanner" />
            <div className="businessCardTable">
                <div className="businessCard">
                    <div className="region">台灣總公司聯絡方式（北、中區）</div>
                    <div className="company">洲通能源科技有限公司</div>
                    <div className="name">姓名：林建成/Jason Lin</div>
                    <div className="phone">電話：(02)2228-7016<br />&emsp;&emsp;&emsp;0926-9096-16</div>
                    <div className="email">E-Mail：sales@ubqts.com.tw</div>
                </div>
                <div className="businessCard">
                    <div className="region">台灣聯絡方式（南區）</div>
                    <div className="company">洲通能源科技有限公司</div>
                    <div className="name">姓名：蘇泓斌 </div>
                    <div className="phone">電話：0911-673-529</div>
                    <div className="email">E-Mail：puppy0529@gmail.com</div>
                </div>
                <div className="businessCard">
                    <div className="region">泰國聯絡方式</div>
                    <div className="company">偉勝電子科技（泰國）有限公司</div>
                    <div className="name">姓名：郭志豪</div>
                    <div className="phone">電話：095-5535205</div>
                    <div className="email">E-Mail：allenkuo1980@jsscwww.com</div>
                </div>
                <div className="businessCard">
                    <div className="region">大陸聯絡方式（華東區） </div>
                    <div className="company">蘇州康皓興電子科技有限公司</div>
                    <div className="name">姓名：孔雪刚</div>
                    <div className="phone">電話：15862569236</div>
                    <div className="email">E-Mail：793588865@qq.com</div>
                </div>
                <div className="businessCard">
                    <div className="region">大陸聯絡方式（華東區）</div>
                    <div className="company">蘇州康皓興電子科技有限公司</div>
                    <div className="name">姓名：孔雪刚</div>
                    <div className="phone">電話：</div>
                    <div className="email">E-Mail：sales@ubqts.com.tw</div>
                </div>
                <div className="businessCard">
                    <div className="region">大陸聯絡方式（華南區）</div>
                    <div className="company">廣州雙城電子有限公司</div>
                    <div className="name">姓名：汤文欣</div>
                    <div className="phone">電話：15800268922</div>
                    <div className="email">E-Mail：tongzai1023@163.com</div>
                </div>
            </div>
            <div className="blankBanner" />
            <div className="blankBanner" />
        </div>
    );
}