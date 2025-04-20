import mysql from "mysql2/promise";

// on my server i need the pool
const Connection = mysql.createPool({
  host: process.env.REACT_APP_MYSQL_HOST,
  user: process.env.REACT_APP_MYSQL_USER,
  database: process.env.REACT_APP_MYSQL_DATABASE,
  password: process.env.REACT_APP_MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

/*
const Connection = await mysql.createConnection({
  host: process.env.REACT_APP_MYSQL_HOST,
  user: process.env.REACT_APP_MYSQL_USER,
  database: process.env.REACT_APP_MYSQL_DATABASE,
  password: process.env.REACT_APP_MYSQL_PASSWORD,
});
*/

export default Connection;