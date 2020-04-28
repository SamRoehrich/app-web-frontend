import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import Button from '../styled/Button'
import SecondaryText from '../styled/SecondaryText'
import PrimaryText from '../styled/PrimaryText'

import AthleteGoals from './AthleteGoals'
import AthleteLibrary from './AthleteLibrary'
import AthleteStats from './AthleteStats'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column
`

const ButtonContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ComponentContainer = styled.div`
    height: 90%;
    width: 100%;
`

//data is the result of getAthleteById query
const AthleteInformation = ({data}) => {
    const [activeContainer, setActiveContainer] = useState(<AthleteLibrary data={data.workouts} />)

    function handleClick(e, value) {
        e.preventDefault();
        switch(value){
            case 'stats':
                setActiveContainer(<AthleteStats />)
                break;
            case 'goals':
                setActiveContainer(<AthleteGoals />)
                break;
            case 'library':
                setActiveContainer(<AthleteLibrary data={data.workouts} />)
                break;
            case 'comps':
                setActiveContainer(<AthleteStats />)
                break;
            case 'parents':
                setActiveContainer(<AthleteStats />)
                break;
        }
    }

    return (
        <Container>
            <ButtonContainer>
                <Button onClick={e => handleClick(e, 'stats')}>Stats</Button>
                <Button onClick={e => handleClick(e, 'library')}>Workout Library</Button>
                <Button onClick={e => handleClick(e, 'goals')}>Goals</Button>
                <Button onClick={e => handleClick(e, 'stats')}>Competition Results</Button>
            </ButtonContainer>
            <ComponentContainer>
                {activeContainer}
            </ComponentContainer>
        </Container>
    )
}

export default AthleteInformation