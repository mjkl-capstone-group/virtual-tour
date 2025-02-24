import PannellumViewer from "@/components/vr-components/sogod-bay/pannellumViewer"; 

export default async function SogodBayVR() {
    const initialScenes = {
        scene1: {
            panorama: "/assets/panoramas/pureshotsala.jpg",
            nextScene: "scene2",
            hotspotYaw: 188,
            hotspotPitch: -20,
            hotspotText: "Go to the Kitchen",
            initialYaw: 188,
            initialPitch: -15,
        },
        scene2: {
            panorama: "/assets/panoramas/nextkitchen.jpg",
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
