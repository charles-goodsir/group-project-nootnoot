export async function seed(knex) {
  await knex('days').insert([
    // Clownfish
    {
      id: 1,
      weekday: 'Monday',
      time: '10:00 AM',
      animal_id: 1,
    },
    {
      id: 2,
      weekday: 'Wednesday',
      time: '02:00 PM',
      animal_id: 1,
    },
    {
      id: 3,
      weekday: 'Friday',
      time: '04:00 PM',
      animal_id: 1,
    },

    // Shark
    {
      id: 4,
      weekday: 'Monday',
      time: '12:00 PM',
      animal_id: 2,
    },
    {
      id: 5,
      weekday: 'Thursday',
      time: '03:00 PM',
      animal_id: 2,
    },
    {
      id: 6,
      weekday: 'Saturday',
      time: '05:00 PM',
      animal_id: 2,
    },

    // Sea Turtle
    {
      id: 7,
      weekday: 'Tuesday',
      time: '09:30 AM',
      animal_id: 3,
    },
    {
      id: 8,
      weekday: 'Thursday',
      time: '01:00 PM',
      animal_id: 3,
    },
    {
      id: 9,
      weekday: 'Sunday',
      time: '04:30 PM',
      animal_id: 3,
    },

    // Octopus
    {
      id: 10,
      weekday: 'Monday',
      time: '03:00 PM',
      animal_id: 4,
    },
    {
      id: 11,
      weekday: 'Friday',
      time: '06:00 PM',
      animal_id: 4,
    },
    {
      id: 12,
      weekday: 'Saturday',
      time: '08:00 PM',
      animal_id: 4,
    },

    // Penguins
    {
      id: 13,
      weekday: 'Wednesday',
      time: '11:00 AM',
      animal_id: 5,
    },
    {
      id: 14,
      weekday: 'Friday',
      time: '01:30 PM',
      animal_id: 5,
    },
    {
      id: 15,
      weekday: 'Sunday',
      time: '03:30 PM',
      animal_id: 5,
    },

    // Mo Deng
    {
      id: 16,
      weekday: 'Tuesday',
      time: '10:30 AM',
      animal_id: 6,
    },
    {
      id: 17,
      weekday: 'Thursday',
      time: '02:00 PM',
      animal_id: 6,
    },
    {
      id: 18,
      weekday: 'Saturday',
      time: '05:30 PM',
      animal_id: 6,
    },

    // Seals
    {
      id: 19,
      weekday: 'Monday',
      time: '11:30 AM',
      animal_id: 7,
    },
    {
      id: 20,
      weekday: 'Wednesday',
      time: '03:00 PM',
      animal_id: 7,
    },
    {
      id: 21,
      weekday: 'Friday',
      time: '05:00 PM',
      animal_id: 7,
    },
  ])
}
