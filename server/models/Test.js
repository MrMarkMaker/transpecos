'use strict';

module.exports = function( sequelize, DataTypes ) {
  var Test = sequelize.define( 'Test', {
    message: DataTypes.STRING
  });
  return Test;
};
