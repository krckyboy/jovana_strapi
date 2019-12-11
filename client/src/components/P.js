import styled from 'styled-components/macro'

const P = styled.p`
	font-size: 1.5rem;
	letter-spacing: 1px;
	margin: 2.4rem 0;
	& + p {
		margin-top: 0;
	}

	& + h2 {
		margin-top: 4.8rem;
	}
`

export default P
