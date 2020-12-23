'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (QueryInterface, DataTypes) => {
    return await QueryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      }, 
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updateAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {    
    return await queryInterface.dropTable('Users');
  }
};
