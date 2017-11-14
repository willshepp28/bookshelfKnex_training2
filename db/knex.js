var enviroment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[enviroment];
console.log(config);

module.exports = require('knex')(config);