import colors from '../styles/colors'
import styled from 'styled-components/macro'

const SubHeading = styled.h2`
	font-size: 1.8rem;
	font-weight: 700;
	position: relative;
	color: ${colors.primary};
	margin-bottom: 3.2rem;

	&:after {
		position: absolute;
		content: '';
		height: 2.9rem;
		width: 3px;
		top: -3px;
		left: 0;
		background: ${colors.primary};
	}
	& span {
		margin-left: 8px;
	}

	& + p {
		margin-top: 0;
	}
`

export default SubHeading
