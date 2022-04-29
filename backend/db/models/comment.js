"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      imageId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Images" },
      },
      text: { type: DataTypes.STRING(300), allowNull: false },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Image, { foreignKey: "imageId" });
  };
  return Comment;
};
