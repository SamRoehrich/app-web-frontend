import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { ATHLETE_LIST_QUERY } from '../lib/querys'

const AthleteList = () => {
    const { data, loading } = useQuery(ATHLETE_LIST_QUERY)

    return <p>athleteList</p>
}

