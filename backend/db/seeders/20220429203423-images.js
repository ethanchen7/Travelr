"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          userId: 2,
          imageUrl: "/images/04maldives.jpeg",
          favoriteCount: 36,
          tags: ["maldives", "asia", "india"],
        },
        {
          userId: 4,
          imageUrl: "/images/05niagara.jpeg",
          favoriteCount: 78,
          tags: ["niagara", "canada"],
        },
        {
          userId: 1,
          imageUrl: "/images/06france.jpeg",
          favoriteCount: 120,
          tags: ["france"],
        },
        {
          userId: 5,
          imageUrl: "/images/07banff.jpeg",
          favoriteCount: 23,
          tags: ["banff", "canada", "calgary"],
        },
        {
          userId: 6,
          imageUrl: "/images/08kyoto.jpeg",
          favoriteCount: 98,
          tags: ["kyoto", "fushimi inari"],
        },
        {
          userId: 2,
          imageUrl: "/images/09dc.jpeg",
          favoriteCount: 43,
          tags: ["washington dc", "united states"],
        },
        {
          userId: 1,
          imageUrl: "/images/11greece.jpeg",
          favoriteCount: 57,
          tags: ["myokonos", "greece"],
        },
        {
          userId: 4,
          imageUrl: "/images/13egypt.jpeg",
          favoriteCount: 89,
          tags: ["egypt", "middle east"],
        },
        {
          userId: 3,
          imageUrl: "/images/15sf.jpeg",
          favoriteCount: 64,
          tags: ["san francisco", "california", "golden gate"],
        },
        {
          userId: 6,
          imageUrl: "/images/19nyc.jpeg",
          favoriteCount: 78,
          tags: ["nyc", "new york", "empire state"],
        },
        {
          userId: 4,
          imageUrl: "/images/22bali.jpeg",
          favoriteCount: 60,
          tags: ["bali", "southeast asia"],
        },
        {
          userId: 6,
          imageUrl: "/images/23sf.jpeg",
          favoriteCount: 46,
          tags: ["san francisco", "california", "bay area"],
        },
        {
          userId: 2,
          imageUrl: "/images/24bali.jpeg",
          favoriteCount: 93,
          tags: ["bali", "indonesia"],
        },
        {
          userId: 3,
          imageUrl: "/images/25seoul.jpeg",
          favoriteCount: 53,
          tags: ["seoul", "korea", "asia"],
        },
        {
          userId: 6,
          imageUrl: "/images/26seoul.jpeg",
          favoriteCount: 22,
          tags: ["seoul", "south korea"],
        },
        {
          userId: 5,
          imageUrl: "/images/27seoul.jpeg",
          favoriteCount: 48,
          tags: ["seoul", "south korea"],
        },
        {
          userId: 4,
          imageUrl: "/images/28seoul.jpeg",
          favoriteCount: 52,
          tags: ["seoul", "south korea"],
        },
        {
          userId: 3,
          imageUrl: "/images/29seoul.jpeg",
          favoriteCount: 77,
          tags: ["seoul", "south korea"],
        },
        {
          userId: 2,
          imageUrl: "/images/30seoul.jpeg",
          favoriteCount: 64,
          tags: ["seoul", "south korea"],
        },
        {
          userId: 1,
          imageUrl: "/images/31seoul.jpeg",
          favoriteCount: 72,
          tags: ["seoul", "south korea"],
        },
        {
          userId: 6,
          imageUrl: "/images/32tokyo.jpeg",
          favoriteCount: 45,
          tags: ["tokyo", "japan"],
        },
        {
          userId: 5,
          imageUrl: "/images/33tokyo.jpeg",
          favoriteCount: 35,
          tags: ["tokyo", "japan"],
        },
        {
          userId: 4,
          imageUrl: "/images/34tokyo.jpeg",
          favoriteCount: 62,
          tags: ["tokyo", "japan", "asia"],
        },
        {
          userId: 3,
          imageUrl: "/images/35tokyo.jpeg",
          favoriteCount: 32,
          tags: ["tokyo", "japan"],
        },
        {
          userId: 2,
          imageUrl: "/images/36tokyo.jpeg",
          favoriteCount: 67,
          tags: ["tokyo", "japan", "asia"],
        },
        {
          userId: 1,
          imageUrl: "/images/37tokyo.jpeg",
          favoriteCount: 58,
          tags: ["tokyo", "japan"],
        },
        {
          userId: 6,
          imageUrl: "/images/38tokyo.jpeg",
          favoriteCount: 98,
          tags: ["tokyo", "japan", "east asia"],
        },
        {
          userId: 5,
          imageUrl: "/images/39tokyo.jpeg",
          favoriteCount: 103,
          tags: ["tokyo", "japan", "asia"],
        },
        {
          userId: 4,
          imageUrl: "/images/40taipei.jpeg",
          favoriteCount: 129,
          tags: ["taipei", "taiwan", "asia"],
        },
        {
          userId: 3,
          imageUrl: "/images/41taipei.jpeg",
          favoriteCount: 112,
          tags: ["taipei", "taiwan"],
        },
        {
          userId: 2,
          imageUrl: "/images/42taipei.jpeg",
          favoriteCount: 65,
          tags: ["taipei", "taiwan"],
        },
        {
          userId: 1,
          imageUrl: "/images/43taipei.jpeg",
          favoriteCount: 87,
          tags: ["taipei", "taiwan"],
        },
        {
          userId: 6,
          imageUrl: "/images/44taipei.jpeg",
          favoriteCount: 42,
          tags: ["taipei", "taiwan"],
        },
        {
          userId: 5,
          imageUrl: "/images/45taipei.jpeg",
          favoriteCount: 73,
          tags: ["taipei", "taiwan"],
        },
        {
          userId: 4,
          imageUrl: "/images/46taipei.jpeg",
          favoriteCount: 32,
          tags: ["taipei", "taiwan"],
        },
        {
          userId: 3,
          imageUrl: "/images/47hongkong.jpeg",
          favoriteCount: 46,
          tags: ["hong kong", "china", "asia"],
        },
        {
          userId: 2,
          imageUrl: "/images/48hongkong.jpeg",
          favoriteCount: 89,
          tags: ["hong kong"],
        },
        {
          userId: 1,
          imageUrl: "/images/49hongkong.jpeg",
          favoriteCount: 37,
          tags: ["hong kong", "asia"],
        },
        {
          userId: 6,
          imageUrl: "/images/50hongkong.jpeg",
          favoriteCount: 65,
          tags: ["hong kong"],
        },
        {
          userId: 5,
          imageUrl: "/images/51hongkong.jpeg",
          favoriteCount: 53,
          tags: ["hong kong"],
        },
        {
          userId: 4,
          imageUrl: "/images/52hongkong.jpeg",
          favoriteCount: 88,
          tags: ["hong kong"],
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
