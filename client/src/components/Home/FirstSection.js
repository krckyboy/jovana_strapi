import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import colors from '../../styles/colors'
import styled from 'styled-components/macro'
import { device } from '../../styles/breakPoints'

const MainImg = styled.img`
	width: 45%;
	object-fit: cover;
	max-width: 100%;
`

const MainHeadingContainer = styled.h1`
	margin-top: 3.2rem;
`

const MainHeadingTop = styled.span`
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: 1px;
	display: block;
	@media only screen and ${device.mobileM} {
		font-size: 2.4rem;
	}
	@media only screen and ${device.tablet} {
		font-size: 2.8rem;
	}
	@media only screen and ${device.laptopM} {
		font-size: 4.4rem;
	}
`

const MainHeadingBottom = styled.span`
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: 1px;
	display: block;
	margin-top: 2.4rem;
	@media only screen and ${device.mobileM} {
		font-size: 1.8rem;
	}
	@media only screen and ${device.laptopM} {
		font-size: 2.4rem;
	}
`

const CtaContainer = styled.div`
	margin-top: 3.2rem;
	display: flex;
	align-items: center;
`

const SpecialWord = styled.span`
	color: ${colors.primary};
	position: relative;

	&:after {
		position: absolute;
		content: '';
		height: 5px;
		bottom: -7px;
		margin: 0 auto;
		left: -8px;
		right: 0;
		width: 110%;
		background: ${colors.primary};
	}
`

const Section = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 42.4rem;
	margin-left: auto;
	margin-right: auto;
	width: 100%;

	@media only screen and ${device.tablet} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 120rem;
		padding: 0 2.4rem;
	}
`

const TextContainer = styled.div`
	@media only screen and ${device.tablet} {
		width: 50%;
	}
`

export default function FirstSectionComp() {
	return (
		<Section className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop">
			<MainImg src={'/images/dummy/jovana.jpg'} alt="" />
			<TextContainer>
				<MainHeadingContainer>
					<MainHeadingTop>
						Zdravo! Ja sam Jovana i {<br />}ja sam{' '}
						<SpecialWord>slikar!</SpecialWord>
					</MainHeadingTop>
					<MainHeadingBottom>
						Dobrodošli u moj virtuelni dom!
					</MainHeadingBottom>
				</MainHeadingContainer>
				<CtaContainer>
					<Link to="/radovi" style={{ marginRight: '2.4rem' }}>
						<Button type="primary">Moji Radovi</Button>
					</Link>
					<Link to="/blog">
						<Button type="secondary">Blog</Button>
					</Link>
				</CtaContainer>
			</TextContainer>
		</Section>
	)
}
