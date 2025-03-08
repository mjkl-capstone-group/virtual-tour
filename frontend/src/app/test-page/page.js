"use client";

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./page.css";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272",
        title: "Discover Southern Leyte",
        caption: "Embark on a journey through breathtaking landscapes and rich history."
    },
    {
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        title: "Adventure Awaits",
        caption: "From scenic spots to thrilling experiences, explore the best of Southern Leyte."
    },
    {
        image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
        title: "A Hidden Gem",
        caption: "Uncover pristine beaches, lush mountains, and diverse marine life in this tropical paradise."
    }
];

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
                {slides.map((slide, idx) => (
                    <Carousel.Item key={idx}>
                        <img className="carousel-image" src={slide.image} alt={slide.title} />
                        <Carousel.Caption className="mb-3">
                            <h3>{slide.title}</h3>
                            <p>{slide.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default ControlledCarousel;
