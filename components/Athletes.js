//top half of component lists all athletes
//bottom half will allow you to edit the active athlete

import styled from 'styled-components'
import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { ATHLETE_LIST_QUERY, COACH_CONSOLE_QUERY } from '../lib/querys'
import { useLocalState } from './LocalState'

import AthleteList from './AthleteList'
import AthleteInfo from './AthleteInfo'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #00203FFF;
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
   
    const { data, loading } = useQuery(COACH_CONSOLE_QUERY, {
        variables: {
            id: user.team.id
        }
    })

    if(loading) return <p>Loading...</p>

    const { athletes } = data.getTeamById
    
    //layout for the athlete console
    //mainly renders other components
    return (
        <Container>
            <AthleteList athletes={athletes} />
            <AthleteInfo />
        </Container>
    )
}
export default Athletes