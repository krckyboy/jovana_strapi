import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import logo from '../../assets/images/svg/logo.svg'
import styled from 'styled-components/macro'
import colors from '../../styles/colors'
import Button from '../../components/Button'
import useInputState from '../../hooks/useInputState'
import login from '../../api/login'
import { AuthenticationContext } from '../../contexts/authenticationContext'
import { MessagesContext } from '../../contexts/messagesContext'
import dispatchWithTimeoutDispatch from '../../contexts/utils/dispatchWithTimeoutDispatch'
import { Redirect } from 'react-router-dom'
import setAuthToken from '../../utils/setAuthToken'

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

export default function Login(props) {
	const { dispatch: dispatchAuth } = useContext(AuthenticationContext)
	const { dispatch: dispatchMessage, message } = useContext(MessagesContext)

	const { value: username, handleChange: handleChangeLogin } = useInputState(
		''
	)

	const [
		shouldRedirectToPreviousRoute,
		setShouldRedirectToPreviousRoute,
	] = useState(false)

	const [shouldGoToIndex, setShouldGoToIndex] = useState(false)

	const {
		value: password,
		handleChange: handleChangePassword,
	} = useInputState('')

	async function handleSubmit(e) {
		e.preventDefault()
		const data = await login({ identifier: username, password })
		if (data.error) {
			dispatchAuth({
				type: 'LOGIN_FAILURE',
			})

			dispatchWithTimeoutDispatch(
				dispatchMessage,
				{ type: 'LOGIN_FAILURE' },
				{ type: 'CLEAR_MESSAGE' },
				message
			)

			// Clear token from axios headers
			setAuthToken()
		} else {
			// Set token and user inside context state
			dispatchAuth({
				type: 'LOGIN_SUCCESS',
				payload: data,
			})

			dispatchWithTimeoutDispatch(
				dispatchMessage,
				{ type: 'LOGIN_SUCCESS' },
				{ type: 'CLEAR_MESSAGE' },
				message
			)

			// Set token inside axios headers
			setAuthToken(data.jwt)

			if (props.location.from && props.location.from.pathname) {
				setShouldRedirectToPreviousRoute(true)
			} else {
				setShouldGoToIndex(true)
			}
		}
	}

	if (shouldRedirectToPreviousRoute) {
		return <Redirect to={props.location.from.pathname} />
	}

	if (shouldGoToIndex) {
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
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor={'password'}>Password</Label>
						<Input
							id={'password'}
							type={'password'}
							value={password}
							onChange={handleChangePassword}
							required
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
