import React from 'react'
import Layout from '../components/layout/Layout'
import logo from '../assets/images/svg/logo.svg'
import styled from 'styled-components/macro'
import colors from '../styles/colors'
import Button from '../components/Button'

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

// @todo
//  Write a custom hook for input fields
// Hit the API for logging in with the correct fields
export default function Login() {
	function handleSubmit(e) {
		e.preventDefault()
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
						<Input id={'username'} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor={'password'}>Password</Label>
						<Input id={'password'} type={'password'} />
					</FormGroup>
					<Button style={loginButtonStyle} type={'primary'}>
						Ulogujte se
					</Button>
				</Form>
			</Main>
		</Layout>
	)
}
