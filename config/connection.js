const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhoste',
    dialect: 'mysql',
    port: 3000
});

module.exports = sequelize;