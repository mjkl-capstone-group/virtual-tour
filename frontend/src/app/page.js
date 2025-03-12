"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "./page.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero"

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
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
      <section className="hero-section" data-aos="fade-up">
        <Hero />
      </section >

      {/* How to Use the Virtual Tour Section */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title section-title-center mb-4">
            <strong>How to Use the Virtual Tour</strong>
          </h2>
          <p className="text-center mb-4">
            Follow these simple steps to explore Southern Leyte’s stunning locations from the comfort of your home.
          </p>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <ul className="list-unstyled fs-5">
                <li><strong>1.</strong> On the <strong>Featured Destinations</strong> section.</li>
                <li><strong>2.</strong> Press the <strong>“Virtual Tour”</strong> button to enter the 360° experience.</li>
                <li><strong>3.</strong> Use your <strong>mouse or touchscreen</strong> to navigate around the location.</li>
                <li><strong>4.</strong> Zoom in and out for a <strong>closer look</strong> at scenic views.</li>
                <li><strong>5.</strong> Click on <strong>hotspots</strong> to view more information and switch locations.</li>
                <li><strong>6.</strong> Enjoy exploring <strong>Southern Leyte’s breathtaking spots!</strong></li>
              </ul>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="/assets/photos/virtualtour.gif"
                alt="Virtual Tour Tutorial"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

          </div>
        </div>
      </section>


      {/* Featured Destinations 
      Future updates in this section will include a carousel for the featured destinations section and 
      the selected destination will base on the user's choice or user's rating. There should only be 3-5
      featured destinations in the carousel for each category.
      */}
      <section className="py-5" id="destinations">
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

                      {/* Silago Beach */}
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="destination-card">
                          <Image src="/assets/photos/sogod-bay.jpg" width={600} height={400} className="img-fluid"
                            alt="Silago Beach" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
                          <div className="p-3 bg-white">
                            <h4>Silago Beach</h4>
                            <p>Dive into the unspoiled beauty of Silago Beach</p>
                            <button className="btn" style={{ color: 'white', background: 'black' }} onClick={() => navigateTo('/screens/beach/silago-beach')}>Virtual Tour</button>
                          </div>
                        </div>
                      </div>

                      {/* Tangkaan Beach */}
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="destination-card">
                          <Image src="/assets/photos/beaches/tangkaan.jpg" width={600} height={400} className="img-fluid"
                            alt="Tangkaan Beach" style={{ objectFit: "cover", height: "200px", width: "100%" }} />
                          <div className="p-3 bg-white">
                            <h4>Tangkaan Beach</h4>
                            <p>White sand beach with stunning sunset views</p>
                            <button className="btn" style={{ color: 'white', background: 'black' }} onClick={() => navigateTo('/screens/beach/tangkaan-beach/')}>Virtual Tour</button>
                          </div>
                        </div>
                      </div>

                      {/* Bitoon Beach */}
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="destination-card">
                          <Image src="/assets/photos/beaches/bitoon.jpg" width={600} height={400} className="img-fluid"
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
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <i className="fas fa-map-marked-alt feature-icon mb-3"></i>
              <h4>Local Expertise</h4>
              <p>Guided by Southern Leyte natives with deep cultural knowledge</p>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-vr-cardboard feature-icon mb-3"></i>
              <h4>360° Experience</h4>
              <p>Immersive virtual tours of our province's best spots</p>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-fish feature-icon mb-3"></i>
              <h4>Marine Conservation</h4>
              <p>Supporting local conservation efforts</p>
            </div>
          </div>
        </div>
      </section >

      {/* Community Section */}
      <section className="py-5" id="community" data-aos="fade-up">
        <div className="container py-5 text-center">
          <h2 className="section-title mb-3" data-aos="fade-up">
            <strong>Join the Discussion in Our Forums</strong>
          </h2>
          <p className="text-muted mb-5" data-aos="fade-up">
            Engage with fellow travelers, explorers, and locals who share a passion for Southern Leyte.
          </p>

          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <h4 className="fw-semibold">Share Your Experience</h4>
              <p className="text-muted">Upload your own travel stories and tips to inspire others.</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <h4 className="fw-semibold">Rate and Recommend</h4>
              <p className="text-muted">Help others find the best places by rating and reviewing destinations.</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <h4 className="fw-semibold">Connect with Fellow Travelers</h4>
              <p className="text-muted">Join discussions and meet like-minded individuals in our forums.</p>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-5" data-aos="fade-up">
            <h3 className="fw-bold mb-3" >Community Comments</h3>
            <p className="text-muted mb-4">See what others are saying about their experiences in Southern Leyte.</p>

            {/* Comments List */}
            <div className="comments-container text-start mx-auto" style={{ maxWidth: "700px" }}>
              <div className="p-3 mb-3 rounded shadow-sm bg-light">
                <strong>Taro Sakamoto</strong>
                <p className="text-muted m-0">"I had an amazing time at Limasawa Island! Highly recommended."</p>
              </div>
              <div className="p-3 mb-3 rounded shadow-sm bg-light">
                <strong>Yoichi Nagumo</strong>
                <p className="text-muted m-0">"The virtual tour helped me plan my trip. Love it!"</p>
              </div>
              <div className="p-3 mb-3 rounded shadow-sm bg-light">
                <strong>Rion Akao</strong>
                <p className="text-muted m-0">"Great initiative! Hope to see more destinations soon."</p>
              </div>
            </div>

            {/* Add Comment Form */}
            <div className="mt-4 text-start mx-auto" style={{ maxWidth: "700px" }}>
              <h4 className="fw-semibold mb-2">Leave a Comment</h4>
              <textarea className="form-control rounded-3 p-3 border-light shadow-sm" rows="3" placeholder="Share your thoughts..."></textarea>
              <button className="btn btn-primary mt-3 px-4 rounded-pill">Post Comment</button>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" data-aos-delay='10'>
        < Footer />
      </div>
    </>
  );
}
