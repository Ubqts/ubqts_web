'use client';
import "./page.css";
import { AdContext, Ad } from "@/src/context/Ads";
import { ProductContext, Product } from "@/src/context/Products";
import useAds from "../../hooks/useAds";
import useProducts from "../../hooks/useProducts";
// import BootstrapCarousel from "../components/bootstrap_carousel";
import CarouselItem from "../../components/carousel_item";
import ProductItem from "../../components/product_item";

import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/src/i18n/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import addIcon from "@/public/img/addIcon.png";

type HomeProps = { params: { lng: string } };

export default function Home({ params: { lng } }: HomeProps) {
    const router = useRouter();
    const { t } = useTranslation(lng , "home");
    const { getAds, postAds } = useAds();
    const { getProducts } = useProducts();
    const { ads } = useContext(AdContext);
    const { products } = useContext(ProductContext);
    const [ adsList, setAdsList ] = useState<Ad[]>([]);
    const [ productsList, setProductsList ] = useState<Product[]>([]);
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        const fetchAdsList = async () => {
            const adsListInit = await getAds();
            const adsListJSON: Ad[] = adsListInit["ads"];
            setAdsList(adsListJSON);
        }
        const fetchProductsList = async () => {
            const productsListInit = await getProducts();
            const productsListJSON: Product[] = productsListInit["products"];
            setProductsList(productsListJSON);
        }
        fetchAdsList();
        fetchProductsList();
    }, [getAds, getProducts]);

    const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };

    const handleAddAds = () => {
        const newImg = prompt("請輸入新圖片網址");
        if (newImg) {
            try {
                postAds({ picture: newImg, language: 'zh-tw' });
                alert("新增廣告成功！");
                location.reload();
            } catch (error) {
                alert("新增廣告失敗！");
                console.log("error: ", error);
            }
        }
    };

    // console.log("lng: \"", lng, "\"");

    return (
        <div className="container prevent-select">
            {/* <BootstrapCarousel /> */}

            <Carousel activeIndex={index} onSelect={handleSelect}>
                {adsList.map((item) => (
                    <Carousel.Item key={item.id} interval={4000}>
                        <img src={item.picture} alt="slides" width={"100%"} style={{ objectFit: "cover", height: "50vw", maxHeight: "90vh" }} />
                        {/* <Carousel.Caption /> */}
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="blankBanner" />
            <div className="editCarousel">
                {adsList.map((ads) => (
                    <React.Fragment key={ads.id}>
                        <CarouselItem id={ads.id} picture={ads.picture} />
                    </React.Fragment>
                ))}
                <div className="addCarousel" onClick={() => handleAddAds()}>
                    <img src={addIcon.src} alt="addCarousel" />
                </div>
            </div>

            <div className="blankBanner" />

            <div className="content origin">
                <h1>{t("company-introduction-title")}</h1>
                <div className="imgWithText">
                    <img src="https://picsum.photos/400?random=4" alt="companyIntro" />
                    <div>
                        <p>{t("company-introduction-content_1")}</p>
                        <p>{t("company-introduction-content_2")}</p>
                        <p>{t("company-introduction-content_3")}</p>
                        <p>{t("company-introduction-content_4")}</p>
                        <p>{t("company-introduction-content_5")}</p>
                        <p>
                            {t("company-introduction-content_6")}<br />
                            {t("company-introduction-content_7")}<br />
                            {t("company-introduction-content_8")}<br />
                            {t("company-introduction-content_9")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="blankBanner" />

            <div className="content">
                <h1>{t("product-introduction-title")}</h1>
                <div className="productTable">
                    {productsList.map((product) => (
                        <React.Fragment key={product.id}>
                            <ProductItem id={product.id} picture={product.picture} name={product.name} />
                        </React.Fragment>
                    ))}
                    <a href="/new_product">
                        <div className="addProduct">
                            <img src={addIcon.src} alt="addProduct" onClick={() => { router.push(`${lng}/new_product`) }} />
                        </div>
                    </a>
                </div>
            </div>

            <div className="blankBanner" />
            <div className="blankBanner" />
        </div >
    );
}