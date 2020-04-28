import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

import { GET_ATHLETE_BY_ID } from '../../lib/querys'

import Console from '../../components/console/Console'
import Athlete from '../../components/athlete/Athlete'

const AthletePage = () => {
    const router = useRouter()
    const { athleteid } = router.query
    const { data, loading } = useQuery(GET_ATHLETE_BY_ID, {
        variables: {
            id: athleteid
        }
    })
    
    if(loading) return <p>Loading</p>

    return (
        <Console>
            <Athlete data={data}/>
        </Console>
    )
}

export default AthletePage