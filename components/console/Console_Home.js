//list general team information
//total athletes, coaches, posts, workouts, hours spent training
//show recent chagnes made ie:last post, workout completed ect.

import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'

import Console from './Console'
import {HOME_VIEW_QUERY, COACH_CONSOLE_QUERY} from '../../lib/querys'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const StatsContainer = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: pink;
`

const StatContainer = styled.div`
    height: 100%;
    width: 15%;
    background-color: limegreen;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const RecentActivity = styled.div`
    height: 100%;
    width: 50%;
    background-color: pink;
`

const Resources = styled.div`
    height: 100%;
    width: 50%;
    background-color: blue;
` 

const SubContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`


const Home = ({user}) => {

    const { data, loading } = useQuery(COACH_CONSOLE_QUERY, {
        variables: {
            id: user.team.id
        }
    })

    if(loading) return <p>Loading...</p>

    const { getTeamById: team } = data

    return ( 
        <Console>
            <Container>
                <StatsContainer>
                    <StatContainer>
                        <span>Total Athletes</span>
                        <h2>{team.athletes.length}</h2>
                    </StatContainer>
                    <StatContainer>
                        <span>Total Coaches</span>
                        <h2>{team.coaches.length}</h2>
                    </StatContainer>
                    <StatContainer>
                        <span>Total Workouts</span>
                        <h2>{team.library.length}</h2>
                    </StatContainer>
                    <StatContainer>
                        <span>Total Workouts Completed</span>
                        <h2>number</h2>
                    </StatContainer>                
                    <StatContainer>
                        <span>Total Time Training</span>
                        <h2>number</h2>
                    </StatContainer>
                </StatsContainer>

                <SubContainer>
                    <RecentActivity />
                    <Resources />
                </SubContainer>

            </Container>
        </Console>
    )
}

export default Home