exports.seed = function(knex, Promise) {
  return knex('crops').del()
    .then(function () {
      return knex('crops').insert([
        {id: 1, name: 'Landon', crops: 'corn', state: 'Colorado'},
        {id: 2, name: 'John', crops: 'peas', state: 'Nebraska'},
        {id: 3, name: 'Steve', crops:'beans', state: 'Iowa'}
      ])
    })
    .then(() => knex.raw("ALTER SEQUENCE crops_id_seq RESTART WITH 4"))
}
