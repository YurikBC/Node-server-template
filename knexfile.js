// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: "postgres://YuriyBC:123456@localhost:5432/testdb",
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
        directory: __dirname + '/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: "postgres://YuriyBC:123456@localhost:5432/testdb",
    migrations: {
        directory: __dirname + '/db/migrations'
    },
    seeds: {
        directory: __dirname + '/db/seeds'
    }
  }
};
