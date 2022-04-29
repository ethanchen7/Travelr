"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      fullName: { type: DataTypes.STRING },
      profilePic: { type: DataTypes.STRING },
      location: { type: DataTypes.STRING },
      favoriteDestination: { type: DataTypes.STRING },
      occupation: { type: DataTypes.STRING },
      bio: { type: DataTypes.STRING },
    },
    {}
  );
  Profile.associate = function (models) {
    Profile.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Profile;
};
