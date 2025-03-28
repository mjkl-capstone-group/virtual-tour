"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import destinationsData from "@/components/destinationList";
import styles from "./destination.module.css";

export default function DestinationComponent() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [locationFilters, setLocationFilters] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

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

    // Toggle category filters
    const toggleFilter = (filter) => {
        setSelectedFilters((prevFilters) =>
            prevFilters.includes(filter)
                ? prevFilters.filter((f) => f !== filter)
                : [...prevFilters, filter]
        );
    };

    // Toggle location filters
    const toggleLocationFilter = (location) => {
        setLocationFilters((prevLocations) =>
            prevLocations.includes(location)
                ? prevLocations.filter((loc) => loc !== location)
                : [...prevLocations, location]
        );
    };

    // Remove selected category filter
    const removeFilter = (filter) => {
        setSelectedFilters((prevFilters) => prevFilters.filter((f) => f !== filter));
    };

    // Remove selected location filter
    const removeLocationFilter = (location) => {
        setLocationFilters((prevLocations) => prevLocations.filter((loc) => loc !== location));
    };

    // Get category and location data from destinations
    const categories = Object.keys(destinationsData);
    const locations = [...new Set(categories.flatMap((category) => destinationsData[category].map((dest) => dest.location)))];

    const allDestinations = categories.flatMap((category) =>
        destinationsData[category].map((destination) => ({
            ...destination,
            category,
        }))
    );

    // Apply filters to destinations
    const filteredDestinations = allDestinations.filter((destination) => {
        const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedFilters.length === 0 || selectedFilters.includes(destination.category);
        const matchesLocation = locationFilters.length === 0 || locationFilters.includes(destination.location);
        return matchesSearch && matchesCategory && matchesLocation;
    });

    return (
        <section className="py-5" id="destinations">
            <div className="container">
                <h2 className={`${styles["destination-title"]} text-center mb-4`} data-aos="fade-up">
                    <strong>Destinations</strong>
                </h2>

                {/* Search input and filter toggle button */}
                <div className="mb-3 d-flex align-items-center position-relative mt-5" style={{ maxWidth: "450px" }}>
                    <i className="fa-solid fa-magnifying-glass position-absolute start-0 ps-3 text-muted"></i>
                    <input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Search Destination..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button
                            type="button"
                            className="btn position-absolute end-0 me-5"
                            onClick={() => setSearchTerm("")}
                            style={{ border: "none", background: "transparent" }}
                        >
                            <i className="fa-solid fa-xmark text-muted"></i>
                        </button>
                    )}
                    <button className="btn btn-outline-secondary ms-2" onClick={() => setShowFilters(!showFilters)}>
                        <i className="fa-solid fa-filter"></i>
                    </button>
                </div>

                {/* Filter dropdown panel */}
                {showFilters && (
                    <div
                        className="mb-4 p-3 border rounded position-absolute bg-white shadow-lg"
                        style={{
                            zIndex: 1,
                            width: "300px",
                            marginLeft: innerWidth < 576 ? "110px" : "270px",
                        }}
                    >
                        <h5>Filter by Category</h5>
                        <div className="mb-2 d-flex flex-wrap">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`btn btn-sm btn-outline-primary me-2 mb-2 ${selectedFilters.includes(category) ? "active" : ""}`}
                                    onClick={() => toggleFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <h5>Filter by Location</h5>
                        <div className="d-flex flex-wrap">
                            {locations.map((location) => (
                                <button
                                    key={location}
                                    className={`btn btn-sm btn-outline-success me-2 mb-2 ${locationFilters.includes(location) ? "active" : ""}`}
                                    onClick={() => toggleLocationFilter(location)}
                                >
                                    {location}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/*Card*/}
                <div className="row mt-4">
                    {filteredDestinations.map((destination, index) => (
                        <div key={index} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className={`${styles["destination-card"]}`} onClick={() => router.push(destination.filepath)} style={{ cursor: "pointer" }}>
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
                                    <span className={`badge absolute rounded-pill px-3 py-2 ${styles.badgeTitle}`} >{destination.type}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {filteredDestinations.length === 0 && <p className="text-center" style={{ marginTop: "100px", marginBottom: "100px" }}>No destinations found.</p>}
            </div>
        </section>
    );
}
