import { Router } from 'express'
import * as db from '../db/zoo.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const feedingSchedule = await db.getFeedingSchedule() 

    res.json({ feedingSchedule }) 
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Feeding time is over' })
  }
})

export default router
