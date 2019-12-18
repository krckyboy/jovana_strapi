import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components/macro'
import SubHeading from '../components/SubHeading'
import P from '../components/P'

const Img = styled.img`
	max-width: 100%;
	max-height: 25rem;
	width: 100%;
	object-fit: cover;
`

// Mini section typography margins need refactoring through CSS because of dynamic content.
export default function AboutMe() {
	return (
		<Layout>
			<main className={'content'}>
				<div className="horizontalPadding sectionSpacingFullBottom sectionSpacingFullTop containerCommon">
					<h1 className="h1">O meni</h1>
					<SubHeading>Kreator</SubHeading>
					<Img src="/images/jovana.jpg" alt="" />
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
					<P>
						Chupa chups jelly-o tootsie roll gingerbread macaroon
						wafer macaroon. Jelly tootsie roll halvah sweet danish
						lemon drops bonbon. Chocolate bar cheesecake caramels
						cookie gummies.
					</P>

					<SubHeading>Umetnik</SubHeading>
					<Img src="/images/jovana.jpg" alt="" />
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
					<P>
						Chupa chups jelly-o tootsie roll gingerbread macaroon
						wafer macaroon. Jelly tootsie roll halvah sweet danish
						lemon drops bonbon. Chocolate bar cheesecake caramels
						cookie gummies.
					</P>

					<SubHeading>Asistent režije</SubHeading>
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
