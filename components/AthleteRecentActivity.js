import styled from 'styled-components'

import { useLocalState } from './LocalState'

import PrimaryText from './styled/PrimaryText'
import SecondaryText from './styled/SecondaryText'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ActivityItem = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const WorkoutText = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: white;
`

const DateText = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: white;
`

const AthleteRecentActivity = () => {

    const { selectedAthlete } = useLocalState()

    //map over logBook and create a new element for 
    //every item in the array

    const { logBook } = selectedAthlete

    const items = logBook.map(item => (
        <ActivityItem>
            <WorkoutText>
                {item.workout.title}
            </WorkoutText>
            <DateText>
                {item.createdAt}
            </DateText>
        </ActivityItem>
    ))
    
    console.log(items)
    
    return (
        <Container>
            {items.slice(0,5)}
        </Container>
    )
}

export default AthleteRecentActivity