const Sequelize = require("sequelize");

module.exports = new Sequelize(
  process.env.DATABASENAME,
  process.env.DATABASEUSER,
  process.env.USERPASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
