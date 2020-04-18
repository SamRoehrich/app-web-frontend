import styled from 'styled-components'

const Container = styled.ul`
    width: 100%;
    height: 50vh;
    color: black;
`

const List = ({ data }) => {
    return (
        <Container>
            {
                data.map(item => (
                    <ListItem item={item} />
                ))
            }
        </Container>
    )
}

export default List