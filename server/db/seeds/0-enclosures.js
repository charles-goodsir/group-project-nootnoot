export async function seed(knex) {
  await knex('enclosures').del()
  await knex('enclosures').insert([
    {
      id: 1,
      enclosure_type: 'Reef Tank',
    },
    {
      id: 2,
      enclosure_type: 'Predator Tank',
    },
    {
      id: 3,
      enclosure_type: 'Sea Grass Habitat',
    },
    {
      id: 4,
      enclosure_type: 'Deep Sea Exhibit',
    },
    {
      id: 5,
      enclosure_type: 'Antarctic',
    },
    {
      id: 6,
      enclosure_type: 'Swamps',
    },
  ])
}
