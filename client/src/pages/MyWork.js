import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components/macro'
import PaginationControls from '../components/PaginationControls.js'
import { device } from '../styles/breakPoints'

const images = [
	{ src: '/images/prsten.jpg', alt: 'Prsten', id: 1 },
	{ src: '/images/mindjuse.jpg', alt: 'Mindjuse', id: 2 },
	{ src: '/images/ogrlica.jpg', alt: 'Ogrlica', id: 3 },
	{ src: '/images/prsten.jpg', alt: 'Prsten', id: 4 },
	{ src: '/images/mindjuse.jpg', alt: 'Mindjuse', id: 5 },
	{ src: '/images/ogrlica.jpg', alt: 'Ogrlica', id: 6 },
	{ src: '/images/prsten.jpg', alt: 'Prsten', id: 7 },
	{ src: '/images/mindjuse.jpg', alt: 'Mindjuse', id: 8 },
	{ src: '/images/ogrlica.jpg', alt: 'Ogrlica', id: 9 },
	{ src: '/images/prsten.jpg', alt: 'Prsten', id: 10 },
	{ src: '/images/mindjuse.jpg', alt: 'Mindjuse', id: 11 },
	{ src: '/images/ogrlica.jpg', alt: 'Ogrlica', id: 12 },
]

const ImgContainer = styled.div`
	margin-bottom: 7.2rem;
	@media only screen and ${device.tablet} {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(11, 9vw);
		grid-gap: 15px;
	}
	@media only screen and ${device.laptopM} {
		grid-template-rows: repeat(11, 5vw);
	}
`

const Figure = styled.figure`
	margin-bottom: 3.2rem;
	@media only screen and ${device.tablet} {
		margin-bottom: 0;
	}
`

const Img = styled.img`
	max-width: 100%;
	object-fit: cover;
	&:last-of-type {
		margin-bottom: 0;
	}

	@media only screen and ${device.tablet} {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Container = styled.div`
	max-width: 42.4rem;
	margin-left: auto;
	margin-right: auto;
	padding: 0 2.4rem;
	@media only screen and ${device.tablet} {
		max-width: 120rem;
	}
`

// todo -- Take into account dynamic content. You won't always have 12 images. Dynamic grid?
export default function MyWork() {
	return (
		<Layout>
			<main className={'content'}>
				<Container className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop containerCommon">
					<h1 className="h1">Radovi</h1>
					<ImgContainer>
						{images.map((image, index) => {
							return (
								<Figure
									key={index * Math.random()}
									className={`gallery__item gallery__item--${index +
										1}`}
								>
									<Img src={image.src} alt={image.alt} />
								</Figure>
							)
						})}
					</ImgContainer>
					<PaginationControls />
				</Container>
			</main>
		</Layout>
	)
}
