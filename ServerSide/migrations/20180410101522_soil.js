exports.up = function (knex, Promise) {
    return knex.schema.createTable('soils', table => {
        table.increments('id').primary()
        table.text('name')
        table.text('soilType')
        table.text('phLevel')
    })
  } 
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('soils')
  }
