import React from 'react'
import colors from '../styles/colors'
import styled from 'styled-components/macro'

const Container = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

function Loader() {
	return (
		<Container>
			<Loader
				type="Oval"
				color={colors.primary}
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
		</Container>
	)
}

const Empty = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${colors.backgroundColor};
`

const Loading = () => {
	return <Empty />
}

export default Loading
