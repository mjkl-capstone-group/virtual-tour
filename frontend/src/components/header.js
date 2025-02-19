"use client";

import React from "react";
import "./component.css"

import { useRouter } from "next/navigation";

//This component is for the main page of the website

const Header = () => {
    const router = useRouter();

    const navigateToDestinations = () => {
        router.push('/pages/destinations/');
    };

    const navigateToHome = () => {
        router.push('/');
    };

    const navigateToAbout = () => {
        router.push('/pages/about/');
    };

    return (
        <nav className="navbar navbar-expand-md sticky-top py-3">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#" style={{ color: 'var(--primary-color)' }}>
                    <i className="fas fa-water me-2"></i><span style={{ color: 'black' }}>LEYTEXPLORE</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={navigateToHome} style={{ color: 'black', cursor: 'pointer' }}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={navigateToDestinations} style={{ color: 'black', cursor: 'pointer' }}>
                                Destinations
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  style={{ color: 'black' }}>
                                About
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="communityDropdown" role="button" data-bs-toggle="dropdown" style={{ color: 'black' }}>
                                Community
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="communityDropdown">
                                <li>
                                    <a className="dropdown-item">
                                        <i className="fi fi-ss-review me-2"></i>
                                        Reviews
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item">
                                        <i className="fi fi-sr-meeting me-2"></i>
                                        Forums
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item ">
                                        <i className="fi fi-ss-comments-question me-2"></i>
                                        Help/FAQ
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="btn ms-2" href="#discover" style={{ backgroundColor: 'black', color: 'white' }}>
                                Discover
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
