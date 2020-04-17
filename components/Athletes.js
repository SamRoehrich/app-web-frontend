//top half of component lists all athletes
//bottom half will allow you to edit the active athlete

import styled from 'styled-components'
import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ATHLETE_LIST_QUERY, COACH_CONSOLE_QUERY } from '../lib/querys'
import { useLocalState } from './LocalState'

import EditAthlete from './EditAthlete'
import List from './styled/List'
import ListItem from './styled/ListItem'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: darkgray;
`

const AthleteList = styled.ul`
    height: 50%;
    width: 93%;
    background-color: lime;
`

const AthleteItem = styled.li`
    width: 100%;
    height: 20%;
`

const Error = styled.div`
    font-size: 40px;
    height: 75%;
    width: 75%;
    background-color: red;
`
//user is passed from the page by calling CURRENT_USER_QUERY
const Athletes = ({user}) => {
    const { selectedAthlete, setAthlete } = useLocalState()

    
    const { data, loading } = useQuery(COACH_CONSOLE_QUERY, {
        variables: {
            id: user.team.id
        }
    })

    if(loading) return <p>Loading...</p>

    const { athletes } = data.getTeamById
    
    const athleteListItems = athletes.map(athlete => 
        <li onClick={() => setAthlete(athlete)}>
                {athlete.user.fullName}
        </li >
    )
    
    return (
        <Container>
            <AthleteList>
                {athleteListItems}
            </AthleteList>
            <EditAthlete/> 
        </Container>
    )
}
export default Athletes