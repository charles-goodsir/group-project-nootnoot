export async function up(knex) {
  return knex.schema.createTable('animals', (table) => {
    table.increments('id').primary()
    table.string('type').notNullable()
    table.string('diet').notNullable()
    table
      .integer('enclosure_id')
      .unsigned()
      .references('id')
      .inTable('enclosures')
      .onDelete('CASCADE')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('animals')
}
