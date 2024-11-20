export async function seed(knex) {
  await knex('animals').insert([
    {
      id: 1,
      type: 'Clownfish',
      diet: 'Omnivore',
      enclosure_id: 1,
    },
    {
      id: 2,
      type: 'Shark',
      diet: 'Carnivore',
      enclosure_id: 4,
    },
    {
      id: 3,
      type: 'Sea Turtle',
      diet: 'Herbivore',
      enclosure_id: 1,
    },
    {
      id: 4,
      type: 'Octopus',
      diet: 'Carnivore',
      enclosure_id: 4,
    },
    {
      id: 5,
      type: 'Penguins',
      diet: 'Omnivore',
      enclosure_id: 5,
    },
    {
      id: 6,
      type: 'Mo Deng',
      diet: 'Omnivore',
      enclosure_id: 6,
    },
    {
      id: 7,
      type: 'Seals',
      diet: 'Carnivore',
      enclosure_id: 2,
    },
  ])
}
