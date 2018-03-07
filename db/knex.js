// var db = pgp("postgres://YuriyBC:123456@localhost:5432/testdb");
// const config = {
//     client: 'pg',
//     connection: "postgres://YuriyBC:123456@localhost:5432/testdb",
//     searchPath: ['knex', 'public'],
//     pool: {
//         afterCreate: function (conn, done) {
//             // in this example we use pg driver's connection API
//             conn.query('SET timezone="UTC";', function (err) {
//                 if (err) {
//                     console.log('alert1')
//                     // first query failed, return error and don't try to make next query
//                     done(err, conn);
//                 } else {
//                     // do the second query...
//                     console.log('alert2')
//                     conn.query('SELECT set_limit(0.01);', function (err) {
//                         // if err is not falsy, connection is discarded from pool
//                         // if connection aquire was triggered by a query the error is passed to query promise
//                         done(err, conn);
//                     });
//                 }
//             });
//         }
//     }
// };
var evironment = 'development';
const config = require('../knexfile')[evironment];
module.exports = require('knex')(config);
