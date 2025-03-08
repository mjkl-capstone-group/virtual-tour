"use client";

import { useEffect, useRef, useState } from "react";
import "./component.css";

export default function pannellumViewer({ initialScenes }) {
    const [currentScene, setCurrentScene] = useState("scene1");
    const viewerRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        async function loadPannellum() {
            if (typeof window !== "undefined") {
                await import("pannellum/build/pannellum.js");
                await import("pannellum/build/pannellum.css");

                if (viewerRef.current) {
                    viewerRef.current.destroy();
                }

                if (window.pannellum) {
                    viewerRef.current = window.pannellum.viewer("panorama", {
                        type: "equirectangular",
                        panorama: initialScenes[currentScene].panorama,
                        autoLoad: true,
                        showControls: true,
                        yaw: initialScenes[currentScene].initialYaw,
                        pitch: initialScenes[currentScene].initialPitch,
                        hotSpots: [
                            {
                                pitch: initialScenes[currentScene].hotspotPitch,
                                yaw: initialScenes[currentScene].hotspotYaw,
                                type: "scene",
                                text: initialScenes[currentScene].hotspotText,
                                clickHandlerFunc: () => {
                                    setCurrentScene(initialScenes[currentScene].nextScene);
                                },
                            },
                        ],
                    });
                }
            }
        }

        loadPannellum();

        // Start music when component mounts
        if (audioRef.current) {
            audioRef.current.play().catch(error => console.error("Audio play error:", error));
        }

        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, [currentScene, initialScenes]);

    return (
        <div className="relative w-full h-screen">
            {/* Background Music */}
            <audio ref={audioRef} loop>
                <source src="/assets/bgmusic.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

            <div id="panorama" className="w-full h-screen"></div>
        </div>
    );
}
