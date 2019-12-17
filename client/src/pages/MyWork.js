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
	justify-items: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
`

export default function MyWork() {
	return (
		<Layout>
			<main className={'content'}>
				<Section className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop containerCommon">
					<h1 className="h1">Radovi</h1>
					<ImgContainer>
						{images.map((image, index) => {
							return (
								<Img
									key={index * Math.random()}
									src={image.src}
									alt={image.alt}
								/>
							)
						})}
					</ImgContainer>
					<PaginationControls />
				</Section>
			</main>
		</Layout>
	)
}
