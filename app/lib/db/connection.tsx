import mysql from 'mysql2/promise';

const Connection = await mysql.createConnection({
  host: process.env.REACT_APP_MYSQL_HOST,
  user: process.env.REACT_APP_MYSQL_USER,
  database: process.env.REACT_APP_MYSQL_DATABASE,
  password: process.env.REACT_APP_MYSQL_PASSWORD,
});

export default Connection;