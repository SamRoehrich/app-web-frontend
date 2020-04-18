import styled from 'styled-components'

import PrimaryText from './styled/PrimaryText'
import SecondaryText from './styled/SecondaryText'

import { useLocalState } from './LocalState'

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
`

const AthleteStats = () => {

    const { selectedAthlete } = useLocalState()

    const {seasonGoal, yearGoal, competitionGoal} = selectedAthlete.goals[0]

    return (
        <Container>
            <Row>
                <Item>
                    <PrimaryText>
                        Height
                    </PrimaryText>
                    <SecondaryText>
                        Number
                    </SecondaryText>
                </Item>
                <Item>
                    <PrimaryText>
                        Ape Index
                    </PrimaryText>
                    <SecondaryText>
                        Number
                    </SecondaryText>
                </Item>
                <Item>
                    <PrimaryText>
                        Weight
                    </PrimaryText>
                    <SecondaryText>
                        Number
                    </SecondaryText>
                </Item>
            </Row>
            <Row>
                <Item>
                    <PrimaryText>
                        S/W Bar
                    </PrimaryText>
                    <SecondaryText>
                        Number
                    </SecondaryText>
                </Item>
                <Item>
                    <PrimaryText>
                        S/W 20mm edge
                    </PrimaryText>
                    <SecondaryText>
                        Number
                    </SecondaryText>
                </Item>
                <Item>
                    <PrimaryText>
                        Assessment Date
                    </PrimaryText>
                    <SecondaryText>
                        Number
                    </SecondaryText>
                </Item>
            </Row>
            <CenterRow>
                <PrimaryText>
                    GOALS
                </PrimaryText>
                <SecondaryText>
                    updated: string
                </SecondaryText>
            </CenterRow>
            <Row>
                <Item>
                    <PrimaryText>
                        Season Goal
                    </PrimaryText>
                    <SecondaryText>
                        {seasonGoal}
                    </SecondaryText>
                </Item>
            </Row>
            <Row>
                <Item>
                    <PrimaryText>
                        Year Goal
                    </PrimaryText>
                    <SecondaryText>
                        {yearGoal}
                    </SecondaryText>
                </Item>
            </Row>
            <Row>
                <Item>
                    <PrimaryText>
                        Competition Goal
                    </PrimaryText>
                    <SecondaryText>
                        {competitionGoal}
                    </SecondaryText>
                </Item>
            </Row>
        </Container>
    )
}

export default AthleteStats