"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero"
import Link from "next/link";
import FixedButton from "@/components/ui/nereofinBtn";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  const router = useRouter();

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
      <section className="hero-section">
        <Hero />
      </section >

      {/* How to Use the Virtual Tour Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="accent-bar mb-3" style={{ color: '#1a446c', fontWeight: 'bold', fontSize: '18px' }}>
                <span data-aos="fade-right">How to Use the Virtual Tour</span>
              </div>
              <h2 className="fw-bold" data-aos="fade-right">Embark on a Journey with Our Virtual Tours</h2>
              <p className="mb-4" data-aos="fade-right">Follow these simple steps to explore Southern Leyte’s stunning locations from the comfort of your home.</p>
              <div className="row">
                <div className="col-6">
                  <div className="card bg-transparent border-0" data-aos="fade-up">
                    <div className="card-body">
                      <i className="fas fa-vr-cardboard fa-2x mb-3"></i>
                      <h5 className="card-title">Enter Virtual Tour</h5>
                      <p className="card-text">Press the “Virtual Tour” button to enter the 360° experience.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent border-0" data-aos="fade-up">
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
                  <div className="card bg-transparent border-0" data-aos="fade-up">
                    <div className="card-body">
                      <i className="fas fa-search-plus fa-2x mb-3"></i>
                      <h5 className="card-title">Zoom</h5>
                      <p className="card-text">Zoom in and out for a closer look at scenic views.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent border-0" data-aos="fade-up">
                    <div className="card-body">
                      <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
                      <h5 className="card-title">Hotspots</h5>
                      <p className="card-text">Click on hotspots to view more information and switch locations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center" data-aos="fade-up-left" data-aos-delay="50">
              <Image
                src="/assets/photos/virtualtour.gif"
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
                    backgroundImage: "url('/assets/photos/tangkaan-card.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50vh",
                  }}
                  data-aos="fade-right"
                  data-aos-delay="450"
                >
                  <h5 className="fw-bold">Tangkaan Beach</h5>
                </div>

                <div
                  className={`card p-4 shadow-lg border-0 rounded-3 text-center flex-fill ${styles.cardHover}`}
                  style={{
                    height: "350px",
                    backgroundImage: "url('/assets/photos/agas-card.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50vh",
                  }}
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h5 className="fw-bold">Agas-agas Bridge</h5>
                </div>

                <div
                  className={`card p-4 shadow-lg border-0 rounded-3 text-center flex-fill mt-3 ${styles.cardHover}`}
                  style={{
                    height: "300px",
                    backgroundImage: "url('/assets/photos/limasawa-card.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50vh",
                  }}
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  <h5 className="fw-bold">Limasawa Island</h5>
                </div>
              </div>

              <div className="col-md-4 d-flex flex-column justify-content-center p-4" data-aos="fade-left">
                <div className="accent-bar mb-3" style={{ color: '#1a446c', fontWeight: 'bold', fontSize: '18px' }}>
                  <span>Explore Unforgettable Gateways</span>
                </div>
                <h2 className="fw-bold">Discover Breathtaking Locations</h2>
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
            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up-right" data-aos-delay="100">
              <i className={`fas fa-map-marked-alt mb-3 bg p-3 rounded-4 ${styles["feature-icon"]}`}></i>
              <h4>Local Expertise</h4>
              <p>Guided by Southern Leyte natives with deep cultural knowledge</p>
            </div>

            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
              <i className={`fas fa-panorama mb-3 bg p-3 rounded-4 ${styles["feature-icon"]}`}></i>
              <h4>360° Experience</h4>
              <p>Immersive virtual tours of our province's best spots</p>
            </div>

            <div className="col-4 col-sm-4 col-md-4" data-aos="fade-up-left" data-aos-delay="300">
              <i className={`fas fa-fish mb-3 bg p-3 rounded-4 ${styles["feature-icon"]}`}></i>
              <h4>Marine Conservation</h4>
              <p>Supporting local conservation efforts</p>
            </div>
          </div>

          <div className="row justify-content-center mt-5" data-aos="fade-up">
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
                  <Image src="/assets/photos/choose.jpg"
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

      <FixedButton />

      <div data-aos="fade-up" data-aos-delay='10'>
        < Footer />
      </div>
    </>
  );
}
