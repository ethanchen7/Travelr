"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      imageUrl: { allowNull: false, type: DataTypes.STRING },
      favoriteCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        defaultValue: [],
        allowNull: false,
      },
    },
    {}
  );
  Image.associate = function (models) {
    Image.belongsTo(models.User, { foreignKey: "userId" });
    Image.belongsToMany(models.User, {
      foreignKey: "imageId",
      through: "Favorite",
      otherKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Image.hasMany(models.Favorite, {
      foreignKey: "imageId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Image.hasMany(models.Comment, {
      foreignKey: "imageId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Image;
};
