
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'rowValue1', password: 'sdcddssds'},
        {id: 2, email: 'rowValue2', password: 'sdcddssds'},
        {id: 3, email: 'rowValue3', password: 'sdcddssds'}
      ]);
    });
};
