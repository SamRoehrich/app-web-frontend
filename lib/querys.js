import gql from 'graphql-tag'

export const GET_ATHLETE_BY_ID = gql`
    query GET_ATHLETE_BY_ID($id: String!) {
        getAthleteById(id: $id) {
            id
            user {
                fullName
            }
            phase 
            injuryStatus
            stats {
                lengthUnit
                weightUnit
                apeIndex
                height
                weight
                SWREdge
                SWRBar
            }
            workouts {
                id
                title
                catagory
            }
            logBook {
                createdAt
                workout {
                    catagory
                    title
                }
            }
        }
    }
`

export const CURRENT_USER_QUERY = gql`
    query CURRENT_USER_QUERY {
        currentUser{
            id
            fullName
            userType
            team {
                id
                teamName
            }
        }
    }
`

export const WORKOUT_LIST_QUERY = gql`
    query WORKOUT_LIST_QUERY($id: String!) {
        getTeamById(id: $id) {
            library {
                title
                description
                catagory
            }
        }
    }
`

export const COACH_CONSOLE_QUERY = gql`
    query COACH_CONSOLE_QUERY($id: String!) {
        getTeamById(id: $id) {
            library {
                title
            }
            athletes {
                id
                athleteToTeamStartDate
                athleteCLimbingStartDate
                phase
                injuryStatus
                strengths
                weaknesses
                logBook {
                    createdAt
                    workout {
                        title
                    }
                }
                goals {
                    seasonGoal
                    yearGoal
                    competitionGoal
                }
                user {
                    id
                    fullName
                    DOB
                }
            }
            coaches {
                id
                user {
                    fullName
                    id
                }
            }
        }
    }
`

export const COACH_TO_TEAM_QUERY = gql`
    query COACH_TO_TEAM_QUERY($id: String!) {
        getTeamById(id: $id) {
            athletes {
                id
                athleteToTeamStartDate
                athleteCLimbingStartDate
                user {
                    id
                    fullName
                    age
                }
            }
            coaches {
                id
                user {
                    fullName
                    id
                }
            }
        }
    }
`

export const HOME_VIEW_QUERY = gql`
    query HOME_VIEW_QUERY($id: String!) {
        getTeamById(id: $id) {
            athletes {
                id
                user {
                    id
                    fullName
                }
            }
            coaches {
                id
                user {
                    fullName
                    id
                }
            }
            posts {
                id
            }
            subTeams {
                id
            }
        }
    }
`
export const ATHLETE_LIST_QUERY = gql`
    query ATHLETE_LIST_QUERY{
        getAthletes {
            id
            user {
                fullName
            }
        }
    }
`