"use client";

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./component.css";

const slides = [
    {
        image: "/assets/photos/san-pablo-island.jpg",
        title: "Discover Southern Leyte",
        caption: "Embark on a journey through breathtaking landscapes and rich history."
    },
    {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        title: "Adventure Awaits",
        caption: "From scenic spots to thrilling experiences, explore the best of Southern Leyte."
    },
    {
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        title: "Southern Leyte's Hidden Paradise",
        caption: "Discover the untouched beauty of Southern Leyte, from its serene beaches to vibrant marine life."
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
