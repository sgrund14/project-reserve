'use strict'

const { INTEGER, STRING } = require("sequelize");

module.exports = (sequelize) => {

  const Patient = sequelize.define('patient', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    public_id: {
      type: STRING,
    },
    name: {
      type: STRING,
    }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true
  });

  return Patient;
};
