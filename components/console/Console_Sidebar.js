//TODO: add an is-active class to Link elements 
//depending on the url 

import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import {useLocalState} from '../LocalState'
import SidebarLink from './styled/SidebarLink'

const Container = styled.div`
    background-color: #00203FFF;
    height: 100%;
    width: 14%;
    display: flex;
    flex-direction: column;
`

const Sidebar = () => {

    const router = useRouter()

    const { setLocalStateActiveTab } = useLocalState()

    return (
        <Container>
            <SidebarLink href="/">
                home
            </SidebarLink>
            <SidebarLink href="/athletes">
                athletes
            </SidebarLink>
            <SidebarLink href="/workouts">
                workouts
            </SidebarLink>
            <SidebarLink href="/create">
                create
            </SidebarLink>
            <SidebarLink href="/posts">
                posts
            </SidebarLink>
            <SidebarLink href="settings">
                settings
            </SidebarLink>
        </Container>
    )
}

export default Sidebar