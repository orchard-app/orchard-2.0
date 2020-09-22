const Sequelize = require("sequelize");
const db = require("database");



module.exports = db.sequelize.define("listing", {
   
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  listing_title: {
        type: Sequelize.STRING,
         allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  state: {
    type: Sequelize.STRING,
     allowNull: false
  },
  zipcode: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },

  start_date: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  end_date: {
    type: Sequelize.DECIMAL(10, 2),
     allowNull: false,
  },
  start_time: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  end_time: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  });
