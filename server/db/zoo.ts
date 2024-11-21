import connection from './connection.ts'
import { Animal } from '../../models/animals.ts'

export async function getAllAnimals(db = connection): Promise<Animal[]> {
  return db('animals').select('id', 'type', 'diet', 'enclosure_id')
}
