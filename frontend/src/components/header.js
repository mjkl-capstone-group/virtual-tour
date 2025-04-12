"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import supabase from '@/lib/supabase-client'
import { useRouter } from "next/navigation";

// import assetsURL from "@/utils/supabase-assets";

const Header = () => {
    const router = useRouter()

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min.js");
    }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession()
            const session = data?.session

            if (session?.user) {
                setIsLoggedIn(true)
            }
        }

        checkSession()
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/')
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand-md py-2 bg-dark sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold"
                    href="/"
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
                        <span className="ms-2 text-black">PERIPLOS</span>
                    </div>
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mb-2">
                        <li className="nav-item mt-1">
                            <Link className="nav-link"
                                href="/"
                                style={{ color: 'black' }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mt-1">
                            <Link className="nav-link"
                                href="/destination"
                                style={{ color: 'black' }}
                            >
                                Destination
                            </Link>
                        </li>
                        <li className="nav-item mt-1">
                            <Link className="nav-link"
                                href="/forums"
                                style={{ color: 'black' }}
                            >
                                Forums
                            </Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mt-1">
                            <Link className="nav-link" href="/test-page/slider" title="Discover">
                                <i className="fa-regular fa-compass fa-lg"></i>
                            </Link>
                        </li>

                        <li className="nav-item mt-1">
                            <Link className="nav-link" href="/test-page/modal" title="Help/FAQ">
                                <i className="fa-regular fa-question-circle fa-lg"></i>
                            </Link>
                        </li>

                        <li className="nav-item d-flex align-items-center px-2">
                            <span className="border-start border-2 h-50"></span>
                        </li>

                        {isLoggedIn ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link d-flex align-items-center" id="userDropdown" role="button" data-bs-toggle="dropdown" style={{ cursor: 'pointer' }}>
                                    <Image src="/assets/images/profile.jpg" width={35} height={35} className="rounded-circle user-profile" alt="User Profile" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                    <li>
                                        <Link className="dropdown-item" href="/profile" style={{ cursor: 'pointer' }}>
                                            <i className="fa-solid fa-user me-2"></i> Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/settings" style={{ cursor: 'pointer' }}>
                                            <i className="fa-solid fa-gear me-2"></i> Settings
                                        </Link>
                                    </li>
                                    <hr className="my-1" />
                                    <li>
                                        <a className="dropdown-item text-danger" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                            <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <Link className="btn btn-dark p-2" href="/signin">
                                Sign in
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Header;
