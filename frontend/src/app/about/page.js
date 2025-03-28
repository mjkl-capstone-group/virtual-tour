import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Team from "./ourteam";
import styles from "./ourteam.module.css";

export const metadata = {
    title: "About Us | PERIPLOS",
    description: "We are a team of Information Technology students passionate about blending research and development to create innovative and impactful solutions.",
};

export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="bg-light">

                {/* Hero Section */}
                <section className={`text-white text-center py-5 ${styles["custom-hero"]}`}>
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

                <hr className="container my-4 border-top border-secondary" />

                {/* Our Mission */}
                <section className="bg-light py-5 text-center">
                    <div className="container">
                        <h2 className="fw-bold mb-4">Our Mission</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <p className="fs-5 text-muted">
                                    Our mission is to transform Southern Leyte’s tourism industry by harnessing advanced technology to deliver
                                    an immersive and interactive virtual tour experience. Through AI-powered interactions and 360-degree panoramic views,
                                    we aim to redefine how tourists explore and connect with the region’s iconic destinations. By modernizing promotional strategies,
                                    we strive to make tourism more accessible, engaging, and informative for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="container my-4 border-top border-secondary" />

                {/* Our Process */}
                <section className="container py-5">
                    <h2 className="text-center fw-bold">Our Process</h2>
                    <div className="row mt-4">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card shadow h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Assessment & Analysis</h5>
                                    <p>We evaluate current tourism promotion strategies in Southern Leyte and identify limitations in engaging visitors.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card shadow h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Design & Development</h5>
                                    <p>We create a web-based platform featuring 360-degree panoramic virtual tours with AI-powered functionalities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card shadow h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Implementation & Deployment</h5>
                                    <p>We ensure seamless integration of virtual tours, AI interactions, and user-friendly navigation for an optimal experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="card shadow h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Testing & Optimization</h5>
                                    <p>We conduct extensive black-box and white-box testing to validate functionality, security, and usability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            <div data-aos="fade-up" data-aos-delay='100'>
                <Footer />
            </div>
        </>
    );
}

