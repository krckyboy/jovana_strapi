import React from 'react'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Button from '../Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { device } from '../../styles/breakPoints'

const images = [
	{ src: '/images/ravna_gora_grp.jpg', alt: 'Ravna Gora' },
	{ src: '/images/jovana.jpg', alt: 'Jovana' },
	{ src: '/images/ravna_gora_grp.jpg', alt: 'Ravna Gora' },
	{ src: '/images/ravna_gora_grp.jpg', alt: 'Ravna Gora' },
	{ src: '/images/jovana.jpg', alt: 'Jovana' },
	{ src: '/images/ravna_gora_grp.jpg', alt: 'Ravna Gora' },
]

const imagesMappedCarousel = images.map((i, index) => (
	<img key={index * Math.random()} src={i.src} alt={i.alt} />
))

// Hide when certain screen width
const CarouselStyled = styled(Carousel)`
	@media only screen and ${device.tablet} {
		display: none;
	}
`

function RadoviCarousel() {
	return (
		<CarouselStyled
			style={styles}
			showThumbs={false}
			showStatus={false}
			swipeScrollTolerance={50}
			showArrows={false}
			autoPlay={true}
		>
			{imagesMappedCarousel.map((i, index) => (
				<div key={index * Math.random()}>{i}</div>
			))}
		</CarouselStyled>
	)
}

// *********************************
// Desktop images
// *********************************

// Show when certain screen width
const RadoviDesktopContainer = styled.div`
	display: none;
	@media only screen and ${device.tablet} {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(5, 7vw);
		grid-gap: 15px;
		padding: 0 2.4rem;
		width: 100%;
		max-width: initial;
	}
`

const ImgDesktop = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const imagesMappedDesktop = images.map((i, index) => (
	<figure
		key={index * Math.random()}
		className={`gallery__item gallery__item--${index + 1}`}
	>
		<ImgDesktop src={i.src} alt={i.alt} />
	</figure>
))

function RadoviDesktop() {
	return (
		<RadoviDesktopContainer>{imagesMappedDesktop}</RadoviDesktopContainer>
	)
}

const MojiRadoviSection = styled.section`
	max-width: 42.4rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and ${device.tablet} {
		max-width: 120rem;
	}
`

export default function MojiRadoviComp() {
	return (
		<MojiRadoviSection className="sectionSpacingFullBottom horizontalPadding">
			<h2 className="h2">Radovi</h2>
			<RadoviCarousel autoPlay={true} />
			<RadoviDesktop />
			<Link
				to="/radovi"
				style={{
					display: 'inline-block',
					marginTop: '6.4rem',
				}}
			>
				<Button type="primary">Svi Radovi</Button>
			</Link>
		</MojiRadoviSection>
	)
}
