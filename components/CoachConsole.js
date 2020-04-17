import styled from 'styled-components'
import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { COACH_TO_TEAM_QUERY } from '../lib/querys'
import Container from './styled/Container'
import Home from './Home'
import Athletes from './Athletes'
import Posts from './Posts'
import Library from './Library'
import TeamSettings from './TeamSettings'
import Button from './styled/Button'

const Sidebar = styled.div`
    height: 100%;
    width: 15%;
    background-color: orangered;
    display: flex;
    flex-direction: column;
`

const CoachConsole = ({ user }) => {
    
    const { data, loading } = useQuery(COACH_TO_TEAM_QUERY, {
        variables: {
            id: user.team.id
        }
    })
    
    const [activeButton, setActiveButton] = useState('ATHLETES')

    if(loading) return <p>Loading...</p>

    function RenderView(activeButton) {
        switch (activeButton) {
            case 'HOME':
                return <Home team={data.getTeamById}/>
            case 'ATHLETES':
                return <Athletes athletes={data.getTeamById.athletes}/>
            case 'LIBRARY':
                return <Library />
            case 'POSTS':
                return <Posts />
            case 'TEAMSETTINGS':
                return <TeamSettings />
            default:
                return <Home />
        }
    }

    function handleClick(view) {
        setActiveButton(view)
    }
    
    if(loading) return <p>Loading...</p>
    if(data) {
        return (
            <Container>
                <Sidebar>
                    <Button onClick={() => handleClick('HOME')}>Home</Button>
                    <Button onClick={() => handleClick('ATHLETES')}>Athletes</Button>
                    <Button onClick={() => handleClick('LIBRARY')}>Workout Library</Button>
                    <Button onClick={() => handleClick('POSTS')}>Posts</Button>
                    <Button onClick={() => handleClick('TEAMSETTINGS')}>Manage Team</Button>
                </Sidebar>
                { 
                    RenderView(activeButton)
                }
            </Container>
        )
    }
}

export default CoachConsole