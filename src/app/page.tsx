'use client';
import "./page.css";
import { AdContext } from "@/src/context/Ads";
import { ProductContext } from "@/src/context/Products";
import useAds from "../hooks/useAds";
import useProducts from "../hooks/useProducts";

import { useEffect, useContext, useState } from "react";
import Head from "next/head";
import BootstrapCarousel from "../components/bootstrap_carousel";

export default function Home() {
    const { getAds } = useAds();
    const { getProducts } = useProducts();
    const { ads } = useContext(AdContext);
    const { products } = useContext(ProductContext);
    const [ adsList, setAdsList ] = useState<AdContext[]>([]);
    const [ productsList, setProductsList ] = useState<ProductContext[]>([]);

    useEffect(() => {
        const fetchAdsList = async () => {
            const adsListInit = await getAds();
            const adsListJSON: AdContext[] = adsListInit["ads"];
            setAdsList(adsListJSON);
        }
        const fetchProductsList = async () => {
            const productsListInit = await getProducts();
            const productsListJSON: ProductContext[] = productsListInit["products"];
            setProductsList(productsListJSON);
        }
        fetchAdsList();
        fetchProductsList();
    }, []);

    // console.log("adList: ", adsList);
    // console.log("productList: ", productsList);

    return (
        <div className="container prevent-select">
            <BootstrapCarousel />

            <div className="blankBanner" />
            <div className="editCarousel">
                <div className="entity">
                    <img className="carouselImg" src="https://picsum.photos/400/200?random=1" alt="1" />
                    <img className="deleteBtn" src="./img/closeIcon.png" alt="delete" />
                </div>
                <div className="entity">
                    <img className="carouselImg" src="https://picsum.photos/400/200?random=2" alt="2" />
                    <img className="deleteBtn" src="./img/closeIcon.png" alt="delete" />
                </div>
                <div className="entity">
                    <img className="carouselImg" src="https://picsum.photos/400/200?random=3" alt="3" />
                    <img className="deleteBtn" src="./img/closeIcon.png" alt="delete" />
                </div>
                <div className="entity">
                    <img className="carouselImg" src="https://picsum.photos/400/200?random=4" alt="4" />
                    <img className="deleteBtn" src="./img/closeIcon.png" alt="delete" />
                </div>
                <div className="entity">
                    <img className="carouselImg" src="https://picsum.photos/400/200?random=5" alt="5" />
                    <img className="deleteBtn" src="./img/closeIcon.png" alt="delete" />
                </div>
            </div>

            <div className="blankBanner" />

            <div className="content origin">
                <h1>公司簡介</h1>
                <div className="imgWithText">
                    <img src="https://picsum.photos/400?random=4" alt="companyIntro" />
                    <div>
                        <p>洲通能源承測試設備業界知名廠商-佳優科技技術及團隊，於2023年正式成立，2024年正式合併、由洲通能源將設備業務擴展至東南亞及歐美，於這期間產品效能及技術服務深得國內外客戶肯定及支持。</p>
                        <p>近年聽取品牌客戶、系統廠、高等教育學校及研究機構對其需求建議，開發符合客戶期待高效、高精確度及成本效益之自動化測試設備及監控系統，客戶滿意是我們自始至終目標。</p>
                        <p>洲通能源開發產品皆為自有品牌、合作研發、生產製造與整合行銷，未來持續提供客戶對設備需求及更完善技術服務。</p>
                        <p>並提供完成行銷通路及良好售後服務滿足客戶因近期第三地生產困境</p>
                        <p>洲通自動化測試設備:</p>
                        <p className="listItems">
                            (1)BAT系列自動測試系統→可充放電電池組開發、效能活化、性能分類、電池組加工、電池組基板、、等。<br />
                            (2)DAS系列模組化自動化監控系統 →適合依客戶需求整合成自動化測試設備或自動化監控系統。<br />
                            (3)ATS多用途卡式設備。<br />
                            (4)協同開發&非標產品研發
                        </p>
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
                    <a href="/new_product">
                        <div className="addProduct">
                            <img src="./img/addIcon.png" alt="addProduct" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="blankBanner" />
            <div className="blankBanner" />
        </div >
    );
}