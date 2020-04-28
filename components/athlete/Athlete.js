import styled from 'styled-components'
import { useState, useEffect } from 'react'

//import WorkoutGraph from './Athlete_Workout_Graph'
import WorkoutGraph from './WorkoutGraph'
import AthleteInformation from './AthleteInformation'

import Stats from './Stats'
import PrimaryText from '../styled/PrimaryText'
import SecondaryText from '../styled/SecondaryText'
import Button from '../styled/Button'
import { useLocalState } from '../../components/LocalState'

//data is the result of the getAthleteById query
const Athlete = ({data}) => {
    const { getAthleteById: athlete } = data 

    return (
        <Container>
            <LargeRow>
                <Quarter>
                    <Item>
                        <PrimaryText>
                            {athlete.user.fullName}
                        </PrimaryText>
                    </Item>
                    <Item>
                        <PrimaryText>
                            Program: String
                        </PrimaryText>
                    </Item>
                    <Item>
                        <PrimaryText>
                            Phase: {athlete.phase}
                        </PrimaryText>
                    </Item>
                    <Item>
                        <PrimaryText>
                            Injury Status: {athlete.injuryStatus}
                        </PrimaryText>
                    </Item>

                </Quarter>
                <Quarter>
                    <WorkoutGraph logBook={athlete.logBook}/>
                </Quarter>
            </LargeRow>
            <AthleteInformation data={athlete} />
        </Container>
    )
}

    const Container = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #00203FFF;
    `
    
    const Item = styled.div`
        height: 10%;
        width: 100%;
        display: flex;
        padding: 10px;
    `
    
    const LargeRow = styled.div`
        height: 40%;
        width: 100%;
        display: flex;
    `
    
    const Quarter = styled.div`
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
    `
    
    const SmallRow = styled.div`
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
export default Athlete