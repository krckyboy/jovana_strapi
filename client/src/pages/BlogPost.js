import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components/macro'
import GoBack from '../components/GoBack'
import fetchSingleBlog from '../api/fetchSingleBlog'
import colors from '../styles/colors'
import marked from 'marked'
import apiWrapper from '../utils/apiWrapper'
import { Redirect } from 'react-router-dom'
import { AuthenticationContext } from '../contexts/authenticationContext'
import options from '../assets/images/svg/threeDots.svg'
import editIcon from '../assets/images/svg/edit.svg'
import deleteIcon from '../assets/images/svg/delete.svg'

// h2 === SubHeading, the rest of the headings are just fallbacks
const BodyContainer = styled.div`
	& p {
		font-size: 1.5rem;
		letter-spacing: 1px;
		margin: 2.4rem 0;
		line-height: 135%;
		& + p {
			margin-top: 0;
		}

		& + h2,
		& + h1,
		& + h3,
		& + h4,
		& + h5 {
			margin-top: 4.8rem;
		}
	}
	& h2, // h2 is the subheading here
	& h1,
	& h3,
	& h4,
	& h5,
	& h6 {
		font-size: 1.8rem;
		font-weight: 700;
		position: relative;
		color: ${colors.primary};
		margin-bottom: 3.2rem;
		padding-left: 8px;

		&:after {
			position: absolute;
			content: '';
			height: 2.9rem;
			width: 3px;
			top: -3px;
			left: 0;
			background: ${colors.primary};
		}

		& + p {
			margin-top: 0;
		}
	}
`

const Img = styled.img`
	max-width: 100%;
	margin-bottom: 3.2rem;
	height: 25rem;
	width: 100%;
	object-fit: cover;
`

const Options = styled.img`
	cursor: pointer;
`

const NavOptionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.6rem;
`

const AdminOptionsContainer = styled.div`
	z-index: 99999;
	position: absolute;
	background-color: white;
	padding: 2rem;
	border-radius: 1rem;
	min-width: 18rem;
	display: flex;
	top: 4rem;
	right: 0;

	li {
		font-size: 1.3rem;
		cursor: pointer;
		display: flex;
		text-align: left;
		align-items: center;
		& > img {
			margin-right: 0.8rem;
		}
	}

	li:nth-child(2) {
		margin-top: 1rem;
		color: ${colors.failure};
	}
`

const AdminOptionsUl = styled.ul`
	margin: 0 auto;
	display: inline-block;
	text-align: center;
`

const OptionsContainer = styled.div`
	position: relative;
`

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.65);
	z-index: 9999;
	color: white;
`

function AdminOptions() {
	return (
		<AdminOptionsContainer>
			<AdminOptionsUl>
				<li>
					<img src={editIcon} alt={'Edit'} />
					Edit project
				</li>
				<li>
					<img src={deleteIcon} alt={'Delete'} />
					Delete project
				</li>
			</AdminOptionsUl>
		</AdminOptionsContainer>
	)
}

// @todo Add options when logged (edit / delete)
function BlogPost({ blogData, isAuthenticated }) {
	const {
		body,
		title,
		id,
		image: { url: imageUrl },
	} = blogData

	function getMarkDownText() {
		const rawMarkup = marked(body, { sanitize: true })
		return { __html: rawMarkup }
	}

	const [isOpenOptions, toggleIsOpenOptions] = useState(false)

	useEffect(() => {
		document.body.style.overflow = isOpenOptions ? 'hidden' : ''
	}, [isOpenOptions])

	return (
		<>
			{isOpenOptions && isAuthenticated && (
				<Overlay onClick={() => toggleIsOpenOptions(false)} />
			)}
			<NavOptionsContainer>
				<GoBack />
				<OptionsContainer>
					{isAuthenticated && (
						<Options
							src={options}
							alt={'Options'}
							onClick={() => toggleIsOpenOptions(!isOpenOptions)}
						/>
					)}
					{isOpenOptions && isAuthenticated && <AdminOptions />}
				</OptionsContainer>
				{/*	@todo Add options toggle on / off */}
			</NavOptionsContainer>
			<Img src={imageUrl} alt={title} />
			<h1 className="h1">{title}</h1>
			<BodyContainer dangerouslySetInnerHTML={getMarkDownText()} />
		</>
	)
}

export default function Blog({ match }) {
	const [blog, setBlog] = useState(null)
	const blogId = match.params.id

	const { dispatch: authDispatch, authentication: auth } = useContext(
		AuthenticationContext
	)

	// Redirect to blog
	const [goBackToBlogs, setGoBackToBlogs] = useState(false)

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
			<main className={'content'}>
				<div className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop containerCommon">
					{blog && (
						<BlogPost
							blogData={blog}
							isAuthenticated={Boolean(
								auth && auth.token && auth.user
							)}
						/>
					)}
				</div>
			</main>
		</Layout>
	)
}
