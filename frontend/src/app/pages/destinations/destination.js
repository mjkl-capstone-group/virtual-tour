"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DestinationComponent() {
    const router = useRouter();

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 150,
        });
    }, []);

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <>
            <Header />

            <section className="py-5" id="destinations">
                <div className="container">
                    <h2 className="section-title text-center mb-5" data-aos="fade-up">
                        <strong>Destinations</strong>
                    </h2>

                    <section id="destinations">
                        <div className="container py-5">
                            {/* Navigation Tabs */}
                            <ul className="nav nav-pills mb-4" id="destinationsTab" role="tablist" data-aos="fade-up" data-aos-delay="100">
                                {[
                                    { id: "beaches", label: "Beaches" },
                                    { id: "islands", label: "Islands" },
                                    { id: "historical", label: "Historical Sites" },
                                    { id: "hotel", label: "Hotels" },
                                    { id: "restaurant", label: "Restaurants" }
                                ].map((category, index) => (
                                    <li className="nav-item" key={category.id} role="presentation">
                                        <button
                                            className={`nav-link ${index === 0 ? "active" : ""}`}
                                            id={`${category.id}-tab`}
                                            data-bs-toggle="tab"
                                            data-bs-target={`#${category.id}`}
                                            type="button"
                                            role="tab"
                                            aria-controls={category.id}
                                            aria-selected={index === 0 ? "true" : "false"}
                                        >
                                            {category.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* Tab Content */}
                            <div className="tab-content" id="destinationsTabContent">

                                {/* Beaches Tab */}
                                <div className="tab-pane fade show active" id="beaches" role="tabpanel" aria-labelledby="beaches-tab">
                                    <section className="">
                                        <div className="row g-4">

                                            {/* Sogod Bay */}
                                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                                                <div className="destination-card">
                                                    <Image src="/assets/photos/sogod-bay.jpg" width={600} height={400} className="img-fluid"
                                                        alt="Sogod Bay" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
                                                    <div className="p-3 bg-white">
                                                        <h4>Sogod Bay</h4>
                                                        <p>Dive into the whale shark capital of Southern Leyte</p>
                                                        <button className="btn" style={{ color: 'white', background: 'black' }} onClick={() => navigateTo()}>Virtual Tour</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Tangkaan Beach */}
                                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                                                <div className="destination-card">
                                                    <Image src="/assets/photos/tangkaan.jpg" width={600} height={400} className="img-fluid"
                                                        alt="Tangkaan Beach" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
                                                    <div className="p-3 bg-white">
                                                        <h4>Tangkaan Beach</h4>
                                                        <p>White sand beach with stunning sunset views</p>
                                                        <button className="btn" style={{ color: 'white', background: 'black' }} onClick={() => navigateToSample()}>Virtual Tour</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bitoon Beach */}
                                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                                                <div className="destination-card">
                                                    <Image src="/assets/photos/bitoon.jpg" width={600} height={400} className="img-fluid"
                                                        alt="Bitoon Beach" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
                                                    <div className="p-3 bg-white">
                                                        <h4>Bitoon Beach</h4>
                                                        <p>Secluded paradise with crystal-clear waters</p>
                                                        <button className="btn" style={{ color: 'white', background: 'black' }} onClick={() => navigateToSample()}>Virtual Tour</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                {/* Islands Tab */}
                                <div className="tab-pane fade" id="islands" role="tabpanel" aria-labelledby="islands-tab">
                                    <section className="py-5">
                                        <div className="container py-5">
                                            <div className="row g-4">
                                                <h1>Islands here lods</h1>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                {/* Historical Sites Tab */}
                                <div className="tab-pane fade" id="historical" role="tabpanel" aria-labelledby="historical-tab">
                                    <section className="py-5">
                                        <div className="container py-5">
                                            <div className="row g-4">
                                                <h1>Historical sites here lods</h1>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                {/* Hotels Tab */}
                                <div className="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="hotel-tab">
                                    <section className="py-5">
                                        <div className="container py-5">
                                            <div className="row g-4">
                                                <h1>Hotels here lods</h1>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                {/* Restaurants Tab */}
                                <div className="tab-pane fade" id="restaurant" role="tabpanel" aria-labelledby="restaurant-tab">
                                    <section className="py-5">
                                        <div className="container py-5">
                                            <div className="row g-4">
                                                <h1>Restaurants here lods</h1>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </section>

            <Footer />
        </>
    );
}
