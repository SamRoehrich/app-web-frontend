import styled from 'styled-components'
import { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'

import { LOGIN_USER_MUTATION } from '../lib/mutations'

import Button from './styled/Button'

const Form = styled.form`
    background-color: whitesmoke;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Input = styled.input`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
`

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ loginUser, { data } ] = useMutation(LOGIN_USER_MUTATION)
    const router = useRouter()

    function resetState() {
        setPassword('')
        setEmail('')
    }

    return (
        <Form
            onSubmit={ async e => {
                e.preventDefault();
                await loginUser({ variables : { email, password }});
                resetState();
                router.push("/")
            }}>
            <Input 
                placeholder="Enter Email"
                value={email}
                onChange={ e => setEmail(e.target.value) }
            />

            <Input 
                placeholder="Enter Password"
                value={password}
                onChange={ e => setPassword(e.target.value) }
            />

            <Button type="submit">Login</Button>
        </Form>
    )
}

export default Login