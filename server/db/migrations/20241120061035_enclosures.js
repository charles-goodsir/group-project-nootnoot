export async function up(knex) {
  return knex.schema.createTable('enclosures', (table) => {
    table.increments('id').primary()
    table.string('enclosure_type')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('enclosures')
}
