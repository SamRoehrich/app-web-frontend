import Link from 'next/link'
import styled from 'styled-components'
import { useQuery } from 'react-apollo'

import { CURRENT_USER_QUERY } from '../lib/querys'

import Button from './styled/Button'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {

    const { data, loading } = useQuery(CURRENT_USER_QUERY)

    if(loading) return <p>Loading...</p>

    if(!data) return (
        <>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/login">
            <a>Login</a>
        </Link>
    </>
    )

    return (
        <HeaderContainer>
            
            
            { data.currentUser ?
                    <>
                        <p>{data.currentUser.team.teamName}</p>
                        <Button>{data.currentUser.fullName }</Button>
                    </>
                :
                    <>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </>
            } 
            
        </HeaderContainer>
    )
}

export default Header