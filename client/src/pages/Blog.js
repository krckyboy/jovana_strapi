import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import BlogPostCard from '../components/Blogs/BlogPostCard'
import PaginationControls from '../components/PaginationControls'
import styled from 'styled-components/macro'
import { device } from '../styles/breakPoints'
import fetchBlogs from '../api/fetchBlogs'
import queryString from 'query-string'

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
	justify-content: space-between;
	transition: 0.2s opacity;
	@media only screen and ${device.laptopM} {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
`

function Blogs({ blogs }) {
	if (!blogs) {
		return <span>{''}</span>
	} else {
		return blogs.map((b, i) => (
			<StyledBlogPostCard
				src={b.image.url}
				alt={b.alt}
				title={b.title}
				description={b.description}
				key={b.id}
				id={b.id}
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

export default function Blog({ location, history }) {
	const [blogs, setBlogs] = useState(null)

	// Fetching the page number from query string and then putting
	// that value into state for re-rendering purpose.
	const { page: parsedPage } = queryString.parse(location.search)
	const [page, setPage] = useState(parsedPage || 1)

	// Getting the final page number to be passed to PaginationControls.
	const [finalPage, setFinalPage] = useState(1)

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			setLoading(true)
			const { blogs, pagesCount } = await fetchBlogs(page)
			setBlogs(blogs)
			setFinalPage(pagesCount)
			setLoading(false)
			window.scrollTo(0, 0)
		})()
	}, [page])

	function updatePage(page) {
		history.push({
			pathname: '/blog',
			search: `?page=${page}`,
		})

		setPage(page)
	}

	return (
		<Layout>
			<main className={'content'}>
				<Section className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop containerCommon">
					<h1 className="h1">Blog</h1>
					<BlogPostContainer className={loading && 'lowOpacity'}>
						<Blogs blogs={blogs} />
					</BlogPostContainer>
					<PaginationControls
						updatePage={updatePage}
						page={page}
						finalPage={finalPage}
					/>
				</Section>
			</main>
		</Layout>
	)
}
