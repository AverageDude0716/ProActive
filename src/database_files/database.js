//sqlite3 package
const sqlite3 = require('sqlite3').verbose();

// sqlite database
const db = new sqlite3.Database('./src/database/database.sqlite');

module.exports = db;