import React from 'react'
import Button from '../Button'
import BlogPostCard from '../Blogs/BlogPostCard'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { device } from '../../styles/breakPoints'
import { fakeBlogDataHomePage } from './../../assets/data/fakeBlogsData'

const BlogsContainer = styled.div`
	justify-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and ${device.laptopM} {
		flex-direction: row;
		align-items: center;
		& > div {
			max-width: initial;
			margin-left: 1.2rem;
			margin-right: 1.2rem;
		}
	}
`

const Section = styled.section`
	max-width: 42.4rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and ${device.tablet} {
		max-width: 120rem;
		padding: 0 2.4rem;
	}
`

function Blogs() {
	return fakeBlogDataHomePage.map((b, i) => (
		<BlogPostCard
			src={b.src}
			alt={b.alt}
			title={b.title}
			body={b.body}
			key={i * Math.random()}
		/>
	))
}

export default function BlogComp() {
	return (
		<Section className="sectionSpacingFullBottom">
			<h2 className="h2">Blog</h2>
			<BlogsContainer>
				<Blogs />
			</BlogsContainer>
			<Link
				to="/radovi"
				style={{
					display: 'inline-block',
					marginTop: '6.4rem',
				}}
			>
				<Button type="primary">Svi blogovi</Button>
			</Link>
		</Section>
	)
}
