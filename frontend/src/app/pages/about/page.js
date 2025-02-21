import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="bg-light">
                <Head>
                    <title>About Us</title>
                    <meta name="description" content="Learn more about our capstone team and mission." />
                </Head>

                {/* Hero Section */}
                <section className="bg-primary text-white text-center py-5">
                    <div className="container">
                        <h1 className="display-4 fw-bold">About Us</h1>
                        <p className="lead">
                            We are a dedicated team of four students working on our capstone project, blending research and development to create something impactful.
                        </p>
                    </div>
                </section>

                {/* Our Team */}
                <section className="container py-5">
                    <h2 className="text-center fw-bold">Meet Our Team</h2>
                    <div className="row mt-4">
                        {/* Developer */}
                        <div className="col-md-3">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    <h5 className="card-title">[Your Name]</h5>
                                    <p className="card-text text-muted">Lead Developer</p>
                                    <p>Responsible for coding, UI, and backend development of the project.</p>
                                </div>
                            </div>
                        </div>

                        {/* Other Team Members */}
                        {["Member 1", "Member 2", "Member 3"].map((member, index) => (
                            <div key={index} className="col-md-3">
                                <div className="card shadow">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{member}</h5>
                                        <p className="card-text text-muted">Research & Documentation</p>
                                        <p>Focused on research, writing, and ensuring project accuracy.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
            <Footer />
        </>
    );
}
