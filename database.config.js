// var db = pgp("postgres://YuriyBC:123456@localhost:5432/testdb");
const pg = require('knex')({
    client: 'pg',
    connection: "postgres://YuriyBC:123456@localhost:5432/testdb",
    searchPath: ['knex', 'public'],
});

module.exports = pg
