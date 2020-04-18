import styled from 'styled-components'

import { useLocalState } from './LocalState'

import AthleteComputedDetails from './AthleteComputedDetails'
import AthleteStatsAndWorkouts from './AthleteStatsAndWorkouts'
import PrimaryText from './styled/PrimaryText'

const Container = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const AthleteName = styled.h1`
    color: white;
    font-weight: 800;
    font-size: 25px;
`

const AthleteInfo = () => {

    const { selectedAthlete } = useLocalState()

    if( selectedAthlete === '' ) return <Container />

    if( selectedAthlete ) return (
        
        <Container>
            <Row>
                <AthleteName>
                    {selectedAthlete.user.fullName}
                </AthleteName>
                <PrimaryText>
                    Edit Athlete
                </PrimaryText>
            </Row>
            <AthleteComputedDetails />
            <AthleteStatsAndWorkouts />
        </Container>
    )
}

export default AthleteInfo