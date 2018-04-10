exports.up = function (knex, Promise) {
    return knex.schema.createTable('crops', table => {
        table.increments('id').primary()
        table.text('name')
        table.text('crops')
        table.text('state')
    })
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('crops')
  }
