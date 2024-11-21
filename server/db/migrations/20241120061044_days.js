/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('days', (table) => {
    table.increments('id').primary()
    table.string('weekday')
    table.string('time')
    table.integer('animal_id').references('animals.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('days')
}
