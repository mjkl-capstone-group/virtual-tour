"use client";

import React, { useEffect } from "react";
import "./component.css";
import Image from "next/image";
import assetsURL from "@/utils/supabaseAssets";
import { useRouter } from "next/navigation";

const Header = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    const router = useRouter();

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <nav className="navbar navbar-expand-md sticky-top py-3">
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand fw-bold"
                    onClick={() => navigateTo('/')}
                    style={{ color: 'var(--primary-color)', cursor: 'pointer' }}
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

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mt-1">
                            <a className="nav-link"
                                onClick={() => navigateTo('/')}
                                style={{ color: 'black', cursor: 'pointer' }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item mt-1">
                            <a className="nav-link"
                                onClick={() => navigateTo('/pages/destinations')}
                                style={{ color: 'black', cursor: 'pointer' }}
                            >
                                Destination
                            </a>
                        </li>
                        <li className="nav-item dropdown mt-1">
                            <a className="nav-link dropdown-toggle"
                                id="communityDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                style={{ color: 'black' }}>
                                Community
                            </a>
                            <ul className="dropdown-menu mb-2" aria-labelledby="communityDropdown">
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
                                    <a className="dropdown-item"
                                        onClick={() => navigateTo('/pages/community/help-faq')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fi fi-ss-comments-question me-2"></i>
                                        Help/FAQ
                                    </a>
                                </li>
                            </ul>
                        </li>

                        {/* Discover Button */}
                        <li className="nav-item mt-1 mx-2">
                            <a className="btn nav-link"
                                style={{ backgroundColor: 'black', color: 'white' }}
                                onClick={() => navigateTo('/test-page/offcanvas')}
                            >

                                Discover
                            </a>
                        </li>

                        {/* User Profile Section */}
                        <li className="nav-item dropdown ms-3">
                            <a className="nav-link d-flex align-items-center"
                                id="userDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                style={{ cursor: 'pointer' }}
                            >
                                <Image
                                    src="/assets/groupmates/romawak.jpg"
                                    width={35}
                                    height={35}
                                    className="rounded-circle user-profile"
                                    alt="User Profile"
                                />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                <li>
                                    <a className="dropdown-item"
                                        onClick={() => navigateTo('/profile')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fa-solid fa-user me-2"></i>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item"
                                        onClick={() => navigateTo('/settings')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fa-solid fa-gear me-2"></i>
                                        Settings
                                    </a>
                                </li>
                                <hr />
                                <li>
                                    <a className="dropdown-item text-danger"
                                        onClick={() => navigateTo('/logout')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fa-solid fa-right-from-bracket me-2"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
