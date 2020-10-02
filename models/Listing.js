const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.sequelize.define("listing", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  zipcode: {
    type: Sequelize.INTEGER,
  },

  start_date: {
    type: Sequelize.DATE,
    // allowNull: false,
  },
  end_date: {
    type: Sequelize.DATE,
    // allowNull: false,
  },
  start_time: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  end_time: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  details: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
});
