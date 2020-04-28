import styled from 'styled-components'
import { useState } from 'react'

import PrimaryText from '../styled/PrimaryText'
import SecondaryText from '../styled/SecondaryText'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #00203FFF;
`

const Item = styled.div`
    height: 10%;
    width: 50%;
    display: flex;
    align-items: center;
    padding: 10px;
`

const Stats = ({stats}) => {
    console.log(stats)
    return (
        <Container>
            <Item>
                <PrimaryText>Height: {stats.height} inches</PrimaryText>
            </Item>
            <Item>
                <PrimaryText>Weight: {stats.weight} Pounds</PrimaryText>
            </Item>
            <Item>
                <PrimaryText>Ape Index: {stats.apeIndex} inches</PrimaryText>
            </Item>
            <Item>
                <PrimaryText>Strength to weight ratio Bar: {stats.SWRBar}</PrimaryText>
            </Item>
            <Item>
                <PrimaryText>Strength to weight ratio Edge: {stats.SWREdge}</PrimaryText>
            </Item>
            
        </Container>
    )
}

export default Stats