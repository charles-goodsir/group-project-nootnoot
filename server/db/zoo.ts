import connection from './connection.ts'
import { Animal } from '../../models/animal.ts'
import { Day } from '../../models/day.ts'
import { Enclosure } from '../../models/enclosure.ts'

export async function getFeedingSchedule(db = connection): Promise<any[]> {
  return db('days')
    .join('animals', 'days.animal_id', '=', 'animals.id')
    .join('enclosures', 'animals.enclosure_id', '=', 'enclosures.id')
    .select(
      'animals.id as animal_id',
      'animals.type',
      'animals.diet',
      'days.weekday',
      'days.time',
      'enclosures.enclosure_type'
    )
}
