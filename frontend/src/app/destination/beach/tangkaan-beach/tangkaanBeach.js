"use client";

import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { DestinationsButton } from '@/components/ui/button';
import assetsURL from '@/utils/supabase-assets';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TangkaanBeach() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const location = '224H+VHP, Padre Burgos - Tankaan Rd, Padre Burgos, Southern Leyte';
    const latitude = 10.007216163742294;
    const longitude = 125.02896173105798;

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    const weatherModal = () => {
        setShow(!show);
    };

    const getDirections = () => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
    }

    useEffect(() => {
        if (show) {
            setLoading(true);
            const fetchWeatherData = async () => {
                try {
                    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`);
                    const data = await response.json();
                    console.log(data);
                    setWeatherData(data);
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                    setWeatherData(null);
                } finally {
                    setLoading(false);
                }
            };

            fetchWeatherData();
        }
    }, [show]);

    return (
        <>
            <Header />
            <div className="container my-4">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <Image
                            src={`${assetsURL.images}/beach/tangkaan.jpg`}
                            alt="Tangkaan Beach"
                            width={600}
                            height={400}
                            className="img-fluid w-100 rounded"
                            style={{
                                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
                                objectFit: "cover",
                                height: "400px",
                            }}
                        />
                    </div>

                    <div className="col-md-6">
                        <h1 className='mb-1 fw-bold'>Tangkaan Beach</h1>

                        <p className="text-muted">
                            <a href="https://www.google.com/maps/search/?api=1&query=Tangkaan+Beach,+Southern+Leyte"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-muted">
                                <i className="bi bi-geo-alt me-1"></i> 224H+VHP, Padre Burgos - Tankaan Rd, Padre Burgos, Southern Leyte
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
                                onClick={getDirections}
                            >
                                <i className="fa-solid fa-location-arrow me-2"></i>
                                Get Directions
                            </button>
                            <button className="btn btn-outline-dark"
                                style={{ width: '200px' }}
                                onClick={weatherModal}
                            >
                                <i className="fa-solid fa-cloud me-2"></i>
                                {loading ? 'Loading...' : 'Check Weather'}
                            </button>
                        </div>

                        {show && (
                            <div className="modal fade show"
                                style={{
                                    display: 'block',
                                }}
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
                                            <button type="button" className="btn-close"
                                                onClick={weatherModal}
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            {weatherData ? (
                                                <div className="container">
                                                    <div className="row flex-nowrap overflow-auto">
                                                        {weatherData.forecast.forecastday.map((day, index) => (
                                                            <div key={index} className="col-auto text-center">
                                                                <p>{new Date(day.date).toLocaleDateString([], { weekday: 'short' })}</p>
                                                                <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.text} />
                                                                <p>{day.day.avgtemp_c}°C</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <p>Loading weather data...</p>
                                            )}
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
                            Tangkaan Beach is a hidden gem in Southern Leyte, known for its crystal-clear waters,
                            white sandy shore, and breathtaking views of the nearby islands. It is a perfect spot
                            for snorkeling and relaxation.
                        </p>

                        <div className="row align-items-center mt-2">
                            <div className="col-auto mt-1">
                                <DestinationsButton href="/destination/beach/tangkaan-beach/virtual-tour" rel="noopener noreferrer" target="_blank"/>
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
