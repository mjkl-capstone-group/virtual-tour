import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Team from "./ourteam";

export const metadata = {
    title: "About Us",
    description: "We are a team of Information Technology students passionate about blending research and development to create innovative and impactful solutions.",
};

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="bg-light">

                {/* Hero Section */}
                <section className="text-white text-center py-5 custom-hero">
                    <div className="container"
                        style={{ maxHeight: '440px' }}
                    >
                        <h1 className="display-4 fw-bold">About Us</h1>
                        <p className="lead">
                            We are a team of Information Technology students passionate about blending research and
                            development to create innovative and impactful solutions. Through our capstone project,
                            we aim to leverage technology to enhance exploration and learning. Our mission is to create a
                            user-friendly platform that fosters engagement and accessibility, contributing to the ever-evolving digital landscape.
                        </p>
                    </div>
                </section>

                {/* Our Team */}
                <section className="container py-5">
                    <h2 className="fw-bold text-center">Meet Our Team</h2>
                    <p className="text-center">The proponents</p>
                    <Team />
                </section>

                {/* Our Mission */}
                <section className="bg-white py-5 text-center">
                    <div className="container">
                        <h2 className="fw-bold">Our Mission</h2>
                        <p className="mt-3">
                            Our goal is to develop an innovative and practical solution that addresses [mention the problem your capstone solves].
                            We strive to bridge the gap between technology and real-world needs.
                        </p>
                    </div>
                </section>

                {/* Our Process */}
                <section className="container py-5">
                    <h2 className="text-center fw-bold">Our Process</h2>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Research & Planning</h5>
                                    <p>We conduct in-depth research and create a solid foundation for our project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Development</h5>
                                    <p>We focus on coding, testing, and refining features to ensure a smooth experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Finalization & Presentation</h5>
                                    <p>We finalize the project, document our work, and prepare for presentations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Goals */}
                <section className="bg-secondary text-white text-center py-5">
                    <div className="container">
                        <h2 className="fw-bold">Future Goals</h2>
                        <p className="mt-3">
                            After completing this capstone, we aim to [mention goals—improve, launch publicly, integrate AI, make it open-source, etc.].
                            Our vision is to create a long-term impact in [your field].
                        </p>
                    </div>
                </section>
            </div>
            <div data-aos="fade-up" data-aos-delay='100'>
                <Footer />
            </div>
        </>
    );
}

