import VirtualTour from "./destination";

export const metadata = {
    title: "Destinations",
    description: "Experience immersive 360° virtual tours of top destinations.",
    openGraph: {
        title: "Destinations",
        description: "Discover and explore stunning destinations with immersive virtual tours.",
    },
};

export default function HomePage() {
    return (
        <div>
            <VirtualTour />
        </div>
    );
}
