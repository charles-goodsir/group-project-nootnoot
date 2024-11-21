import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { FeedingSchedule } from '../../models/feedingSchedule'

export default function useFeedingSchedule() {
  return useQuery({
    queryKey: ['feeding-schedule'],
    queryFn: async () => {
      const res = await request.get('/api/v1/feeding-schedule')
      return res.body.feedingSchedule as FeedingSchedule[] 
    },
  })
}
