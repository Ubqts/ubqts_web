'use client';
import "./page.css";
import { AdContext, Ad } from "@/src/context/Ads";
import { ProductContext, Product } from "@/src/context/Products";
import useAds from "@/src/hooks/useAds";
import useProducts from "@/src/hooks/useProducts";
// import BootstrapCarousel from "../components/bootstrap_carousel";
import CarouselItem from "@/src/components/carousel_item";
import ProductItem from "@/src/components/product_item";
import NewAdsDialog from "@/src/components/NewAdsDialog";
import CompanyIntro from "@/public/img/companyIntro.png";

import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/src/i18n/client";
import { useSession } from "next-auth/react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import addIcon from "@/public/img/addIcon.png";

type HomeProps = { params: { lng: string } };

export default function Home({ params: { lng } }: HomeProps) {
    const router = useRouter();
    const { t } = useTranslation(lng, "home");
    const { data: session } = useSession();

    const { getAds } = useAds();
    const { getProducts } = useProducts();
    const { ads } = useContext(AdContext);
    const { products } = useContext(ProductContext);
    const [adsList, setAdsList] = useState<Ad[]>([]);
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [showNewAdsDialog, setShowNewAdsDialog] = useState(false);
    const [index, setIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

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
    }, []);

    const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        // Do nothing if hovered
        if (hovered) return;

        const adsListWithCorrectLanguage = adsList.filter((item) => item.language.match(lng));

        const intervalId = setInterval(() => {
            if (adsListWithCorrectLanguage.length > 0) {
                console.log("index", index);
                console.log("adsListWithCorrectLanguage.length", adsListWithCorrectLanguage.length);
                if (index < adsListWithCorrectLanguage.length - 1) {
                    setIndex(index + 1);
                } else {
                    setIndex(0);
                }
            }
        }, 4000);

        return () => clearInterval(intervalId);
    }, [index, adsList, hovered]);

    return (
        <div className="container prevent-select">
            {/* <BootstrapCarousel /> */}

            <Carousel activeIndex={index} onSelect={handleSelect} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {session?.user.role === "admin" ? (
                    adsList.map((item) => (
                        <Carousel.Item key={item.id}>
                            <img src={item.picture} alt="slides" width={"100%"} style={{ objectFit: "cover", height: "50vw", maxHeight: "70vh" }} />
                            {/* <Carousel.Caption /> */}
                        </Carousel.Item>
                    ))) : (
                    adsList.filter((item) => (item.language.match(lng))).map((item) => (
                        <Carousel.Item key={item.id}>
                            <img src={item.picture} alt="slides" width={"100%"} style={{ objectFit: "cover", height: "50vw", maxHeight: "70vh" }} />
                            {/* <Carousel.Caption /> */}
                        </Carousel.Item>
                    )))}
            </Carousel>

            <div className="blankBanner" />
            {session?.user.role === "admin" && <div className="editCarousel">
                {adsList.map((ads) => (
                    <React.Fragment key={ads.id}>
                        <CarouselItem id={ads.id} picture={ads.picture} />
                    </React.Fragment>
                ))}
                <div className="addCarousel" onClick={() => setShowNewAdsDialog(true)}>
                    <img src={addIcon.src} alt="addCarousel" />
                </div>
            </div>}

            <div className="blankBanner" />
            <iframe
                width="560"
                height="315"
                loading="lazy"
                src="https://www.youtube.com/embed/iFYTCgEWPdk?si=vhBqX-pQkcGL5atx&amp;clip=UgkxUMnjTpA-Oe4Vxj_K7iEgZUxRyJcc43AT&amp;clipt=ELiUARiA9AM&amp;loop=1&amp;autoplay=1&amp;mute=1"
                title="YouTube video player"
                style={{ border: 'none', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            <p style={{ paddingTop: "10px" }}>{t("source")}<a href="https://www.fivebikes.it/" target="_blank" rel="noopener noreferrer">https://www.fivebikes.it/</a></p>


            <div className="blankBanner" />
            <div className="blankBanner" />

            <div className="content origin">
                <h1>{t("company-introduction-title")}</h1>

                <div className="imgWithText">
                    <img src={CompanyIntro.src} alt="companyIntro" />
                    <div>
                        <p>{t("company-introduction-content_1")}</p>
                        <p>
                            {t("company-introduction-content_2")}<br />
                            {t("company-introduction-content_3")}<br />
                            {t("company-introduction-content_4")}<br />
                            {t("company-introduction-content_5")}<br />
                            {t("company-introduction-content_6")}<br />
                            {t("company-introduction-content_7")}
                        </p>
                        <p style={{ fontSize: "smaller" }}>{t("company-introduction-content_8")}</p>
                    </div>
                </div>
            </div>

            <div className="blankBanner" />

            <div className="content">
                <h1><a className="introLink" href="/product_page">{t("product-introduction-title")}</a></h1>
                <div className="productTable">
                    {session?.user.role === "admin" ? (
                        productsList.map((product) => (
                            <React.Fragment key={product.id}>
                                <ProductItem id={product.id} picture={product.picture} name={product.name} lng={lng} />
                            </React.Fragment>
                        ))) : (
                        productsList.filter((product) => (product.language.match(lng))).map((product) => (
                            <React.Fragment key={product.id}>
                                <ProductItem id={product.id} picture={product.picture} name={product.name} lng={lng} />
                            </React.Fragment>
                        )))}
                    {session?.user.role === "admin" && (
                        <a href="/new_product">
                            <div className="addProduct">
                                {/* <img src={addIcon.src} alt="addProduct" onClick={() => { router.push(`${lng}/new_product`) }} /> */}
                                <img src={addIcon.src} alt="addProduct" onClick={() => { window.location.href = `${lng}/new_product` }} />
                            </div>
                        </a>
                    )}
                </div>
            </div>

            <div className="blankBanner" />
            <div className="blankBanner" />

            <NewAdsDialog open={showNewAdsDialog} onClose={() => setShowNewAdsDialog(false)} />
        </div >
    );
}
