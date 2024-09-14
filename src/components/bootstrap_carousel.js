'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "../../public/Items.json";

import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function BootstrapCarousel() {
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {bootstrap.map((item) => (
                <Carousel.Item key={item.id} interval={4000}>
                    <img src={item.imageUrl} alt="slides" />
                    <Carousel.Caption />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}