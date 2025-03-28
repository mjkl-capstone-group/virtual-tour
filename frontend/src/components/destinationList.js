const destinations = {
    beaches: [
        {
            name: "Tangkaan Beach",
            type: "Beach",
            location: "Padre Burgos",
            description: "A white sand beach with crystal-clear waters, ideal for snorkeling and diving.",
            image: "/assets/photos/beaches/tangkaan.jpg",
            filepath: "/pages/destinations/beach/tangkaan-beach"
        },
        {
            name: "Crescent Beach Resort",
            type: "Beach",
            location: "Liloan",
            description: "A hidden gem with a crescent-shaped shoreline, soft white sand, and crystal-clear waters. Perfect for swimming, relaxation, and sunset views.",
            image: "/assets/photos/beaches/crescent_beach.jpg",
            filepath: "/pages/destinations/beach/crescent-beach-resort"
        },
        {
            name: "Bitoon Beach",
            type: "Beach",
            location: "Silago",
            description: "A serene beach with powdery white sand, turquoise waters, and a peaceful ambiance, perfect for relaxation and nature lovers.",
            image: "/assets/photos/beaches/bitoon.jpg",
            filepath: "/pages/destinations/beach/bitoon-beach",
        },
        {
            name: "Molopolo White Beach",
            type: "Beach",
            location: "Molopolo",
            description: "A beautiful white sand beach known for its crystal-clear waters and relaxing atmosphere.",
            activities: ["Swimming", "Snorkeling", "Picnic", "Beach Volleyball"],
            image: "/assets/photos/beaches/molopolo.jpg",
            filepath: "/pages/destinations/beach/molopolo-white-beach",
        },
    ],
    heritage: [
        {
            name: "Monte Cueva Shrine",
            type: "Heritage",
            location: "Maasin",
            description: "A pilgrimage site on a hill with a scenic view and a chapel inside a cave.",
            image: "/assets/photos/heritage/monte-cueva-shrine.jpg",
            filepath: "/pages/destinations/heritage/monte-cueva-shrine",
        },
        {
            name: "Agas-Agas Bridge",
            type: "Heritage",
            location: "Sogod",
            description: "The tallest bridge in the Philippines, offering breathtaking views and adventure activities.",
            image: "/assets/photos/heritage/agas-agas-bridge.jpg",
            filepath: "/pages/destinations/heritage/agas-agas-bridge"
        },
        {
            name: "Our Lady of the Assumption",
            type: "Heritage",
            location: "Maasin",
            description: "A historic church with Spanish-era architecture, one of the oldest in Southern Leyte.",
            image: "/assets/photos/heritage/lady-assumption.jpg",
        },
        {
            name: "Maasin Cathedral",
            type: "Heritage",
            location: "Maasin",
            description: "A religious landmark featuring beautiful stained-glass windows and intricate carvings.",
            image: "/assets/photos/heritage/maasin-cathedral.jpg",
        },
        {
            name: "Santo Niño Church",
            type: "Heritage",
            location: "Malitbog",
            description: "An ancient church known for its historical significance and well-preserved structure.",
            image: "/assets/photos/heritage/santo-nino-church.jpg",
        },
    ],
    caves: [
        // {
        //     name: "Demoloc Cave",
        //     type: "Caves",
        //     location: "Malitbog",
        //     description: "A hidden gem with impressive rock formations and crystal-clear underground pools.",
        //     image: "/assets/photos/sample_image.jpg",
        // },
        {
            name: "Cambaro Cave",
            type: "Caves",
            location: "Macrohon",
            description: "A cave system with stalactites and stalagmites, located near Macrohon.",
            image: "/assets/photos/cave/cambaro-cave.jpg",
        },
        {
            name: "Guinsuhotan Cave",
            type: "Caves",
            location: "Maasin",
            description: "A cave with stunning rock formations, underground streams, and a scenic waterfall at the entrance.",
            image: "/assets/photos/cave/guinsuhotan.jpg",
        },
    ],
    falls: [
        {
            name: "Cagnituan Falls",
            type: "Falls",
            location: "Maasin",
            description: "A serene waterfall surrounded by lush greenery, perfect for nature lovers.",
            image: "/assets/photos/falls/cagnituan-falls.jpg",
        },
        {
            name: "Magsuhot Park",
            type: "Falls",
            location: "Sogod",
            description: "A nature park with multiple cascading waterfalls and picnic areas.",
            image: "/assets/photos/falls/magsuhot-park.jpg",
        },
        // {
        //     name: "Majayjay Falls",
        //     type: "Falls",
        //     location: "Sogod",
        //     description: "A lesser-known waterfall with clear waters, accessible through a short hike.",
        //     image: "/assets/photos/sample_image.jpg",
        // },
        // {
        //     name: "Luman Falls",
        //     type: "Falls",
        //     location: "Sogod",
        //     description: "A picturesque waterfall with refreshing waters, great for swimming.",
        //     image: "/assets/photos/sample_image.jpg",
        // },
    ],
    islands: [
        {
            name: "Limasawa Island",
            type: "Islands",
            location: "Southern Leyte",
            description: "A historic island known as the site of the first Catholic Mass in the Philippines.",
            image: "/assets/photos/island/limasawa-island.jpg",
        },
        // {
        //     name: "Puting Buhangin Island",
        //     type: "Islands",
        //     location: "Padre Burgos",
        //     description: "An island paradise with powdery white sand and clear blue waters.",
        //     image: "/assets/photos/sample_image.jpg",
        // },
    ],
    resorts: [
        {
            name: "Dongon Hillside Resort",
            type: "Resort",
            location: "Maasin",
            description: "A budget-friendly resort offering a scenic view of the hills and the sea.",
            image: "/assets/photos/resort/donghon.jpg",
        },
        {
            name: "Banahaw Cold Spring",
            type: "Resort",
            location: "Macrohon",
            description: "A natural spring with refreshingly cold waters, surrounded by greenery.",
            image: "/assets/photos/resort/banahaw.jpg",
        },
    ],
    parks: [
        {
            name: "Danao Forest Park",
            type: "Park",
            location: "Maasin",
            description: "A lush forest park with hiking trails and a view deck overlooking the city.",
            image: "/assets/photos/park/danao.jpg",
        },
    ],
};

export default destinations;
