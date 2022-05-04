"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          imageId: 1,
          text: "Really awesome pic!",
        },
        {
          userId: 2,
          imageId: 1,
          text: "Never been there before, but would love to go",
        },
        {
          userId: 3,
          imageId: 1,
          text: "Thanks for sharing!",
        },
        {
          userId: 4,
          imageId: 1,
          text: "I'm jealous",
        },
        {
          userId: 5,
          imageId: 1,
          text: "Wow, lost for words",
        },
        {
          userId: 6,
          imageId: 1,
          text: "This picture is awesome!",
        },
        {
          userId: 1,
          imageId: 2,
          text: "whoa!",
        },
        {
          userId: 2,
          imageId: 2,
          text: "that is such high quality",
        },
        {
          userId: 3,
          imageId: 2,
          text: "that's insane",
        },
        {
          userId: 4,
          imageId: 2,
          text: "what camera did you use?",
        },
        {
          userId: 5,
          imageId: 2,
          text: "Been dying to go there",
        },
        {
          userId: 6,
          imageId: 2,
          text: "I plan on visiting next summer!",
        },
        {
          userId: 1,
          imageId: 3,
          text: "Always wanted to go here",
        },
        {
          userId: 2,
          imageId: 3,
          text: "Thanks for sharing.",
        },
        {
          userId: 3,
          imageId: 3,
          text: "Could you post some more pics?",
        },
        {
          userId: 4,
          imageId: 3,
          text: "What lens did you use?",
        },
        {
          userId: 5,
          imageId: 3,
          text: "Wow, amazing content",
        },
        {
          userId: 6,
          imageId: 3,
          text: "Crazy you got to experience this!",
        },
        {
          userId: 1,
          imageId: 4,
          text: "This is on my bucket list",
        },
        {
          userId: 2,
          imageId: 4,
          text: "Nice shot!",
        },
        {
          userId: 3,
          imageId: 4,
          text: "I can't believe you captured this angle",
        },
        {
          userId: 4,
          imageId: 4,
          text: "Look how blue that water is",
        },
        {
          userId: 5,
          imageId: 4,
          text: "Amazing picture, thanks",
        },
        {
          userId: 6,
          imageId: 4,
          text: "This goes on my list of trips!",
        },
        {
          userId: 1,
          imageId: 5,
          text: "Canada's most beautiful attraction!",
        },
        {
          userId: 2,
          imageId: 5,
          text: "Going there next week. Excited.",
        },
        {
          userId: 3,
          imageId: 5,
          text: "Wow, great shot",
        },
        {
          userId: 4,
          imageId: 5,
          text: "Amazing",
        },
        {
          userId: 5,
          imageId: 5,
          text: "Go for a swim?",
        },
        {
          userId: 6,
          imageId: 5,
          text: "We love canada",
        },
        {
          userId: 1,
          imageId: 6,
          text: "Beautiful shot",
        },
        {
          userId: 2,
          imageId: 6,
          text: "This really captures the atmosphere of France",
        },
        {
          userId: 3,
          imageId: 6,
          text: "I want to go back there so badly!",
        },
        {
          userId: 4,
          imageId: 6,
          text: "Amazing trip when I went",
        },
        {
          userId: 5,
          imageId: 6,
          text: "Thanks for sharing",
        },
        {
          userId: 6,
          imageId: 6,
          text: "Great shot!",
        },
        {
          userId: 1,
          imageId: 7,
          text: "Wow, natural beauty",
        },
        {
          userId: 2,
          imageId: 7,
          text: "Could definitely go for a swim",
        },
        {
          userId: 3,
          imageId: 7,
          text: "I'd like to go fishing there",
        },
        {
          userId: 4,
          imageId: 7,
          text: "Wow, that water is clear as ever",
        },
        {
          userId: 5,
          imageId: 7,
          text: "Imagine floating in that lake",
        },
        {
          userId: 6,
          imageId: 7,
          text: "The mountains look surreal",
        },
        {
          userId: 1,
          imageId: 8,
          text: "I love Japan!",
        },
        {
          userId: 2,
          imageId: 8,
          text: "This place was pretty crowded when I went.",
        },
        {
          userId: 3,
          imageId: 8,
          text: "How did you get such a great shot!",
        },
        {
          userId: 4,
          imageId: 8,
          text: "Wow the colors really pop here",
        },
        {
          userId: 5,
          imageId: 8,
          text: "Great shot",
        },
        {
          userId: 6,
          imageId: 8,
          text: "This place is such a great attraction",
        },
        {
          userId: 1,
          imageId: 9,
          text: "Beautiful",
        },
        {
          userId: 2,
          imageId: 9,
          text: "This is such an awesome shot",
        },
        {
          userId: 3,
          imageId: 9,
          text: "Great shot",
        },
        {
          userId: 4,
          imageId: 9,
          text: "Thanks for sharing",
        },
        {
          userId: 5,
          imageId: 9,
          text: "Going to go there next month!",
        },
        {
          userId: 6,
          imageId: 9,
          text: "Washington DC!!",
        },
        {
          userId: 1,
          imageId: 10,
          text: "Concrete Jungle",
        },
        {
          userId: 2,
          imageId: 10,
          text: "wow, those skyscrapers",
        },
        {
          userId: 3,
          imageId: 10,
          text: "Empire State is soo tall!",
        },
        {
          userId: 4,
          imageId: 10,
          text: "I love NYC",
        },
        {
          userId: 5,
          imageId: 10,
          text: "Great city",
        },
        {
          userId: 6,
          imageId: 10,
          text: "Amazing shot",
        },
        {
          userId: 1,
          imageId: 11,
          text: "Greece is definitely a place of my bucket lists",
        },
        {
          userId: 2,
          imageId: 11,
          text: "Gonna check Greece out next month",
        },
        {
          userId: 3,
          imageId: 11,
          text: "What an amazing shot",
        },
        {
          userId: 4,
          imageId: 11,
          text: "What kind of lens did you use?",
        },
        {
          userId: 5,
          imageId: 11,
          text: "What kind of camera?",
        },
        {
          userId: 6,
          imageId: 11,
          text: "Wow those colors",
        },
        {
          userId: 1,
          imageId: 12,
          text: "Cool shot!",
        },
        {
          userId: 2,
          imageId: 12,
          text: "Great shot",
        },
        {
          userId: 3,
          imageId: 12,
          text: "Wow the water looks unreal",
        },
        {
          userId: 4,
          imageId: 12,
          text: "Never knew San Francisco could look like this",
        },
        {
          userId: 5,
          imageId: 12,
          text: "The water looks like clouds",
        },
        {
          userId: 6,
          imageId: 12,
          text: "The bridge looks beautiful from here",
        },
        {
          userId: 1,
          imageId: 13,
          text: "Wow the colors really pop here",
        },
        {
          userId: 2,
          imageId: 13,
          text: "Where did you take this?",
        },
        {
          userId: 3,
          imageId: 13,
          text: "Wow that sunset in the distance",
        },
        {
          userId: 4,
          imageId: 13,
          text: "Amazing shot thanks for sharing",
        },
        {
          userId: 5,
          imageId: 13,
          text: "Really cool!",
        },
        {
          userId: 6,
          imageId: 13,
          text: "The lights are really prominent",
        },
        {
          userId: 1,
          imageId: 14,
          text: "The details of this shot are beautiful",
        },
        {
          userId: 2,
          imageId: 14,
          text: "This atmosphere is truly calming",
        },
        {
          userId: 3,
          imageId: 14,
          text: "Great photo thanks!",
        },
        {
          userId: 4,
          imageId: 14,
          text: "What is the camera you used?",
        },
        {
          userId: 5,
          imageId: 14,
          text: "These buildings are beautiful",
        },
        {
          userId: 6,
          imageId: 14,
          text: "Whoa, cool shot!",
        },
        {
          userId: 1,
          imageId: 15,
          text: "Truly the bay area",
        },
        {
          userId: 2,
          imageId: 15,
          text: "Always foggy",
        },
        {
          userId: 3,
          imageId: 15,
          text: "Beautiful shot",
        },
        {
          userId: 4,
          imageId: 15,
          text: "The color is so beautiful",
        },
        {
          userId: 5,
          imageId: 15,
          text: "I love San Francisco!",
        },
        {
          userId: 6,
          imageId: 15,
          text: "Gotta hit up SF some time soon!",
        },
        {
          userId: 1,
          imageId: 16,
          text: "Wow beautiful shot",
        },
        {
          userId: 2,
          imageId: 16,
          text: "Was this at a museum?",
        },
        {
          userId: 3,
          imageId: 16,
          text: "The Eiffel Tower is truly iconic",
        },
        {
          userId: 4,
          imageId: 16,
          text: "Beautiful shot",
        },
        {
          userId: 5,
          imageId: 16,
          text: "Thanks for sharing this",
        },
        {
          userId: 6,
          imageId: 16,
          text: "This is amazing",
        },
        {
          userId: 1,
          imageId: 17,
          text: "Wow!",
        },
        {
          userId: 2,
          imageId: 17,
          text: "Where is this!",
        },
        {
          userId: 3,
          imageId: 17,
          text: "Such a calming shot",
        },
        {
          userId: 4,
          imageId: 17,
          text: "This is amazing",
        },
        {
          userId: 5,
          imageId: 17,
          text: "Those mountains in the back, wow",
        },
        {
          userId: 6,
          imageId: 17,
          text: "This is a nice shot",
        },
        {
          userId: 1,
          imageId: 18,
          text: "The sky is so pretty",
        },
        {
          userId: 2,
          imageId: 18,
          text: "Wow, great shot",
        },
        {
          userId: 3,
          imageId: 18,
          text: "The colors of the sky are surreal",
        },
        {
          userId: 4,
          imageId: 18,
          text: "Cotton candy sunsets!",
        },
        {
          userId: 5,
          imageId: 18,
          text: "Great shot",
        },
        {
          userId: 6,
          imageId: 18,
          text: "Thanks for sharing",
        },
        {
          userId: 1,
          imageId: 19,
          text: "This really captures the dimensions of this building",
        },
        {
          userId: 2,
          imageId: 19,
          text: "Great lighting effects",
        },
        {
          userId: 3,
          imageId: 19,
          text: "I love this!",
        },
        {
          userId: 4,
          imageId: 19,
          text: "NYC really does have great sights",
        },
        {
          userId: 5,
          imageId: 19,
          text: "Amazing shot",
        },
        {
          userId: 6,
          imageId: 19,
          text: "Whoa!",
        },
        {
          userId: 1,
          imageId: 20,
          text: "Beautiful shot",
        },
        {
          userId: 2,
          imageId: 20,
          text: "Great lighting",
        },
        {
          userId: 3,
          imageId: 20,
          text: "What kind of lens did you use?",
        },
        {
          userId: 4,
          imageId: 20,
          text: "I think I know where this is!",
        },
        {
          userId: 5,
          imageId: 20,
          text: "I've been here before!",
        },
        {
          userId: 6,
          imageId: 20,
          text: "Wow",
        },
        {
          userId: 1,
          imageId: 21,
          text: "The water is so CLEAR!",
        },
        {
          userId: 2,
          imageId: 21,
          text: "Wow that water is blue",
        },
        {
          userId: 3,
          imageId: 21,
          text: "Imagine rowing in those boats! Would be fun",
        },
        {
          userId: 4,
          imageId: 21,
          text: "I gotta visit this place some time!",
        },
        {
          userId: 5,
          imageId: 21,
          text: "Really awesome shot, thanks",
        },
        {
          userId: 6,
          imageId: 21,
          text: "Calming",
        },
        {
          userId: 1,
          imageId: 22,
          text: "Wow, the colors of this shot",
        },
        {
          userId: 2,
          imageId: 22,
          text: "This looks magical",
        },
        {
          userId: 3,
          imageId: 22,
          text: "I really need to visit Bali",
        },
        {
          userId: 4,
          imageId: 22,
          text: "Amazing, almost doesn't look real",
        },
        {
          userId: 5,
          imageId: 22,
          text: "The green really pops",
        },
        {
          userId: 6,
          imageId: 22,
          text: "Great shot thanks!",
        },
        {
          userId: 1,
          imageId: 23,
          text: "Wow, i love SF",
        },
        {
          userId: 2,
          imageId: 23,
          text: "Land of the tech!",
        },
        {
          userId: 3,
          imageId: 23,
          text: "What a beautiful day this was shot on!",
        },
        {
          userId: 4,
          imageId: 23,
          text: "Lens?",
        },
        {
          userId: 5,
          imageId: 23,
          text: "Camera?",
        },
        {
          userId: 6,
          imageId: 23,
          text: "Awesome!",
        },
        {
          userId: 1,
          imageId: 24,
          text: "Cool shot!",
        },
        {
          userId: 2,
          imageId: 24,
          text: "Bali is crazy cool",
        },
        {
          userId: 3,
          imageId: 24,
          text: "Is that a volcano",
        },
        {
          userId: 4,
          imageId: 24,
          text: "What is this place called?",
        },
        {
          userId: 5,
          imageId: 24,
          text: "Amazing, the clouds really add to the shot",
        },
        {
          userId: 6,
          imageId: 24,
          text: "Beautiful sunset",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
