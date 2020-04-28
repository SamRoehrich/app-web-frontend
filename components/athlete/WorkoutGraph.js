import {hierarchy, partition, array} from 'd3'

import { useRef, useEffect } from 'react'

import { arrToObj } from '../../lib/utils'

const WorkoutGraph = ({logBook}) => {

  const svgRef = useRef()

  //pull workouts from logItem and returns an array of objects
  const workouts = logBook.map(item => item.workout)

  const groupedWorkouts = arrToObj(workouts)

  console.log(groupedWorkouts)

  return (
        <svg ref={svgRef} />
      )
  }
  
export default WorkoutGraph
