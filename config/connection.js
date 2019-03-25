var dotenv = require('dotenv');
dotenv.config();


// Pull in required dependencies
var mysql = require('mysql');

var {DB_USER, DB_PASS, DB_NAME} = process.env;
// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
	var host = 'JAWSDB';
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: DB_USER,
		password: DB_PASS,
		database: DB_NAME
	})
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;