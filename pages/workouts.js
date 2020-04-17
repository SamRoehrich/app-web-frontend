import Console from '../components/console/Console'
import Workouts from '../components/Workouts'

import { useQuery } from '@apollo/react-hooks'

import {CURRENT_USER_QUERY} from '../lib/querys'

const WorkoutPage = () => {


    const { data, loading } = useQuery(CURRENT_USER_QUERY)

    if(loading) return <p>Loading...</p>


    return (
        <Console>
            <Workouts user={data.currentUser}/>
        </Console>
    )
}

export default WorkoutPage