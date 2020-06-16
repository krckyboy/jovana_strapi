import React from 'react'
import styled from 'styled-components/macro'
import colors from '../../styles/colors'
import { Link } from 'react-router-dom'
import { device } from '../../styles/breakPoints'

const BlogBodyContainer = styled.div`
	background-color: white;
	padding: 3.2rem 2.4rem;
	text-align: left;
	height: 28rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const BlogCardTitle = styled.h3`
	font-size: 1.6rem;
	letter-spacing: 1px;
	font-weight: 700;
	margin-bottom: 1.6rem;
`

const BlogCardParagraph = styled.p`
	font-size: 1.3rem;
	letter-spacing: 1px;
	line-height: 135%;
	font-weight: 500;
`

const Img = styled.img`
	height: 25rem;
	width: 100%;
	object-fit: cover;
`

const Container = styled.div`
	margin-bottom: 2.4rem;

	&:last-of-type {
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
	}
`

const BlogReadMore = styled(Link)`
	color: ${colors.primary};
	font-size: 1.4rem;
	padding-bottom: 0.2rem;
	font-weight: 500;
	transition: 0.2s all;
	border-bottom: 2px solid ${colors.primary};

	&:hover {
		padding: 1.2rem;
		font-size: 1.5rem;
		color: ${colors.primary};
		background-color: ${colors.primaryFeint};
		border-bottom: 4px solid ${colors.primary};
	}
`

const BlogReadMoreContainer = styled.div`
	margin-top: auto;
`

export default function BlogPostComp({ src, alt, id, description, title }) {
	// Function for truncating / limiting the text and adding '...' if needed.
	function truncateText(text, limit) {
		if (text && text.length > limit) {
			for (let i = limit; i > 0; i--) {
				if (
					text.charAt(i) === ' ' &&
					(text.charAt(i - 1) !== ',' ||
						text.charAt(i - 1) !== '.' ||
						text.charAt(i - 1) !== ';')
				) {
					return text.substring(0, i) + '..'
				}
			}
			return text.substring(0, limit) + '...'
		} else return text
	}

	const descriptionTruncated = truncateText(description, 220)
	const titleTruncated = truncateText(title, 40)
	return (
		<Container>
			<Img src={src} alt={alt} />
			<BlogBodyContainer>
				<BlogCardTitle>{titleTruncated}</BlogCardTitle>
				<BlogCardParagraph>{descriptionTruncated}</BlogCardParagraph>
				<BlogReadMoreContainer>
					<BlogReadMore to={`/blog/${id}`}>
						Pročitaj više
					</BlogReadMore>
				</BlogReadMoreContainer>
			</BlogBodyContainer>
		</Container>
	)
}
