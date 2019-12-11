import React from 'react'
import styled from 'styled-components/macro'
import colors from '../styles/colors'
import { device } from '../styles/breakPoints'

const Button = styled.button`
	padding: 1.6rem 2.4rem;
	font-size: 1.6rem;
	font-weight: 700;
	//min-width: 13rem;
	letter-spacing: 1px;
	border-radius: 6.8rem;
	transition: transform 0.2s;
	border: ${props =>
		props.type === 'secondary' ? `2px solid ${colors.primary}` : 'none'};
	background-color: ${props => {
		if (props.type === 'primary') {
			return colors.primary
		} else if (props.type === 'secondary') return '#fff'
	}};
	color: ${props =>
		props.type === 'primary' ? colors.primaryContrast : colors.primary};

	&:hover {
		transform: translateY(-5%);
		background-color: ${props => {
			if (props.type === 'secondary') return `${colors.primaryFeintLight}`
		}};

		color: ${props => {
			if (props.type === 'primary') return `${colors.primaryFeint}`
		}};
	}

	&:hover a {
		color: white;
	}
	@media only screen and ${device.mobileM} {
		min-width: 14rem;
	}

	@media only screen and ${device.mobileL} {
		min-width: 16rem;
	}
`

export default function ButtonComp({ children, style, type }) {
	return (
		<Button style={style} type={type}>
			{children}
		</Button>
	)
}
