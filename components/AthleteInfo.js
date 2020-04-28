import styled from 'styled-components'
import Link from 'next/link'

import { useLocalState } from './LocalState'

import AthleteComputedDetails from './AthleteComputedDetails'
import AthleteStatsAndWorkouts from './AthleteStatsAndWorkouts'
import PrimaryText from './styled/PrimaryText'
import Button from './styled/Button'
import AthleteRecentActivity from './AthleteRecentActivity'

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

    console.log(selectedAthlete)

    if( selectedAthlete ) return (
        
        <Container>
            <Row>
                <AthleteName>
                    {selectedAthlete.user.fullName}
                </AthleteName>
                <Link href="/athlete/[id]/" as={`/athlete/${selectedAthlete.id}/`}>
                    <a>Edit Athlete</a>
                </Link>
            </Row>
            <AthleteComputedDetails />
            <AthleteRecentActivity />
            {/* <AthleteStatsAndWorkouts /> */}
        </Container>
    )
}

export default AthleteInfo