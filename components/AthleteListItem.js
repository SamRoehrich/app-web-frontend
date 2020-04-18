import styled from 'styled-components'

import { useLocalState } from './LocalState'

const Container = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const AthleteName = styled.h2`
    font-weight: 700;
    color: white;
`

const AthleteListItem = ({athlete}) => {
    const { setAthlete } = useLocalState()
    return (
        <Container key={athlete.id} onClick={() => setAthlete(athlete)}>
            <AthleteName>
                {athlete.user.fullName}
            </AthleteName>
        </Container>
    )
}

export default AthleteListItem