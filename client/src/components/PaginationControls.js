import React from 'react'
import arrowLeft from '../assets/images/svg/arrowLeft.svg'
import arrowRight from '../assets/images/svg/arrowRight.svg'
import styled from 'styled-components/macro'

const ControlContainers = styled.div`
	display: flex;	
	justify-content: center;
`
const Arrow = styled.img`
	margin: 0 1.6rem;
`

export default function PaginationControls() {
	return (
		<ControlContainers>
			<Arrow src={arrowLeft} alt='Left' />
			<Arrow src={arrowRight} alt='Right' />
		</ControlContainers>
	)
}