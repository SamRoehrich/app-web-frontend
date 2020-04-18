import styled from 'styled-components'

import { useLocalState } from './LocalState'

import PrimaryText from './styled/PrimaryText'
import SecondaryText from './styled/SecondaryText'

import AthleteRecentActivity from './AthleteRecentActivity'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
`

const CenterRow = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Item = styled.div`
    height: 100%;
    width: 40%;
    justify-content: center;
    align-items: center;
`

const AthleteWorkouts = () => {

    const { selectedAthlete } = useLocalState()

    return (
        <Container>
            <Row>
                <Item>
                    <PrimaryText>
                        Phase
                    </PrimaryText>
                    <SecondaryText>
                        {selectedAthlete.phase}
                    </SecondaryText>
                </Item>
                <Item>
                    <PrimaryText>
                        Injury Status
                    </PrimaryText>
                    <SecondaryText>
                    {selectedAthlete.injuryStatus}
                    </SecondaryText>
                </Item>
                <Item>
                    <PrimaryText>
                        Strengths
                    </PrimaryText>
                    <SecondaryText>
                        {selectedAthlete.strengths}
                    </SecondaryText>
                </Item>
            </Row>

            <Row>
                <Item>
                    <PrimaryText>
                        Days Training per Week
                    </PrimaryText>
                    <SecondaryText>
                        Number
                    </SecondaryText>
                </Item>
                <Item>
                    <PrimaryText>
                        Sessions Per Week
                    </PrimaryText>
                    <SecondaryText>
                        Number
                    </SecondaryText>
                </Item>
                <Item>
                    <PrimaryText>
                        Weaknesses
                    </PrimaryText>
                    <SecondaryText>
                    {selectedAthlete.weaknesses}
                    </SecondaryText>
                </Item>
            </Row>
            <CenterRow>
                <PrimaryText>
                    Recent Activity
                </PrimaryText>
            </CenterRow>
            <AthleteRecentActivity />

        </Container>  
    )
}

export default AthleteWorkouts