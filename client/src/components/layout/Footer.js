import React from 'react'
import styled from 'styled-components/macro'
import colors from '../../styles/colors'

const Footer = styled.footer`
	margin-top: auto;
	padding: 3.2rem 2.4rem;
	text-align: center;
	letter-spacing: 1px;
	font-size: 1.3rem;
	background-color: #fff;
	flex-shrink: 0;
`

const TopText = styled.p`
	margin-bottom: 1.2rem;
`

const TopTextEmphasized = styled.a`
	font-weight: 700;
	color: ${colors.primary};
`

export default function FooterComp() {
	return (
		<Footer>
			<TopText>
				Made by{' '}
				<TopTextEmphasized
					href="https://krcky.dev/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Dušan Todorović Krcky
				</TopTextEmphasized>
			</TopText>
			<p>Sva prava zadržana</p>
		</Footer>
	)
}
