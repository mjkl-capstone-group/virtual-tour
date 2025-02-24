"use client";

import React from "react";
import Image from "next/image";
import "./page.css";
import AOS from "aos";
import { useEffect } from "react";

const teamMembers = [
    {
        name: "Marian Jake O. Bula",
        role: "Group Leader & Lead Researcher",
        image: "/assets/groupmates/mayo.jpg",
        description: "Oversees the project, ensures smooth collaboration, and leads the research and documentation efforts for the capstone paper.",
    },
    {
        name: "Matt Christopher R. Romawak",
        role: "Web Developer & UI/UX Designer",
        image: "/assets/groupmates/romawak.jpg",
        description: "Designs and develops the web application, ensuring both functionality and an intuitive user experience.",
    },
    {
        name: "La Rhaine C. Rabino",
        role: "Creative Director & Research Contributor",
        image: "/assets/groupmates/rabino.jpg",
        description: "Leads visual branding, including logo and graphic design, while also contributing to research and documentation.",
    },
    {
        name: "Karlo A. Mengote",
        role: "Technical Researcher & Hardware Coordinator",
        image: "/assets/groupmates/mengote.jpg",
        description: "Conducts in-depth technical research and analysis while managing hardware resources to support the project's development.",
    },
];

const OurTeam = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 150,
        });
    }, []);

    return (
        <div className="container py-5 position-relative">
            <div className="timeline-line"></div>

            {teamMembers.map((member, index) => (
                <div key={index} className="row align-items-center mb-5">
                    {/* Alternating layout */}
                    {index % 2 === 0 ? (
                        <>
                            {/* Left Column: Card */}
                            <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
                                <div className="card p-3 shadow">
                                    <div className="row align-items-center">
                                        <div className="col-4 text-center">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={100}
                                                height={100}
                                                className="rounded-circle member-image"
                                            />
                                        </div>
                                        <div className="col-8">
                                            <h4 className="mb-0">{member.name}</h4>
                                            <h6 className="text-muted custom-role">{member.role}</h6>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-2">{member.description}</p>
                                </div>
                            </div>

                            {/* Middle Column: Timeline Dot */}
                            <div className="col-md-2 text-center position-relative">
                                <div className="timeline-dot"></div>
                            </div>

                            {/* Right Column: Empty Space */}
                            <div className="col-md-5"></div>
                        </>
                    ) : (
                        <>
                            {/* Left Column: Empty Space */}
                            <div className="col-md-5"></div>

                            {/* Middle Column: Timeline Dot */}
                            <div className="col-md-2 text-center position-relative">
                                <div className="timeline-dot"></div>
                            </div>

                            {/* Right Column: Card */}
                            <div className="col-md-5" data-aos="fade-left" data-aos-delay="100">
                                <div className="card p-3 shadow">
                                    <div className="row align-items-center">
                                        <div className="col-4 text-center">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={100}
                                                height={100}
                                                className="rounded-circle member-image"
                                            />
                                        </div>
                                        <div className="col-8">
                                            <h4 className="mb-0">{member.name}</h4>
                                            <h6 className="text-muted custom-role">{member.role}</h6>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-2">{member.description}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default OurTeam;
