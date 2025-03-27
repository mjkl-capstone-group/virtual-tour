"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import destinationsData from "@/components/destinationList";
import "./page.css";

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

    // Get all destinations
    const categories = Object.keys(destinationsData);
    const allDestinations = categories.flatMap((category) =>
        destinationsData[category].map((destination) => ({
            ...destination,
            category,
        }))
    );

    return (
        <section className="py-5" id="destinations">
            <div className="container">
                <h2 className="destination-title text-center mb-4" data-aos="fade-up">
                    <strong>Destinations</strong>
                </h2>

                {/* Destination Cards */}
                <div className="row mt-4">
                    {allDestinations.map((destination, index) => (
                        <div key={index} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="destination-card" onClick={() => router.push(destination.filepath)} style={{ cursor: "pointer" }}>
                                <Image
                                    src={destination.image}
                                    width={600}
                                    height={400}
                                    className="img-fluid"
                                    alt={destination.name}
                                    style={{ objectFit: "cover", height: "200px", width: "100%" }}
                                />
                                <div className="p-4 bg-white shadow-sm rounded border">
                                    <h4 className="fw-semibold mb-2">{destination.name}</h4>
                                    <p className="text-muted small mb-2">
                                        <i className="bi bi-geo-alt-fill me-1"></i> {destination.location}
                                    </p>
                                    <p className="text-secondary mb-3">{destination.description}</p>
                                    <span className="badge absolute rounded-pill px-3 py-2">{destination.type}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
