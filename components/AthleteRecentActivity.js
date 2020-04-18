import styled from 'styled-components'

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

    return (
        <Container>
            <ActivityItem>
                <WorkoutText>
                    workout title
                </WorkoutText>
                <DateText>
                    completed at date
                </DateText>
            </ActivityItem>

        </Container>
    )
}

export default AthleteRecentActivity