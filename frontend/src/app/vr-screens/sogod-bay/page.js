'use client';

import { useEffect, useRef, useState } from 'react';
import "./page.css";

export default function PannellumViewer() {
    const [currentScene, setCurrentScene] = useState('scene1');
    const viewerRef = useRef(null);

    const scenes = {
        scene1: {
            panorama: '/assets/panoramas/pureshotsala.jpg',
            nextScene: 'scene2',
            hotspotYaw: 188,
            hotspotPitch: -20,
            hotspotText: "Go to the Kitchen",
            initialYaw: 188,
            initialPitch: -15,
        },
        scene2: {
            panorama: '/assets/panoramas/nextkitchen.jpg',
            nextScene: 'scene1',
            hotspotYaw: -10,
            hotspotPitch: -20,
            hotspotText: "Back to the Living Room",
            initialYaw: -145,
            initialPitch: -15,
        },
    };

    useEffect(() => {
        async function loadPannellum() {
            if (typeof window !== 'undefined') {
                await import('pannellum/build/pannellum.js');
                await import('pannellum/build/pannellum.css');

                if (viewerRef.current) {
                    viewerRef.current.destroy();
                }

                if (window.pannellum) {
                    viewerRef.current = window.pannellum.viewer('panorama', {
                        type: 'equirectangular',
                        panorama: scenes[currentScene].panorama,
                        autoLoad: true,
                        showControls: true,
                        yaw: scenes[currentScene].initialYaw,
                        pitch: scenes[currentScene].initialPitch,
                        hotSpots: [
                            {
                                pitch: scenes[currentScene].hotspotPitch,
                                yaw: scenes[currentScene].hotspotYaw,
                                type: 'scene',
                                text: scenes[currentScene].hotspotText,
                                clickHandlerFunc: () => {
                                    setCurrentScene(scenes[currentScene].nextScene);
                                },
                            },
                        ],
                    });
                }
            }
        }

        loadPannellum();

        // Cleanup function to avoid memory leaks
        return () => {
            if (viewerRef.current) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, [currentScene]);

    return (
        <>
            <div id="panorama" className="w-full h-screen"></div>
        </>
    );
}
