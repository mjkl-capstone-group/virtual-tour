"use client";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "./page.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  const router = useRouter();

  const navigateToSogodBay = () => {
    router.push('/vr-screens/sogod-bay/');
  };

  const navigateToTest = () => {
    router.push('/test-page/');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 150,
    });
  }, []);

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section
        className="hero-section"
        id="home"
        data-aos="fade-up"
      >
        <div className="container text-white text-center">
          <h1 className="display-5 mb-3 strong"><strong>Explore Southern Leyte's Hidden Paradise</strong></h1>
          <p className="lead-6 mb-4">
            Virtual tours of pristine beaches, majestic islands, and rich marine life
          </p>
          <a onClick={navigateToTest}
            className="btn btn-primary btn-lg px-5"
            style={{ cursor: 'pointer' }}
          >
            Start Exploring
          </a>
        </div>
      </section >

      {/* Featured Destinations 
      Future updates in this section will include a carousel for the featured destinations section and 
      the selected destination will base on the user's choice or user's rating. There should only be 3-5
      featured destinations in the carousel for each category.
      */}
      < section className="py-5" id="destinations" >
        <div className="container py-5">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            <strong>Featured Destinations</strong>
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
                            <button className="btn" style={{ color: 'white', background: 'black' }} onClick={navigateToSogodBay}>Virtual Tour</button>
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
      </section >

      {/* Why Choose Us Section */}
      < section className="py-5 bg-light" id="about" >
        <div className="container py-5">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            <strong> Why Choose Us </strong>
          </h2>

          <div className="row g-4 text-center">
            {/* Local Expertise */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <i className="fas fa-map-marked-alt feature-icon mb-3"></i>
              <h4>Local Expertise</h4>
              <p>Guided by Southern Leyte natives with deep cultural knowledge</p>
            </div>

            {/* 360° Experience */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-vr-cardboard feature-icon mb-3"></i>
              <h4>360° Experience</h4>
              <p>Immersive virtual tours of our province's best spots</p>
            </div>

            {/* Marine Conservation */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-fish feature-icon mb-3"></i>
              <h4>Marine Conservation</h4>
              <p>Supporting local conservation efforts</p>
            </div>
          </div>
        </div>
      </section >

      {/* Footer Section */}
      <div data-aos="fade-up" data-aos-delay='100'>
        < Footer />
      </div>
    </>
  );
}
