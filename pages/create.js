import styled from 'styled-components'

import Console from '../components/console/Console'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

const CreatePage = () => {

    return (
        <Console>
            <Container>
                <p>Tabs at the top of this component to create</p>
                <p>subteams, athletes, workouts, posts</p>

            </Container>
        </Console>
    )
}

export default CreatePage