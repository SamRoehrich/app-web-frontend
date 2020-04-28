import styled from 'styled-components'
import { useState } from 'react'

import AthleteStats from './AthleteStats'
import AthleteWorkouts from './AthleteWorkouts'

const Container = styled.div`
    height: 75%;
    width: 100%;
    display: flex;
    flex-direction: column;
`
const ButtonContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AthleteStatsAndWorkout = () => {

    const [activeView, setActiveView] = useState('WORKOUTS')

    return (
        <Container>
            <ButtonContainer>
                <button onClick={ () => setActiveView('WORKOUTS')}>
                    Workouts
                </button>
                <button onClick={ () => setActiveView('STATS')}>
                    Stats
                </button>
            </ButtonContainer>

            {
                activeView == 'STATS' ? <AthleteStats /> : <AthleteWorkouts />
            }
        </Container>
    )
}

export default AthleteStatsAndWorkout