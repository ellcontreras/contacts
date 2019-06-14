"use strict";
module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define(
    "person",
    {
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      number: DataTypes.STRING,
      relation: DataTypes.STRING
    },
    {}
  );
  person.associate = function(models) {
    // associations can be defined here
  };
  return person;
};
