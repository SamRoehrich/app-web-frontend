import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { useLocalState } from '../LocalState'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const SearchContainer = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
`

const WorkoutContainer = styled.div`
    height: 100%;
    width: 80%;
`

const WorkoutListItem = styled.button`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
  }
`;

const AthleteLibrary = ({data}) => {
    const [value, setValue] = useState(data[0].catagory)
    const [filteredWorkouts, setFilteredWorkouts] = useState([])

    function handleChange(e) {
        e.preventDefault()
        setValue(e.target.value)
        filterWorkouts(value, data)
    }

    function filterWorkouts(value, data) {
        setFilteredWorkouts(data.filter(workout => workout.catagory == value))
    }

    useEffect(() => {
        filterWorkouts(value, data)
    }, [value])


    return (
        <Container>
            <SearchContainer>
                <Select id="workout category" onChange={e => handleChange(e)} value={value}>
                    {
                        data.map(workout => <option value={workout.catagory}>{workout.catagory}</option>)
                    }
                </Select>
                <WorkoutList data={filteredWorkouts}/>
            </SearchContainer>
            <WorkoutContainer>
                <AthleteWorkoutInformation />
            </WorkoutContainer>

        </Container>
    )
}

const WorkoutList = ({data}) => {
    const { setLocalStateSelectedWorkout } = useLocalState()

    function handleWorkoutClick(e) {
        e.preventDefault()
        setLocalStateSelectedWorkout(e.target.value)
    }

    return (
        data.map(workout => (
            <WorkoutListItem onClick={e => handleWorkoutClick(e)} value={workout.title}>{workout.title}</WorkoutListItem>
        )
    ))
}

const AthleteWorkoutInformation = () => {
    const { selectedWorkout } = useLocalState()
    if(!selectedWorkout) return <p>select a workout</p>
    return (
        <p>{selectedWorkout}</p>
    )
}

export default AthleteLibrary