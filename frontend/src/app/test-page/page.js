import React from "react";
import Image from "next/image";
import './page.css';

const teamMembers = [
    {
        name: "Alice Johnson",
        role: "Project Manager",
        image: "/images/alice.jpg",
        description: "Alice is responsible for overseeing project development and team coordination.",
    },
    {
        name: "Bob Smith",
        role: "Lead Developer",
        image: "/images/bob.jpg",
        description: "Bob specializes in backend development and system architecture.",
    },
    {
        name: "Charlie Brown",
        role: "UI/UX Designer",
        image: "/images/charlie.jpg",
        description: "Charlie ensures our product is user-friendly and visually appealing.",
    },
    {
        name: "Diana Prince",
        role: "AI Engineer",
        image: "/images/diana.jpg",
        description: "Diana works on integrating AI models and enhancing platform intelligence.",
    },
];

const AboutUs = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Meet Our Team</h2>
            <div className="position-relative">
                <div className="timeline-line"></div>
                {teamMembers.map((member, index) => (
                    <div key={index} className={`row align-items-center mb-5 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                        <div className="col-md-5">
                            <div className="card p-3 shadow">
                                <h4>{member.name}</h4>
                                <h6 className="text-muted">{member.role}</h6>
                                <p>{member.description}</p>
                            </div>
                        </div>
                        <div className="col-md-2 text-center position-relative">
                            <div className="timeline-dot"></div>
                        </div>
                        <div className="col-md-5 text-center">
                            <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-circle" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
