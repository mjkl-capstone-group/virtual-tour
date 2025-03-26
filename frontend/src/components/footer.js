"use client";

import React from 'react';
import Image from 'next/image';
import assetsURL from '@/utils/supabaseAssets';

import { useRouter } from 'next/navigation';

const Footer = () => {

    const router = useRouter();

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <footer className="bg-dark text-white py-5" style={{ minHeight: '300px' }}>
            <div className="container">
                <div className="row g-4">
                    {/* Project Info */}
                    <div className="col-md-3">
                        <h4 style={{ fontSize: '1.2rem' }}>Southern Leyte Virtual Tours</h4>
                        <p style={{ fontSize: '0.9rem' }}>
                            Maasin City, Southern Leyte
                            <br />
                            Philippines
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-3">
                        <h4 style={{ fontSize: '1.2rem' }}>Contact Us</h4>
                        <p style={{ fontSize: '0.9rem' }}>
                            Email: mjkl.capstonegroup@gmail.com
                            <br />
                            Phone: +63 994 443 9582
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div className="col-md-3">
                        <h4 style={{ fontSize: '1.2rem' }}>Follow Us</h4>
                        <div className="d-flex gap-3">
                            <a
                                href="https://www.facebook.com/mcrromawak/"
                                className="text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook fa-lg">
                                </i>
                            </a>
                            <a
                                href="https://www.instagram.com/romawakmatt/"
                                className="text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-youtube fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3">
                        <h4 style={{ fontSize: '1.2rem' }}>Quick Links</h4>
                        <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
                            <li>
                                <a className="text-white" onClick={() => navigateTo('/pages/about')} style={{ cursor: 'pointer' }}>About Us</a>
                            </li>
                            <li><a href="/faq" className="text-white">FAQ</a></li>
                            <li><a href="/privacy-policy" className="text-white">Privacy Policy</a></li>
                            <li><a href="/terms" className="text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-4 align-items-center">
                    {/* Acknowledgment and Logos */}
                    <div className="col-md-6 d-flex gap-3">
                        <Image
                            src={`${assetsURL.logos}leyte_normal_university.png`}
                            alt="Leyte Normal University"
                            width={50}
                            height={50}
                            title='Leyte Normal University'
                        />
                        <Image
                            src={`${assetsURL.logos}department_of_tourism.png`}
                            alt="Department of Tourism"
                            width={50}
                            height={50}
                            title='Department of Tourism'
                        />
                        <Image
                            src={`${assetsURL.logos}group_logo.png`}
                            alt="Capstone Group Logo"
                            width={50}
                            height={50}
                            title='Capstone Group Logo'
                        />
                        <Image
                            src={`${assetsURL.logos}i_love_philippines.png`}
                            alt="I Love Philippines"
                            width={100}
                            height={50}
                            title='I Love Philippines'
                        />
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="col-md-6">
                        <h4 style={{ fontSize: '1.2rem' }}>Subscribe to Our Newsletter</h4>
                        <form className="d-flex flex-column flex-sm-row gap-2">
                            <input type="email" className="form-control" placeholder="Enter your email" style={{ fontSize: '0.9rem' }} />
                            <button type="submit" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-5">
                    <p style={{ fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Southern Leyte Virtual Tours. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
