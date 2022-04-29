"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "ethan@ethan.com",
          username: "ethanchen",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "bigtravelboy@gmail.com",
          username: "bigtravelboy",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "travellover@gmail.com",
          username: "travellover",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "johnsmith@gmail.com",
          username: "johnsmith",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "jeonjungkook@gmail.com",
          username: "jeonjungkook",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: [
            "demo-lition",
            "ethanchen",
            "bigtravelboy",
            "travellover",
            "johnsmith",
            "jeonjungkook",
          ],
        },
      },
      {}
    );
  },
};
