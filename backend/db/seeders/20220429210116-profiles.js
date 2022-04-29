"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Profiles",
      [
        {
          userId: 1,
          fullName: "Demo Lition",
          profilePic: "/images/defaultprofile.png",
          location: "San Francisco, CA",
          favoriteDestination: "Paris, France",
          occupation: "Software Engineer",
          bio: "I'm an avid traveler when I'm not hacking away!",
        },
        {
          userId: 2,
          fullName: "Ethan Chen",
          profilePic: "/images/ethanchen.jpg",
          location: "Los Angeles, CA",
          favoriteDestination: "Taipei, Taiwan",
          occupation: "Software Engineer",
          bio: "My superpower would be to able to teleport to any location in the world. But I can make pretty awesome websites, so that's my superpower for now I guess.",
        },
        {
          userId: 3,
          fullName: "Travel Boy",
          profilePic: "/images/defaultprofile.png",
          location: "Austin, TX",
          favoriteDestination: "London, United Kingdom",
          occupation: "Financial Analyst",
          bio: "Take me on a trip!!",
        },
        {
          userId: 4,
          fullName: "Travel Lover",
          profilePic: "/images/defaultprofile.png",
          location: "Seattle, WA",
          favoriteDestination: "Tokyo, Japan",
          occupation: "Product Manager",
          bio: "Would rather be in Tokyo right now",
        },
        {
          userId: 5,
          fullName: "John Smith",
          profilePic: "/images/defaultprofile.png",
          location: "Columbus, OH",
          favoriteDestination: "Mykonos, Greece",
          occupation: "UX Designer",
          bio: "Check out my awesome memories!",
        },
        {
          userId: 6,
          fullName: "Jungkook Jeon",
          profilePic: "/images/jungkook.jpeg",
          location: "Seoul, Korea",
          favoriteDestination: "Los Angeles, CA",
          occupation: "Vocalist",
          bio: "Euphoria from traveling...",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Profiles", null, {});
  },
};
