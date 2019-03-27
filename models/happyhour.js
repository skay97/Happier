/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var HappyHour = sequelize.define("happyhour", {
    hh_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hh_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hh_duration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hh_drinks: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hh_food: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return HappyHour;
};
