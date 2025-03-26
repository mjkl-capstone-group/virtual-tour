"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import assetsURL from "@/utils/supabaseAssets";
import styles from "./ourteam.module.css";

const teamMembers = [
    {
        name: "Marian Jake O. Bula",
        role: "Group Leader & Lead Researcher",
        image: `${assetsURL.profilePicture}mayo.jpg`,
        description: "Oversees the project, ensures smooth collaboration, and leads the research and documentation efforts for the capstone paper.",
        socials: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
            github: "#"
        }
    },
    {
        name: "Matt Christopher R. Romawak",
        role: "Web Developer & UI/UX Designer",
        image: `${assetsURL.profilePicture}romawak.jpg`,
        description: "Designs and develops the web application, ensuring both functionality and an intuitive user experience.",
        socials: {
            facebook: "https://www.facebook.com/mcrromawak/",
            twitter: "#",
            linkedin: "#",
            github: "#"
        }
    },
    {
        name: "La Rhaine C. Rabino",
        role: "Creative Director & Research Contributor",
        image: `${assetsURL.profilePicture}rabino.jpg`,
        description: "Leads visual branding, including logo and graphic design, while also contributing to research and documentation.",
        socials: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
            github: "#"
        }
    },
    {
        name: "Karlo A. Mengote",
        role: "Technical Researcher & Hardware Coordinator",
        image: `${assetsURL.profilePicture}mengote.jpg`,
        description: "Conducts in-depth technical research and analysis while managing hardware resources to support the project's development.",
        socials: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
            github: "#"
        }
    },
];

export default function Team() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 150,
        });
    }, []);

    return (
        <div className={`${styles.container} container py-5 position-relative`}>
            <div className={`${styles["timeline-line"]}`}></div>
            {teamMembers.map((member, index) => (
                <div key={index} className="row align-items-center mb-5">
                    {/* Alternating layout */}
                    {index % 2 === 0 ? (
                        <>
                            {/* Left Column: Card */}
                            <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
                                <div className= {`${styles.card} card p-3 shadow`}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-5 col-12 text-center">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={100}
                                                height={100}
                                                className={`rounded-circle ${styles["member-image"]}`}
                                            />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-12 text-center text-md-start">
                                            <h4 className="mb-0">{member.name}</h4>
                                            <h6 className={`text-muted ${styles["custom-role"]}`}>{member.role}</h6>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-2">{member.description}</p>
                                    <div className="d-flex justify-content-end">
                                        <a href={member.socials.github} className="mx-2 text-muted" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github fa-sm"></i>
                                        </a>
                                        <a href={member.socials.linkedin} className="mx-2 text-muted" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin fa-sm"></i>
                                        </a>
                                        <a href={member.socials.twitter} className="mx-2 text-muted" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter fa-sm"></i>
                                        </a>
                                        <a href={member.socials.facebook} className="mx-2 text-muted" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook fa-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Middle Column: Timeline Dot */}
                            <div className="col-md-2 text-center position-relative">
                                <div className={`${styles["timeline-dot"]}`}></div>
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
                                <div className={`${styles["timeline-dot"]}`}></div>
                            </div>
                            {/* Right Column: Card */}
                            <div className="col-md-5" data-aos="fade-left" data-aos-delay="100">
                                <div className={`${styles.card} card p-3 shadow`}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-5 col-12 text-center">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={100}
                                                height={100}
                                                className={`rounded-circle ${styles["member-image"]}`}
                                            />
                                        </div>
                                        <div className="col-lg-8 col-md-8 col-12 text-center text-md-start">
                                            <h4 className="mb-0">{member.name}</h4>
                                            <h6 className={`text-muted ${styles["custom-role"]}`}>{member.role}</h6>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-2">{member.description}</p>
                                    <div className="d-flex justify-content-end">
                                        <a href={member.socials.github} className="mx-2 text-muted" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github fa-sm"></i>
                                        </a>
                                        <a href={member.socials.linkedin} className="mx-2 text-muted" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin fa-sm"></i>
                                        </a>
                                        <a href={member.socials.twitter} className="mx-2 text-muted" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter fa-sm"></i>
                                        </a>
                                        <a href={member.socials.facebook} className="mx-2 text-muted" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook fa-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};