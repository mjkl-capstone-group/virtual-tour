"use client";

import Image from 'next/image';
import assetsURL from '@/utils/supabase-assets';

function HeroSection() {
    return (
        <div className="position-relative text-center">
            <Image
                className="hero-image"
                src= {`${assetsURL.others}san-pablo-island.jpg`}
                alt="Discover Southern Leyte"
                width={800}
                height={600}
                priority
            />
            <div className="image-overlay"></div>
        </div>
    );
}

export default HeroSection;
