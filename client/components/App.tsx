import useFeedingSchedule from "../hooks/useFeedingSchedule."

function FeedingScheduleList() {
  const { data: feedingSchedule, isLoading, error } = useFeedingSchedule()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading feeding schedule.</p>

  return (
    <ul>
      {feedingSchedule?.map((item) => (
        <li key={item.animal_id}>
          {item.enclosure_type} ({item.type}) has a diet of {item.diet} at {item.time}.
        </li>
      ))}
    </ul>
  )
}

export default FeedingScheduleList
