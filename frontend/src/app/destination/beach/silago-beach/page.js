import PannellumViewer from "@/components/pannellumViewer";
import assetsURL from "@/utils/supabase-assets";

export const metadata = {
    title: "Sogod Bay VR",
    description: "Explore the beauty of Sogod Bay in Southern Leyte through this virtual tour.",
};

export default async function SogodBayVR() {

    const initialScenes = {
        scene1: {
            panorama: `${assetsURL.panoramas}pureshotsala.jpg`,
            // panorama: "/assets/panoramas/sogod-bay/pureshotsala.jpg",
            nextScene: "scene2",
            hotspotYaw: 188,
            hotspotPitch: -20,
            hotspotText: "Go to the Kitchen",
            initialYaw: 188,
            initialPitch: -15,
        },
        scene2: {
            panorama: `${assetsURL.panoramas}nextkitchen.jpg`,
            // panorama: "/assets/panoramas/sogod-bay/pureshotsala.jpg",
            nextScene: "scene1",
            hotspotYaw: -10,
            hotspotPitch: -20,
            hotspotText: "Back to the Living Room",
            initialYaw: -145,
            initialPitch: -15,
        },
    };

    return <PannellumViewer initialScenes={initialScenes} />;
}
