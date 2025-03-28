import PannellumViewer from "@/components/pannellumViewer";
import assetsURL from "@/utils/supabaseAssets";

export const metadata = {
    title: "Tangkaan Beach VR",
    description: "Explore the beauty of Tangkaan Beach in Southern Leyte through this virtual tour.",
};

export default async function TangkaanBeachVR() {

    const initialScenes = {
        scene1: {
            panorama: "/assets/panoramas/tangkaan-beach/outside.jpg",
            nextScene: "scene2",
            hotspotYaw: 1,
            hotspotPitch: -5,
            hotspotText: "Go inside",
            initialYaw: 1,
            initialPitch: 1,
        },
        scene2: {
            panorama: "/assets/panoramas/tangkaan-beach/inside.jpg",
            nextScene: "scene1",
            hotspotYaw: 4,
            hotspotPitch: -8,
            hotspotText: "Back to outside",
            initialYaw: 184,
            initialPitch: -10,
        },
    };

    return <PannellumViewer initialScenes={initialScenes} />;
}
