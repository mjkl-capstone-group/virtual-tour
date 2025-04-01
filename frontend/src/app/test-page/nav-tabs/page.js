<section id="destinations">
    <div className="container py-5">

        {/* Navigation Tabs */}
        <ul className={`${styles["nav-pills"]} nav mb-4`} id="destinationsTab" role="tablist" data-aos="fade-up" data-aos-delay="100">
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

                        {/* Silago Beach */}
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className={`${styles["destination-card"]}`}>
                                <Image src="/assets/photos/others/sample_image.jpg" width={600} height={400} className="img-fluid"
                                    alt="Silago Beach" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
                                <div className="p-3 bg-white">
                                    <h4>Silago Beach</h4>
                                    <p>Dive into the unspoiled beauty of Silago Beach</p>
                                    <Button />
                                </div>
                            </div>
                        </div>

                        {/* Tangkaan Beach */}
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div className={`${styles["destination-card"]}`}>
                                <Image src="/assets/photos/beaches/tangkaan.jpg" width={600} height={400} className="img-fluid"
                                    alt="Tangkaan Beach" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
                                <div className="p-3 bg-white">
                                    <h4>Tangkaan Beach</h4>
                                    <p>White sand beach with stunning sunset views</p>
                                    <Button />
                                </div>
                            </div>
                        </div>

                        {/* Bitoon Beach */}
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div className={`${styles["destination-card"]}`}>
                                <Image src="/assets/photos/beaches/bitoon.jpg" width={600} height={400} className="img-fluid"
                                    alt="Bitoon Beach" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
                                <div className="p-3 bg-white">
                                    <h4>Bitoon Beach</h4>
                                    <p>Secluded paradise with crystal-clear waters</p>
                                    <Button />
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