import styled from 'styled-components'
import { useRouter } from 'next/router'


const SidebarLink = ({ children, href }) => {
    
    const router = useRouter()
    //href must include /
    const active = router.pathname === href

    const StyledLink = styled.a`
        height: 7.5vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 20px;
        background-color: ${ active ? 'blue' : 'green' };
        color: ${ active ? 'white' : 'black'};
    `;


    return (
        <StyledLink href={href} onClick={() => {}}>
                {children}
        </StyledLink>
    )
}

export default SidebarLink