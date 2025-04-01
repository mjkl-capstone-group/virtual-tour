"use client";

import React, { useState } from 'react';
import style from './slider.module.css';  // Assuming you have your styles in slider.module.css

const featuredItems = [
    { id: 1, title: 'Amazing Beach', description: 'Discover pristine beaches and crystal-clear waters.', image: '/assets/photos/others/sample_image.jpg', link: '/virtual-tour/amazing-beach' },
    { id: 2, title: 'Historic City', description: 'Explore the rich history and architecture of this ancient city.', image: '/assets/photos/others/sample_image.jpg', link: '/virtual-tour/historic-city' },
    { id: 3, title: 'Mountain Adventure', description: 'Embark on an exciting adventure through towering mountains.', image: 'assets/photos/others/san-pablo-island.jpg', link: '/virtual-tour/mountain-adventure' },
    { id: 4, title: 'Serene Garden', description: 'Unwind in the calm beauty of lush, green gardens.', image: 'assets/photos/others/sample_image.jpg', link: '/virtual-tour/serene-garden' },
];

const FeaturedSection = () => {
    // State to manage the current image, title, and description displayed
    const [currentItem, setCurrentItem] = useState(featuredItems[0]);

    const handleImageClick = (item) => {
        setCurrentItem(item); // Update the current item when a smaller image is clicked
    };

    return (
        <section className={`featured-section py-5 ${style.featuredSection}`}>
            <div className="container">
                <h2 className="text-center mb-4">Featured Destinations</h2>

                {/* Large Featured Item */}
                <div className="row mb-5">
                    <div className="col-lg-8">
                        <div className="card shadow-lg border-0 rounded-3">
                            <img src={currentItem.image} className="card-img-top" alt={currentItem.title} />
                            <div className="card-body">
                                <h5 className="card-title">{currentItem.title}</h5>
                                <p className="card-text">{currentItem.description}</p>
                                <a href={currentItem.link} className="btn btn-primary">Explore Now</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Smaller Cards (Clickable images) */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {featuredItems.slice(1).map((item) => (
                        <div key={item.id} className="col">
                            <div
                                className={`card shadow-sm border-0 rounded-3 ${style.clickableCard}`}
                                onClick={() => handleImageClick(item)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={item.image} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
