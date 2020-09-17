'use strict'

module.exports = (sequelize, DataTypes) => {
  const NumericCriteria = sequelize.define('numeric_criteria', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    supply: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });

  return NumericCriteria;
};