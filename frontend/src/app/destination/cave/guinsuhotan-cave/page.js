"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { DestinationsButton } from '@/components/ui/button';
import Link from 'next/link';

import { useEffect } from 'react';

export default function GuinsuhotanCave() {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Image
                            src="/assets/photos/cave/guinsuhotan.jpg"
                            alt="Guinsuhotan Cave"
                            width={600}
                            height={350}
                            className="img-fluid rounded"
                            style={{
                                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </div>

                    <div className="col-md-6">
                        <h1 className='mb-1 fw-bold'>Guinsuhotan Cave</h1>

                        <p className="text-muted">
                            <a href="https://www.google.com/maps/search/?api=1&query=Guinsuhotan+Cave,+Southern+Leyte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-muted">
                                <i className="bi bi-geo-alt me-1"></i> 5W76+M98, Maasin City, Southern Leyte
                            </a>
                        </p>
                        <div className="d-flex align-items-center">
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-solid fa-star"></span>
                            <span className="fa-regular fa-star"></span>
                            <span className="ms-2 badge bg-success">Excellent</span>
                        </div>
                        <div className="mb-2 mt-4">
                            <button className="btn btn-outline-dark me-2"
                                style={{ width: '200px' }}
                            >
                                <i className="fa-solid fa-location-arrow me-2"></i>
                                Get Directions
                            </button>
                            <button className="btn btn-outline-dark"
                                style={{ width: '200px' }}
                            >
                                <i className="fa-solid fa-cloud me-2"></i>
                                Check Weather
                            </button>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                            <h6 className="mb-0">Socials:</h6>
                            <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
                                <i className="fa-brands fa-facebook me-1 fs-5"></i> Facebook
                            </Link>
                            <div className="vr"></div>
                            <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
                                <i className="fa-brands fa-twitter me-1 fs-5"></i> Twitter
                            </Link>
                            <div className="vr"></div>
                            <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
                                <i className="fa-brands fa-whatsapp me-1 fs-5"></i> WhatsApp
                            </Link>
                        </div>

                        <p className='mt-3'>
                            Guinsuhotan Cave in Maasin City, Southern Leyte is a limestone cave with stunning rock formations, underground streams, and rich biodiversity.
                        </p>

                        <div className="row align-items-center mt-2">
                            <div className="col-auto mt-1">
                                <DestinationsButton href="" />
                            </div>
                            <div className="col-auto mt-1">
                                <div className="dropdown">
                                    <button className="btn btn-light d-flex align-items-center gap-2"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="fa-solid fa-share-nodes fs-5"></i>Share
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#"><i className="fa-brands fa-facebook me-2"></i>Facebook</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa-brands fa-twitter me-2"></i>Twitter</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa-brands fa-whatsapp me-2"></i>WhatsApp</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto mt-1">
                                <button className="btn btn-light d-flex align-items-center gap-2">
                                    <i className="fa-regular fa-bookmark fs-5"></i>Bookmark
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto'></hr>
            <div className="container my-4 mt-5">
                <h2 className="section-title text-center mb-5 justify-content-center">
                    <strong> Reviews</strong>
                </h2>
            </div>

            <Footer />
        </>
    );
}
