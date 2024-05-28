const mysql = require('mysql2');
const dbConfig = require('../../../vp23config');
const dataBase = 'if23_proovikivi'

const pool = mysql.createPool({
	host: dbConfig.configData.host,
	user: dbConfig.configData.user,
	password: dbConfig.configData.password,
	database: dataBase,
	connectionLimit: 5
});

exports.pool = pool;