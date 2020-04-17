//main page
//will load public landing page if no user signed in
//will load console depending on user type

import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

import { CURRENT_USER_QUERY } from '../lib/querys'

import CoachConsole from '../components/CoachConsole'
import ConsoleHome from '../components/console/Console_Home'
import PublicLandingPage from '../components/PublicLandingPage'

const Title = styled.h1`
    font-size: 60px;
    color: ${({ theme }) => theme.colors.primary};
`

function HomePage() {
    const { data, loading } = useQuery(CURRENT_USER_QUERY)
    const router = useRouter()

    if(loading) return <p>Loading...</p>

    if(!data) return <PublicLandingPage />
    if(data.currentUser.userType === 'COACH') {
        return <ConsoleHome user={data.currentUser}/> 
    }
    // if(data.currentUser.userType === 'ATHLETE') {
    //     <AthleteConsole user={data.currentUser} />
    //  }
}

export default HomePage