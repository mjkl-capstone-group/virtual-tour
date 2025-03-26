"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Button from '@/components/ui/button';

import { useEffect } from 'react';

export default function AgasAgasBridge() {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="row align-items-start">
                    {/* First Column - Image */}
                    <div className="col-md-6">
                        <Image
                            src="/assets/photos/heritage/agas-agas-bridge.jpg"
                            alt="Agas-Agas Bridge"
                            width={600}
                            height={350}
                            className="img-fluid rounded"
                            style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)" }}
                        />
                    </div>

                    <div className="col-md-6">
                        <h1 className='mb-1'><strong>Agas-Agas Bridge</strong></h1>

                        <p className="text-muted">
                            <a href="https://www.google.com/maps/search/?api=1&query=FXWX+H5Q,+Sogod,+Southern+Leyte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-muted">
                                <i className="bi bi-geo-alt me-1"></i> FXWX+H5Q, Sogod, Southern Leyte
                            </a>
                        </p>

                        <div className="mb-2 mt-4">
                            <button className="btn btn-outline-dark me-2">
                                <i className="bi bi-map me-1"></i>
                                View on Map
                            </button>
                            <button className="btn btn-outline-dark">
                                <i className="bi bi-cloud-haze2 me-1"></i>
                                Check Weather
                            </button>
                        </div>

                        <p>
                            The Agas-Agas Bridge is the highest bridge in the Philippines, built to prevent landslides
                            in the mountainous terrain of Southern Leyte.
                        </p>

                        <Button />
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <h2 className="section-title text-center mb-5 justify-content-center">
                    <strong> Reviews</strong>
                </h2>
            </div>

            <Footer />
        </>
    );
}
