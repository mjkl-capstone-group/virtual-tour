"use client";

import React from "react";
import "./component.css"
import Image from "next/image";

import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <nav className="navbar navbar-expand-md sticky-top py-3">
            <div className="container">
                <a className="navbar-brand fw-bold"
                    onClick={() => navigateTo('/')}
                    style={{ color: 'var(--primary-color)' }}
                >
                    <div className="flex items-center">
                        <Image 
                        src="/assets/logos/leytexplore.jpg" 
                        className="mb-1"
                        width={30} 
                        height={30} 
                        alt="Leyte Explore" 
                        />
                        <span className="ms-2 text-black">LEYTEXPLORE</span>
                    </div>
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
                            <a className="nav-link"
                                onClick={() => navigateTo('/')}
                                style={{ color: 'black', cursor: 'pointer' }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                onClick={() => navigateTo('/pages/destinations')}
                                style={{ color: 'black', cursor: 'pointer' }}
                            >
                                Destinations
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                onClick={() => navigateTo('/pages/about')}
                                style={{ color: 'black', cursor: 'pointer' }}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                                id="communityDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                style={{ color: 'black' }}>
                                Community
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="communityDropdown">
                                <li>
                                    <a className="dropdown-item"
                                        onClick={() => navigateTo('/pages/community/reviews')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fi fi-ss-review me-2"></i>
                                        Reviews
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item"
                                        onClick={() => navigateTo('/pages/community/forums')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fi fi-sr-meeting me-2"></i>
                                        Forums
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item "
                                        onClick={() => navigateTo('/pages/community/help-faq')}
                                        style={{ cursor: 'pointer' }}
                                    >
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
