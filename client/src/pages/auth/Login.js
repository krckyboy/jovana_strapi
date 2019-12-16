import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import logo from '../../assets/images/svg/logo.svg'
import styled from 'styled-components/macro'
import colors from '../../styles/colors'
import Button from '../../components/Button'
import useInputState from '../../hooks/useInputState'
import login from '../../api/login'
import { AuthenticationContext } from '../../contexts/authenticationContext'
import { Redirect } from 'react-router-dom'

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 3.2rem;
	background-color: #fff;
	padding: 2.4rem;
	border-top: 3px solid ${colors.primary};
	border-radius: 0 0 6px 6px;
`

const Main = styled.main`
	width: 100%;
	max-width: 42rem;
`

const Input = styled.input`
	width: 100%;
	margin-top: 1.2rem;
	background-color: ${colors.backgroundColor};
	border: 2px solid ${colors.primary};
	padding: 1.2rem;
	border-radius: 6px;
	font-family: 'Work Sans', sans-serif;
`

const FormGroup = styled.div`
	&:first-child {
		margin-bottom: 2.4rem;
	}
`

const Label = styled.label`
	font-size: 1.6rem;
	font-weight: 500;
	color: ${colors.common};
`

const loginButtonStyle = {
	marginTop: '3.2rem',
}

// @todo (0) Show message if success or failed via message context (new dispatch)
export default function Login() {
	const { authentication: auth, dispatch } = useContext(AuthenticationContext)
	const { value: username, handleChange: handleChangeLogin } = useInputState(
		''
	)

	const {
		value: password,
		handleChange: handleChangePassword,
	} = useInputState('')

	async function handleSubmit(e) {
		e.preventDefault()
		const data = await login({ identifier: username, password })
		if (data.error) {
			dispatch({
				type: 'LOGIN_FAILURE',
			})
			// @todo (1) Display message for invalid credentials
		} else {
			// Set token and user inside context state
			// @todo (2) Display message for successful login
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: data,
			})
		}
	}

	if (auth.token) {
		return <Redirect to={'/'} />
	}

	return (
		<Layout>
			<Main
				className={
					'content sectionSpacingFullTop containerCommon horizontalPadding'
				}
			>
				<img src={logo} alt={'Logo'} />
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label htmlFor={'username'}>Username</Label>
						<Input
							id={'username'}
							onChange={handleChangeLogin}
							value={username}
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor={'password'}>Password</Label>
						<Input
							id={'password'}
							type={'password'}
							value={password}
							onChange={handleChangePassword}
						/>
					</FormGroup>
					<Button style={loginButtonStyle} type={'primary'}>
						Ulogujte se
					</Button>
				</Form>
			</Main>
		</Layout>
	)
}
