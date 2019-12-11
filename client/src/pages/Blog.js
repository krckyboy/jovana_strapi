import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import BlogPostCard from '../components/Blogs/BlogPostCard'
import PaginationControls from '../components/PaginationControls'
import styled from 'styled-components/macro'
import { device } from '../styles/breakPoints'
import fetchBlogs from '../api/fetchBlogs'

const StyledBlogPostCard = styled(BlogPostCard)`
	@media only screen and ${device.laptopL} {
		max-width: 33.33%;
	}
`

const BlogPostContainer = styled.div`
	margin-bottom: 7.2rem;
	justify-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and ${device.laptopM} {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
`

function Blogs({ blogs }) {
	if (!blogs) {
		return <span>Loading...</span>
	} else {
		return blogs.map((b, i) => (
			<StyledBlogPostCard
				src={b.image.url}
				alt={b.alt}
				title={b.title}
				body={b.body}
				key={i * Math.random()}
			/>
		))
	}
}

const Section = styled.section`
	max-width: 42.4rem;
	margin-left: auto;
	margin-right: auto;
	padding: 0 2.4rem;
	@media only screen and ${device.tablet} {
		max-width: 120rem;
	}
`

export default function Blog() {
	const [blogs, setBlogs] = useState(null)
	useEffect(() => {
		;(async () => {
			const blogs = await fetchBlogs()
			console.log('Blogs:', blogs)
			setBlogs(blogs)
		})()
	}, [])
	return (
		<Layout>
			<main>
				<Section className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop containerCommon">
					<h1 className="h1">Blog</h1>
					<BlogPostContainer>
						<Blogs blogs={blogs} />
					</BlogPostContainer>
					<PaginationControls />
				</Section>
			</main>
		</Layout>
	)
}
