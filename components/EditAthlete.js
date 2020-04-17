//heavy component
//needs to load an editable table as well resources like
//videos, workouts

import styled from 'styled-components'

import { useLocalState } from './LocalState'
import { getStaticResults } from '../lib/utils'

import PrimaryText from './styled/PrimaryText'
import SecondaryText from './styled/SecondaryText'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const LeftSide = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
`

const RightSide = styled.div`
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: column;
`

const Info = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const InfoItem = styled.div`
    height: 50%;
    width: 25%;
    display: flex;
    flex-direction: column;
`

const ActivityLog = styled.div`
    height: 80%;    
    width: 100%;
    background-color: violet;
`

const UpdateAthlete = styled.div`
    height: 100%;
    width: 100%;
    background-color: papayawhip;
`

const EditAthlete = () => {

    const { selectedAthlete } = useLocalState()

    if(selectedAthlete === '' ) {
        return (
            <Container />
        )
    }

    if(selectedAthlete.user)
        {
            const { age, ageCat, yearsClimbing, yearsOnTeam } = getStaticResults(selectedAthlete)
            return (
                <Container>
                   <LeftSide>
                    <PrimaryText>{selectedAthlete.user.fullName}</PrimaryText>
                        <Info>
                            <InfoItem>
                                <SecondaryText>
                                    Age
                                </SecondaryText>
                                <PrimaryText>
                                    {age}
                                </PrimaryText>
                            </InfoItem>
                            <InfoItem>
                                <SecondaryText>
                                    Age Catagory
                                </SecondaryText>
                                <PrimaryText>
                                    {ageCat}
                                </PrimaryText>
                            </InfoItem>
                            <InfoItem>
                                <SecondaryText>
                                    Years climbing
                                </SecondaryText>
                                <PrimaryText>
                                    {yearsClimbing}
                                </PrimaryText>
                            </InfoItem>
                            <InfoItem>
                                <SecondaryText>
                                    Years on Team
                                </SecondaryText>
                                <PrimaryText>
                                    {yearsOnTeam}
                                </PrimaryText>
                            </InfoItem>
                        </Info>
                        <ActivityLog>
                            <PrimaryText>
                                TODO: List 10 most recent events to be logged
                                <br/>
                                Example: workouts and comps
                            </PrimaryText>
                        </ActivityLog>
                   </LeftSide>
                    <RightSide>
                        <UpdateAthlete>
                            <p>TODO: change athlete information</p>
                        </UpdateAthlete>
                    </RightSide>
        
                </Container>
            )
        
        }

}

export default EditAthlete


//ATHLETE STATS
// id: ID! 
// athlete: Athlete!
// createdAt: String!
// createdBy: Coach!
// apeIndex: Int!
// height: Int!
// weight: Int!
// maxVGrade: Int!
// maxSportGrade: String!
// maxEdgeLoad: Int!
// maxEdgeTestSize: Int!
// SWREdge: Float
// maxPullLoad: Int!
// SWRBar: Float
// oneArmHangLoadLeft: Int!
// oneArmHangLoadRight: Int!
// oneArmHangSWR: Float
// goalVGrade: Int!
// goalSportGrade: String!