import { useMemo } from "react";
import PannellumViewer from "@/components/pannellumViewer";
import assetsURL from "@/utils/supabaseAssets";

export const metadata = {
    title: "Tangkaan Beach VR",
    description: "Explore the beauty of Tangkaan Beach in Southern Leyte through this virtual tour.",
};

export default function TangkaanBeachVR() {
    const initialScenes = useMemo(() => ({
        scene1: {
            panorama: "/assets/panoramas/tangkaan-beach/entrance_outside.jpg",
            nextScene: "scene2",
            hotspotYaw: -16,
            hotspotPitch: -5,
            hotspotText: "Entrance",
            initialYaw: -16,
            initialPitch: 1,
        },
        scene2: {
            panorama: "/assets/panoramas/tangkaan-beach/entrance.jpg",
            nextScene: "scene3",
            hotspotYaw: -6,
            hotspotPitch: -39,
            hotspotText: "Go down",
            initialYaw: -7,
            initialPitch: -35,
        },
        scene3: {
            panorama: "/assets/panoramas/tangkaan-beach/first_stairs.jpg",
            nextScene: "scene4",
            hotspotYaw: -1,
            hotspotPitch: -30,
            hotspotText: "Go down",
            initialYaw: -5,
            initialPitch: -30,
        },
        scene4: {
            panorama: "/assets/panoramas/tangkaan-beach/middle_stairs.jpg",
            nextScene: "scene5",
            hotspotYaw: -3,
            hotspotPitch: -32,
            hotspotText: "Go down",
            initialYaw: -6,
            initialPitch: -25,
        },
        scene5: {
            panorama: "/assets/panoramas/tangkaan-beach/last_stairs.jpg",
            nextScene: "scene6",
            hotspotYaw: 4,
            hotspotPitch: -8,
            hotspotText: "Move forward",
            initialYaw: 4,
            initialPitch: -10,
        },
        scene6: {
            panorama: "/assets/panoramas/tangkaan-beach/inside_first.jpg",
            nextScene: "scene7",
            hotspotYaw: 4,
            hotspotPitch: -8,
            hotspotText: "Move forward",
            initialYaw: 4,
            initialPitch: -10,
        },
        scene7: {
            panorama: "/assets/panoramas/tangkaan-beach/inside_second.jpg",
            nextScene: "scene8",
            hotspotYaw: 89,
            hotspotPitch: 1,
            hotspotText: "Move forward",
            initialYaw: 4,
            initialPitch: -10,
        },
        scene8: {
            panorama: "/assets/panoramas/tangkaan-beach/inside_right.jpg",
            initialYaw: 4,
            initialPitch: -3,
        },
    }), []);

    return (
        <>
            <PannellumViewer initialScenes={initialScenes} />
        </>
    );
}
