import gql from 'graphql-tag'

export const LOGIN_USER_MUTATION = gql `
    mutation LOGIN_USER_MUTATION($email: String! $password: String!) {
        loginUser(email: $email password: $password) {
            user {
                fullName
                userType
            }
        }
    }
`