import DestinationComponent from "./destination";
// import GoogleMapComponent from "@/components/googleMap";

import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "./destination.module.css";

export const metadata = {
    title: "Destinations | PERIPLOS",
    description: "Experience immersive 360° virtual tours of top destinations.",
    openGraph: {
        title: "Destinations",
        description: "Discover and explore stunning destinations with immersive virtual tours.",
    },
};

export default function HomePage() {
    return (
        <>
            <Header />
            <h2 className={`${styles["destination-title"]} text-center mb-4 mt-5`}>
                <strong>Map of Southern Leyte</strong>
            </h2>
            <div className="container mt-4">
                <div className="d-flex justify-content-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502350.70116789226!2d124.82847935505292!3d10.37264822659516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330717917d5b29f5%3A0x685e3febf529d2b3!2sSouthern%20Leyte!5e0!3m2!1sen!2sph!4v1741690546880!5m2!1sen!2sph"
                        width="100%" height="400"
                        style={{ border: 0, borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="bg-white py-4">
                <div className="container">
                    <DestinationComponent />
                </div>
            </div>
            <Footer />
        </>
    );
}
