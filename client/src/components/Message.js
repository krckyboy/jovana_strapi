import React from 'react'
import styled from 'styled-components/macro'
import colors from '../styles/colors'

const Container = styled.div`
	position: absolute;
	color: ${colors.common};
	bottom: -100%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 0 auto;
	display: block;
	padding: 1.6rem;
	width: 100%;
`

const Text = styled.span`
	color: white;
	margin: 0 auto;
	text-align: center;
	display: block;
	font-weight: 600;
	font-size: 1.4rem;
`

export default function(props) {
	if (props.message.text) {
		return (
			<Container style={{ backgroundColor: colors[props.message.type] }}>
				<Text>{props.message.text}</Text>
			</Container>
		)
	}

	return ''
}
