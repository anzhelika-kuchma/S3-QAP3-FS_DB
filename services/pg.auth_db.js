const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Travel Wishlist",
  password: "Kuchmeny",
  port: 5432,
});

console.log("connected to PostgreSQL...");

module.exports = pool;