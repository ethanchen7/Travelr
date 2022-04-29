"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      fullName: {
        type: Sequelize.STRING(150),
      },
      profilePic: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING(200),
      },
      favoriteDestination: {
        type: Sequelize.STRING(200),
      },
      occupation: {
        type: Sequelize.STRING(100),
      },
      bio: {
        type: Sequelize.STRING(500),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Profiles");
  },
};
