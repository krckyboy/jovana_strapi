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
	cursor: pointer;
`

export default function PaginationControls({ page, updatePage, finalPage }) {
	// If no query string or page === 1, disable left arrow
	function previousPage() {
		if (page > 1) {
			updatePage(Number(page) - 1)
		}
	}

	// If already final page, do nothing
	function nextPage() {
		if (page < finalPage) updatePage(Number(page) + 1)
	}

	return (
		<ControlContainers>
			<Arrow
				src={arrowLeft}
				alt="Left"
				onClick={previousPage}
				className={page === 1 && 'disabled'}
			/>
			<Arrow
				src={arrowRight}
				alt="Right"
				onClick={nextPage}
				className={page >= finalPage && 'disabled'}
			/>
		</ControlContainers>
	)
}

PaginationControls.defaultProps = {
	page: 1,
}
