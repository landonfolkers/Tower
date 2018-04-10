exports.seed = function(knex, Promise) {
  return knex('soils').del()
    .then(function () {
      return knex('soils').insert([
        {id: 1, name: 'Landon', soilType: 'loam', phLevel: 'high'},
        {id: 2, name: 'John', soilType: 'loam', phLevel: 'low'},
        {id: 3, name: 'Steve', soilType:'silt', phLevel: 'mid'}
      ])
    })
    .then(() => knex.raw("ALTER SEQUENCE soils_id_seq RESTART WITH 4"))
}
