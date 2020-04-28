import styled from 'styled-components'
const Container = styled.ul`
    width: 100%;
    height: 50vh;
    color: black;
`

const List = ({ data, ListItem }) => {
    return (
        <Container>
            {
                data.map(item => (
                    <ListItem>{item.title}</ListItem>
                ))
            }
        </Container>
    )
}

export default List