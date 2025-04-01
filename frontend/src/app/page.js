"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero"
import { Button, DestinationsButton } from "@/components/ui/button";
import Link from "next/link";

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
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="accent-bar mb-3" style={{ color: '#1a446c', fontWeight: 'bold', fontSize: '18px' }}>
                <span>How to Use the Virtual Tour</span>
              </div>
              <h3 className="fw-bold">Embark on a Journey with Our Virtual Tours</h3>
              <p className="mb-4">Follow these simple steps to explore Southern Leyte’s stunning locations from the comfort of your home.</p>
              <div className="row">
                <div className="col-6">
                  <div className="card bg-transparent border-0">
                    <div className="card-body">
                      <i className="fas fa-vr-cardboard fa-2x mb-3"></i>
                      <h5 className="card-title">Enter Virtual Tour</h5>
                      <p className="card-text">Press the “Virtual Tour” button to enter the 360° experience.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent border-0">
                    <div className="card-body">
                      <i className="fas fa-mouse-pointer fa-2x mb-3"></i>
                      <h5 className="card-title">Navigate</h5>
                      <p className="card-text">Use your mouse or touchscreen to navigate around the location.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="card bg-transparent border-0">
                    <div className="card-body">
                      <i className="fas fa-search-plus fa-2x mb-3"></i>
                      <h5 className="card-title">Zoom</h5>
                      <p className="card-text">Zoom in and out for a closer look at scenic views.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent border-0">
                    <div className="card-body">
                      <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
                      <h5 className="card-title">Hotspots</h5>
                      <p className="card-text">Click on hotspots to view more information and switch locations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <Image
                src="/assets/photos/others/virtualtour.gif"
                alt="Virtual Tour Tutorial"
                className="img-fluid w-100 h-75 my-auto object-fit-contain"
                width={500}
                height={500}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Featured Destinations Section  */}
      <section className="py-5" id="featured-destinations">
        <div className="container py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 d-flex gap-3">
                <div
                  className={`card p-4 shadow-lg border-0 rounded-3 text-center flex-fill mt-3 ${styles.cardHover}`}
                  style={{
                    height: "300px",
                    backgroundImage: "url('/assets/photos/others/tangkaan-card.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50vh",
                  }}
                >
                  <h5 className="fw-bold">Tangkaan Beach</h5>
                </div>

                <div
                  className={`card p-4 shadow-lg border-0 rounded-3 text-center flex-fill ${styles.cardHover}`}
                  style={{
                    height: "350px",
                    backgroundImage: "url('/assets/photos/others/agas-card.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50vh",
                  }}
                >
                  <h5 className="fw-bold">Agas-agas Bridge</h5>
                </div>

                <div
                  className={`card p-4 shadow-lg border-0 rounded-3 text-center flex-fill mt-3 ${styles.cardHover}`}
                  style={{
                    height: "300px",
                    backgroundImage: "url('/assets/photos/others/limasawa-card.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50vh",
                  }}
                >
                  <h5 className="fw-bold">Limasawa Island</h5>
                </div>
              </div>

              <div className="col-md-4 d-flex flex-column justify-content-center p-4">
                <span className="text-uppercase text-primary fw-bold">Explore Our Featured Destinations</span>
                <h2 className="fw-bold mt-2">Discover Breathtaking Locations</h2>
                <p className="text-muted mt-3">
                  Immerse yourself in stunning landscapes and unique experiences. Start your journey to unforgettable destinations today.
                </p>
                <div className="d-grid gap-2 col-6">
                  <Link className="btn btn-dark" href="/destination">Destination</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light" id="about">
        <div className="container py-5">
          <h2 className={`${styles["section-title"]} text-center mb-5`} data-aos="fade-up">
            <strong> Why Choose Us </strong>
          </h2>
          <div className="row g-4 text-center mt-1 d-flex flex-wrap justify-content-center">
            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
              <i className={`fas fa-map-marked-alt mb-3 bg p-3 rounded-4 ${styles["feature-icon"]}`}></i>
              <h4>Local Expertise</h4>
              <p>Guided by Southern Leyte natives with deep cultural knowledge</p>
            </div>

            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
              <i className={`fas fa-panorama mb-3 bg p-3 rounded-4 ${styles["feature-icon"]}`}></i>
              <h4>360° Experience</h4>
              <p>Immersive virtual tours of our province's best spots</p>
            </div>

            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up" data-aos-delay="300">
              <i className={`fas fa-fish mb-3 bg p-3 rounded-4 ${styles["feature-icon"]}`}></i>
              <h4>Marine Conservation</h4>
              <p>Supporting local conservation efforts</p>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card shadow-sm border-0 rounded-3 d-flex flex-row"
                style={{ backgroundColor: 'var(--primary-color)' }}
              >
                <div className="card-body d-flex flex-column justify-content-center p-5">
                  <h1 className="card-title text-white fw-bold mb-4">Explore Southern Leyte</h1>
                  <p className="card-text text-white mb-4">
                    Discover hidden gems and immerse yourself in the rich culture and nature of Southern Leyte. Join our virtual tour and explore!
                  </p>
                  <div className="d-grid col-6 mt-3">
                    <Link href="/test-page/slider" className="btn btn-light">
                      Discover
                    </Link>
                  </div>
                </div>
                <div className="w-50 position-relative">
                  <Image src="/assets/photos/others/choose.jpg"
                    className="card-img-top mh-100"
                    alt="Explore Southern Leyte"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Community Section */}
      <section className="py-5" id="community" data-aos="fade-up">
        <div className="container py-5 text-center">
          <h2 className={`${styles["section-title"]} mb-3`} data-aos="fade-up">
            <strong>Join the Discussion in Our Forums</strong>
          </h2>
          <p className="text-muted mb-5" data-aos="fade-up">
            Engage with fellow travelers, explorers, and locals who share a passion for Southern Leyte.
          </p>

          <div className="row g-4 mt-1 d-flex flex-wrap text-center justify-content-center">
            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
              <h4 className="fw-semibold">Share Your Experience</h4>
              <p className="text-muted">Upload your own travel stories and tips to inspire others.</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
              <h4 className="fw-semibold">Rate and Recommend</h4>
              <p className="text-muted">Help others find the best places by rating and reviewing destinations.</p>
            </div>
            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up" data-aos-delay="300">
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
              <button className="btn mt-3 px-4 rounded-pill" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>Post Comment</button>
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
