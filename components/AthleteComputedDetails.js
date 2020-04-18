import styled from 'styled-components'

import { useLocalState } from './LocalState'
import { getStaticResults } from '../lib/utils'

import PrimaryText from './styled/PrimaryText'
import SecondaryText from './styled/SecondaryText'

const Container = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
`

const Info = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const InfoItem = styled.div`
    height: 50%;
    width: 25%;
    display: flex;
    flex-direction: column;
`

const AthleteComputedDetails = () => {

    const { selectedAthlete } = useLocalState()
    const { age, ageCat, yearsClimbing, yearsOnTeam} = getStaticResults(selectedAthlete)
    return (
        <Container>
            <InfoItem>
                <SecondaryText>
                    Age
                </SecondaryText>
                <PrimaryText>
                    {age}
                </PrimaryText>
            </InfoItem>
            <InfoItem>
                <SecondaryText>
                    Age Catagory
                </SecondaryText>
                <PrimaryText>
                    {ageCat}
                </PrimaryText>
            </InfoItem>
            <InfoItem>
                <SecondaryText>
                    Years climbing
                </SecondaryText>
                <PrimaryText>
                    {yearsClimbing}
                </PrimaryText>
            </InfoItem>
            <InfoItem>
                <SecondaryText>
                    Years on Team
                </SecondaryText>
                <PrimaryText>
                    {yearsOnTeam}
                </PrimaryText>
            </InfoItem>
        </Container>
    )
}

export default AthleteComputedDetails