const {Pool} = require("pg");

const pool = new  Pool({
    user: "postgres",
    password: "kebe12",
    host: "localhost",
    database:"testuser",
    port: 5432
});
module.exports = pool;