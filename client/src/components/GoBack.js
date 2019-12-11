import React from 'react'
import goBackArrow from '../assets/images/svg/arrowLeftGoBack.svg'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Container = styled.div`
	display: inline-flex;
	align-items: center;
	margin-bottom: 1.6rem;
	& img {
		margin-right: 1.2rem;
	}
	& span {
		font-size: 1.4rem;
		letter-spacing: 1px;
		font-weight: 500;
	}
`

export default function GoBack() {
	return (
		<div>
			<Link to={process.env.PUBLIC_URL + '/blog'}>
				<Container>
					<img src={goBackArrow} alt='Go back' />
					<span>Nazad</span>
				</Container>
			</Link>
		</div>
	)
}
