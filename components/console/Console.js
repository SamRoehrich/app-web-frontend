//console layout

import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'

import Sidebar from './Console_Sidebar'
import RenderConsoleView from './RenderConsoleView'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`

const Console = ({children}) => {

    return (
        <Container>
            <Sidebar />
            {children}
        </Container>
    )
}

export default Console