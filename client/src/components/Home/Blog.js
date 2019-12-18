import React, { useEffect, useState } from 'react'
import Button from '../Button'
import BlogPostCard from '../Blogs/BlogPostCard'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { device } from '../../styles/breakPoints'
import fetchLatestThreeBlogs from '../../api/fetchLatestThreeBlogs'

const BlogsContainer = styled.div`
	justify-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	@media only screen and ${device.laptopM} {
		flex-direction: row;
		align-items: center;
		& > div {
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

function Blogs({ blogs }) {
	if (!blogs) {
		return <span>''</span>
	} else {
		return blogs.map(b => (
			<BlogPostCard
				src={b.image.url}
				alt={b.alt}
				description={b.description}
				title={b.title}
				key={b.id}
				id={b.id}
			/>
		))
	}
}

export default function BlogComp() {
	const [blogs, setBlogs] = useState(null)
	useEffect(() => {
		;(async () => {
			const { blogs } = await fetchLatestThreeBlogs()
			setBlogs(blogs)
		})()
	}, [])
	return (
		<Section className="sectionSpacingFullBottom">
			<h2 className="h2">Blog</h2>
			<BlogsContainer>
				<Blogs blogs={blogs} />
			</BlogsContainer>
			<Link
				to="/blog"
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
