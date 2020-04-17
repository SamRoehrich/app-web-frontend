//form to create workouts
//list all workouts
//view information about workouts like who made it
//who is doing it
//filter by workout catagory

import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'

import { WORKOUT_LIST_QUERY } from '../lib/querys'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const List = styled.div`
    height: 100%;
    width: 50%
`

const Edit = styled.div`
    height: 100%;
    width: 50%;
`

const Workouts = ({user}) => {

    const { data, loading } = useQuery(WORKOUT_LIST_QUERY, {
        variables: {
            id: user.team.id
        }
    })

    if(loading) return <p>Loading....</p>


    return (
        <Container>
            <List>
                {
                    data.getTeamById.library.map(workout => (
                        <p>{workout.title}</p>
                    ))
                }
            </List>
            <Edit>
                <p>2 tab view</p>
                <p>One allows you to edit the workout</p>
                <p>the other shows information about who is doing it</p>
            </Edit>
        </Container>
    )
}

export default Workouts