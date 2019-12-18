import React from 'react'
import Layout from '../../components/layout/Layout'
import styled from 'styled-components/macro'
import colors from '../../styles/colors'
import Button from '../../components/Button'
import axios from 'axios'

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

const TextArea = styled.textarea`
	width: 100%;
	margin-top: 1.2rem;
	background-color: ${colors.backgroundColor};
	border: 2px solid ${colors.primary};
	padding: 1.2rem;
	border-radius: 6px;
	max-width: 100%;
	font-family: 'Work Sans', sans-serif;
`

const FormGroup = styled.div`
	&:not(:last-of-type) {
		margin-bottom: 2.4rem;
	}
`

const Label = styled.label`
	font-size: 1.6rem;
	display: block;
	font-weight: 500;
	color: ${colors.common};
`

const loginButtonStyle = {
	marginTop: '3.2rem',
}

export default function NewBlogPost() {
	console.log('From actual NewBlogPost', axios.defaults.headers.common)
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
				<h1 className="h1">Dodavanje posta</h1>
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label htmlFor={'title'}>Naslov</Label>
						<Input required id={'title'} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor={'description'}>Opis</Label>
						<TextArea required rows="4" id={'description'} />
					</FormGroup>
					<FormGroup>
						<Label htmlFor={'text'}>Tekst</Label>
						<Input required id="text" />
					</FormGroup>
					<FormGroup>
						<Label htmlFor={'image'}>Slika</Label>
						<Input required id="image" type={'file'} />
					</FormGroup>
					<Button style={loginButtonStyle} type={'primary'}>
						Kreiraj post
					</Button>
				</Form>
			</Main>
		</Layout>
	)
}
