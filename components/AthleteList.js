import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { ATHLETE_LIST_QUERY } from '../lib/querys'

import AthleteListItem from './AthleteListItem'

const Container = styled.div`
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
`

//gets athletes from parent component
const AthleteList = ({athletes}) => {
    return (
        <Container>
            {
                athletes.map(athlete => (
                    <AthleteListItem athlete={athlete} />
                ))
            }
        </Container>
    )
}

export default AthleteList