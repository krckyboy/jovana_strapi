import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import styled from 'styled-components/macro'
import colors from '../../styles/colors'
import Button from '../../components/Button'
import { AuthenticationContext } from '../../contexts/authenticationContext'
import apiWrapper from '../../utils/apiWrapper'
import fetchSingleBlog from '../../api/fetchSingleBlog'
import { Redirect } from 'react-router-dom'
import useInputState from '../../hooks/useInputState'

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

function BlogPostForm({ handleSubmit, blogData }) {
	const {
		value: title,
		handleChange: handleChangeTitle,
		setValue: setValueTitle,
	} = useInputState('')

	const {
		value: description,
		handleChange: handleChangeDescription,
		setValue: setValueDescription,
	} = useInputState('')

	const {
		value: body,
		handleChange: handleChangeBody,
		setValue: setValueBody,
	} = useInputState('')

	const [blogDataloaded, setBlogDataLoaded] = useState(false)

	if (blogData && blogDataloaded === false) {
		setBlogDataLoaded(true)
		setValueTitle(blogData.title)
		setValueDescription(blogData.description)
		setValueBody(blogData.body)
	}

	function handleSubmitForm() {
		handleSubmit()
	}

	return (
		<Form onSubmit={handleSubmitForm}>
			<FormGroup>
				<Label htmlFor={'title'}>Naslov</Label>
				<Input
					required
					id={'title'}
					value={title}
					onChange={handleChangeTitle}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor={'description'}>Opis</Label>
				<TextArea
					required
					rows="4"
					id={'description'}
					value={description}
					onChange={handleChangeDescription}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor={'text'}>Tekst</Label>
				<Input
					required
					id="text"
					value={body}
					onChange={handleChangeBody}
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor={'image'}>Slika</Label>
				<Input required id="image" type={'file'} />
			</FormGroup>
			<Button style={loginButtonStyle} type={'primary'}>
				Sačuvaj Izmene
			</Button>
		</Form>
	)
}

export default function EditBlogPost({ match }) {
	const [blog, setBlog] = useState(null)
	const blogId = match.params.id

	const { dispatch: authDispatch } = useContext(AuthenticationContext)

	// Redirect to blog
	const [goBackToBlogs, setGoBackToBlogs] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
	}

	useEffect(() => {
		;(async () => {
			// Checking if the API returns an error
			const data = await apiWrapper(
				() => fetchSingleBlog(blogId),
				authDispatch,
				() => setGoBackToBlogs(!goBackToBlogs)
			)

			// If there isn't an error, update data
			if (!data.error) {
				const { blogPost } = data
				setBlog(blogPost)
			}
		})()
	}, [blogId, goBackToBlogs, authDispatch])

	if (goBackToBlogs) {
		// @todo Could also add a specific 404 component for not found blog
		return <Redirect to={process.env.PUBLIC_URL + '/blog'} />
	}

	return (
		<Layout>
			<Main
				className={
					'content sectionSpacingFullTop containerCommon horizontalPadding'
				}
			>
				<h1 className="h1">Izmena posta</h1>

				<BlogPostForm handleSubmit={handleSubmit} blogData={blog} />
			</Main>
		</Layout>
	)
}
