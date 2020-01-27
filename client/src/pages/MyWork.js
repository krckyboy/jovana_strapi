import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components/macro'
import PaginationControls from '../components/PaginationControls.js'
import { device } from '../styles/breakPoints'
import fetchProducts from '../api/fetchProducts'
import queryString from 'query-string'

const ImgContainer = styled.div`
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

const Img = styled.img`
	max-width: 100%;
	width: 100%;
	object-fit: cover;
	max-height: 25rem;
	margin-bottom: 2.4rem;
	&:last-of-type {
		margin-bottom: 0;
		margin-right: 0;
	}

	@media only screen and ${device.tablet} {
		max-width: 35rem;
	}

	@media only screen and ${device.laptopM} {
		max-width: 31.5%;
		margin-left: 1.2rem;
		margin-right: 1.2rem;
		&:nth-child(3n + 1) {
			margin-left: 0;
		}
		&:nth-child(3n + 3) {
			margin-right: 0;
		}
		&:last-of-type {
			margin-bottom: 2.4rem;
		}
	}
`

const Section = styled.section`
	max-width: 42.4rem;
	margin-left: auto;
	margin-right: auto;
	padding: 0 2.4rem;
	@media only screen and ${device.tablet} {
		max-width: 120rem;
	}
	@media only screen and ${device.laptopM} {
		width: 100%;
	}
`

function Products({ products }) {
	if (!products) {
		return <span>{''}</span>
	} else {
		return products.map((product, index, arr) => (
			<Img key={product.id} src={product.image.url} alt={product.title} />
		))
	}
}

export default function MyWork({ location, history }) {
	// Actual products
	const [products, setProducts] = useState(null)

	// Reloads if error
	const [reload, setReload] = useState(false)

	// Fetching the page number from query string and then putting
	// that value into state for re-rendering purpose.
	const { page: parsedPage } = queryString.parse(location.search)
	const [page, setPage] = useState(parsedPage || 1)

	// Getting the calculated final/last page number to be passed to PaginationControls.
	const [finalPage, setFinalPage] = useState(1)

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		;(async () => {
			setLoading(true)

			try {
				const data = await fetchProducts(page)
				const { products, pagesCount } = data
				setProducts(products)
				setFinalPage(pagesCount)
				setLoading(false)
				window.scrollTo(0, 0)
			} catch (e) {
				setReload(!reload)
			}
		})()
	}, [page, reload])

	function updatePage(page) {
		history.push({
			pathname: '/radovi',
			search: `?page=${page}`,
		})

		setPage(page)
	}

	return (
		<Layout>
			<main className={'content'}>
				<Section className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop containerCommon">
					<h1 className="h1">Radovi</h1>
					<ImgContainer className={loading && 'lowOpacity'}>
						<Products products={products} />
					</ImgContainer>
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
