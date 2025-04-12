import assetsURL from "@/utils/supabase-assets";

const destinations = {
    beaches: [
        {
            name: "Tangkaan Beach",
            type: "Beach",
            location: "Padre Burgos",
            description: "A white sand beach with crystal-clear waters, ideal for snorkeling and diving.",
            image: `${assetsURL.images}/beach/tangkaan.jpg`,
            filepath: "/destination/beach/tangkaan-beach"
        },
        {
            name: "Crescent Beach Resort",
            type: "Beach",
            location: "Liloan",
            description: "A hidden gem with a crescent-shaped shoreline, soft white sand, and crystal-clear waters. Perfect for swimming, relaxation, and sunset views.",
            image: `${assetsURL.images}/beach/crescent_beach.jpg`,
            filepath: "/destination/beach/crescent-beach-resort"
        },
        {
            name: "Bitoon Beach",
            type: "Beach",
            location: "Silago",
            description: "A serene beach with powdery white sand, turquoise waters, and a peaceful ambiance, perfect for relaxation and nature lovers.",
            image: `${assetsURL.images}/beach/bitoon.jpg`,
            filepath: "/destination/beach/bitoon-beach",
        },
        {
            name: "Molopolo White Beach",
            type: "Beach",
            location: "Molopolo",
            description: "A beautiful white sand beach known for its crystal-clear waters and relaxing atmosphere.",
            activities: ["Swimming", "Snorkeling", "Picnic", "Beach Volleyball"],
            image: `${assetsURL.images}/beach/molopolo.jpg`,
            filepath: "/destination/beach/molopolo-white-beach",
        },
    ],
    heritage: [
        {
            name: "Monte Cueva Shrine",
            type: "Heritage",
            location: "Maasin",
            description: "A pilgrimage site on a hill with a scenic view and a chapel inside a cave.",
            image: `${assetsURL.images}/heritage/monte-cueva-shrine.jpg`,
            filepath: "/destination/heritage/monte-cueva-shrine",
        },
        {
            name: "Agas-Agas Bridge",
            type: "Heritage",
            location: "Sogod",
            description: "The tallest bridge in the Philippines, offering breathtaking views and adventure activities.",
            image: `${assetsURL.images}/heritage/agas-agas-bridge.jpg`,
            filepath: "/destination/heritage/agas-agas-bridge"
        },
        {
            name: "Our Lady of the Assumption",
            type: "Heritage",
            location: "Maasin",
            description: "A historic church with Spanish-era architecture, one of the oldest in Southern Leyte.",
            image: `${assetsURL.images}/heritage/lady-assumption.jpg`,
            filepath: "/destination/heritage/our-lady-of-the-assumption",
        },
        {
            name: "Maasin Cathedral-National Shrine & Parish of Our Lady of the Assumption",
            type: "Heritage",
            location: "Maasin",
            description: "A religious landmark featuring beautiful stained-glass windows and intricate carvings.",
            image: `${assetsURL.images}/heritage/maasin-cathedral.jpg`,
            filepath: "/destination/heritage/maasin-cathedral",
        },
        {
            name: "Santo Niño de Malitbog Parish",
            type: "Heritage",
            location: "Malitbog",
            description: "An ancient church known for its historical significance and well-preserved structure.",
            image: `${assetsURL.images}/heritage/santo-nino-church.jpg`,
            filepath: "/destination/heritage/santo-nino-church",
        },
    ],
    islands: [
        {
            name: "Limasawa Island",
            type: "Islands",
            location: "Limasawa",
            description: "A historic island known as the site of the first Catholic Mass in the Philippines.",
            image: `${assetsURL.images}/island/limasawa-island.jpg`,

        },
    ],
    resorts: [
        {
            name: "Banahaw Cold Spring",
            type: "Resort",
            location: "Macrohon",
            description: "A natural spring with refreshingly cold waters, surrounded by greenery.",
            image: `${assetsURL.images}/resort/banahaw.jpg`,
        },
    ],
    parks: [
        {
            name: "Danao Forest Park",
            type: "Park",
            location: "Maasin",
            description: "A lush forest park with hiking trails and a view deck overlooking the city.",
            image: `${assetsURL.images}/park/danao.jpg`,

        },
    ],
};

export default destinations;
