import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components/macro'
import SubHeading from '../components/SubHeading'
import GoBack from '../components/GoBack'
import P from '../components/P'

const Img = styled.img`
	max-width: 100%;
	margin-bottom: 3.2rem;
	max-height: 35rem;
	width: 100%;
	object-fit: cover;
`
export default function Blog() {
	return (
		<Layout>
			<main>
				<div className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop containerCommon">
					<GoBack />
					<Img src="/images/jovana.jpg" alt="Jovana" />
					<h1 className="h1">Osmeh je zdravlje</h1>
					<SubHeading>
						<span>Misli i emocije</span>
					</SubHeading>
					<P>
						Chupa chups jelly-o tootsie roll gingerbread macaroon
						wafer macaroon. Jelly tootsie roll halvah sweet danish
						lemon drops bonbon. Chocolate bar cheesecake caramels
						cookie gummies.
					</P>
					<P>
						Chocolate cake tiramisu dessert powder fruitcake.
						Chocolate chocolate cake gummies. Sweet icing danish
						danish brownie oat cake jujubes sweet. Bear claw sweet
						roll gummi bears danish cake candy canes chupa chups.
						Chupa chups jelly-o tootsie roll gingerbread macaroon
						wafer macaroon. Jelly tootsie roll halvah sweet danish
						lemon drops bonbon. Chocolate bar cheesecake caramels
						cookie gummies.
					</P>
					<SubHeading>
						<span>Sarma i punjena paprika</span>
					</SubHeading>
					<P>
						Chupa chups jelly-o tootsie roll gingerbread macaroon
						wafer macaroon. Jelly tootsie roll halvah sweet danish
						lemon drops bonbon. Chocolate bar cheesecake caramels
						cookie gummies.
					</P>
					<P>
						Chocolate cake tiramisu dessert powder fruitcake.
						Chocolate chocolate cake gummies. Sweet icing danish
						danish brownie oat cake jujubes sweet. Bear claw sweet
						roll gummi bears danish cake candy canes chupa chups.
						Chupa chups jelly-o tootsie roll gingerbread macaroon
						wafer macaroon. Jelly tootsie roll halvah sweet danish
						lemon drops bonbon. Chocolate bar cheesecake caramels
						cookie gummies.
					</P>
				</div>
			</main>
		</Layout>
	)
}
