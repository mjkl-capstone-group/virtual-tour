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
        <nav className="navbar navbar-expand-md sticky-top py-2">
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
                        <span className="ms-2 text-black">PERIPLOS</span>
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
                    <ul className="navbar-nav mb-2">
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
                        <li className="nav-item mt-1">
                            <a className="nav-link"
                                onClick={() => navigateTo('/pages/forums')}
                                style={{ color: 'black', cursor: 'pointer' }}
                            >
                                Forums
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        {/* Discover Icon */}
                        <li className="nav-item mt-1">
                            <a className="nav-link" onClick={() => navigateTo('/test-page/offcanvas')} style={{ cursor: 'pointer' }} title="Discover">
                                <i className="fa-regular fa-compass fa-lg"></i>
                            </a>
                        </li>

                        {/* Question Icon */}
                        <li className="nav-item mt-1">
                            <a className="nav-link" onClick={() => navigateTo('/questions')} style={{ cursor: 'pointer' }} title="Help/FAQ">
                                <i className="fa-regular fa-question-circle fa-lg"></i>
                            </a>
                        </li>

                        <li className="nav-item d-flex align-items-center px-2">
                            <span className="border-start border-2 h-50"></span>
                        </li>

                        {/* Profile */}
                        <li className="nav-item dropdown">
                            <a className="nav-link d-flex align-items-center" id="userDropdown" role="button" data-bs-toggle="dropdown" style={{ cursor: 'pointer' }}>
                                <Image src="/assets/groupmates/romawak.jpg" width={35} height={35} className="rounded-circle user-profile" alt="User Profile" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                <li>
                                    <a className="dropdown-item" onClick={() => navigateTo('/screens/tangkaan-beach')} style={{ cursor: 'pointer' }}>
                                        <i className="fa-solid fa-user me-2"></i> Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" onClick={() => navigateTo('/settings')} style={{ cursor: 'pointer' }}>
                                        <i className="fa-solid fa-gear me-2"></i> Settings
                                    </a>
                                </li>
                                <hr className="my-1" />
                                <li>
                                    <a className="dropdown-item text-danger" onClick={() => alert('fuck you f bitch tnginamo')} style={{ cursor: 'pointer' }}>
                                        <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
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
