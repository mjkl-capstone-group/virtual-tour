"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { DestinationsButton } from '@/components/ui/button';
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function AgasAgasBridge() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const location = 'FXWX+H5Q, Sogod, Southern Leyte';

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    const toggleModal = () => {
        setShow(!show);
    };

    useEffect(() => {
        if (show) {
            setLoading(true);
            const fetchWeatherData = async () => {
                try {
                    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
                    const data = await response.json();
                    setWeatherData(data);
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                    setWeatherData(null); // Optional: set a fallback message or error state
                } finally {
                    setLoading(false);
                }
            };

            fetchWeatherData();
        }
    }, [show]);

    return (
        <>
            <Head>
                <title>Agas-Agas Bridge | PERIPLOS</title>
                <meta name="description" content="Agas-Agas Bridge is the highest bridge in the Philippines, built to prevent landslides in the mountainous terrain of Southern Leyte." />
            </Head>
            <Header />
            <div className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Image
                            src="/assets/photos/heritage/agas-agas-bridge.jpg"
                            alt="Agas-Agas Bridge"
                            layout='intrinsic'
                            width={600}
                            height={350}
                            className="img-fluid rounded"
                            style={{
                                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </div>

                    <div className="col-md-6">
                        <h1 className='mb-1 fw-bold'>Agas-Agas Bridge</h1>

                        <p className="text-muted">
                            <a href="https://www.google.com/maps/search/?api=1&query=FXWX+H5Q,+Sogod,+Southern+Leyte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-muted">
                                <i className="bi bi-geo-alt me-1"></i> FXWX+H5Q, Sogod, Southern Leyte
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
                                onClick={toggleModal}
                            >
                                <i className="fa-solid fa-cloud me-2"></i>
                                {loading ? 'Loading...' : 'Check Weather'}
                            </button>
                        </div>

                        {show && (
                            <div className="modal fade show"
                                style={{ display: 'block' }}
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                                role="dialog"
                                aria-live="polite"
                            >
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header text-center">
                                            <h5 className="modal-title w-100" id="exampleModalLabel">
                                                Weather Information
                                            </h5>
                                        </div>
                                        <div className="modal-body">
                                            {weatherData ? (
                                                <div className="mt-4">
                                                    <h5>Current Weather</h5>
                                                    <p><strong>Temperature:</strong> {weatherData.current.temp_c}°C</p>
                                                    <p><strong>Condition:</strong> {weatherData.current.condition.text}</p>
                                                    <img src={`https:${weatherData.current.condition.icon}`} alt={weatherData.current.condition.text} />
                                                </div>
                                            ) : (
                                                <p>No weather data available.</p>
                                            )}
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                                onClick={toggleModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

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
                            The Agas-Agas Bridge is the highest bridge in the Philippines, built to prevent landslides
                            in the mountainous terrain of Southern Leyte.
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
