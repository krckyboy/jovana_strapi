import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components/macro'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/images/svg/logo.svg'
import hamburger from '../../assets/images/svg/hamburger.svg'
import x from '../../assets/images/svg/x.svg'
import { device } from '../../styles/breakPoints'
import colors from '../../styles/colors'
import { MessagesContext } from '../../contexts/messagesContext'

import Message from '../Message'
import NavLinksComp from './Header/NavLinksComp'
import SocialIcons from './Header/SocialIcons'
import { AuthenticationContext } from '../../contexts/authenticationContext'
import setAuthToken from '../../utils/setAuthToken'

const SocialIconsContainerDesktop = styled.div`
	align-items: center;
	margin-left: auto;
	display: none;

	@media ${device.tablet} {
		display: flex;
	}

	& img {
		cursor: pointer;
		margin-left: 1rem;
		margin-right: 1rem;
		transition: transform 0.2s;
		&:hover {
			transform: translateY(-5%);
		}
	}
`

const Header = styled.header`
	height: 6.7rem;
	display: flex;
	width: 100%;
	background-color: ${colors.backgroundColorLayout};
	position: fixed;
	top: 0;
	z-index: 2;
	@media only screen and ${device.mobileL} {
		padding: 0 2.4rem;
	}
`

const ContentContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	max-width: 115rem;
	margin: 0 auto;
	justify-content: space-between;
`

const X = styled.img`
	right: 2.4rem;
	align-self: flex-end;
`

const Nav = styled.nav`
	display: flex;
	position: fixed;
	flex-direction: column;
	right: 0;
	background-color: rgba(255, 255, 255, 0.95);
	width: 60%;
	max-width: 30rem;
	height: 100vh;
	transform: ${props =>
		props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
	transition: transform 0.2s;
	padding: 2.4rem;
	@media only screen and ${device.mobileL} and (orientation: landscape) {
		display: none;
	}
	@media ${device.tablet} {
		display: none;
	}
`

const NavItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	font-size: 1.6rem;
	white-space: nowrap;
	letter-spacing: 1px;
	font-weight: 500;
	margin-top: 30%;
	position: relative;
	text-align: center;

	& button {
		font-size: 1.6rem;
		background-color: transparent;
		border: none;
		font-weight: 500;
	}
`

const HamburgerMenu = styled.img`
	display: block;
	align-self: center;
	height: 3.2rem;
	@media only screen and ${device.mobileL} and (orientation: landscape) {
		display: none;
	}
	@media ${device.tablet} {
		display: none;
	}
`

const SocialIconContainerMobile = styled.div`
	text-align: center;
	margin-top: auto;

	& img {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`

const NavDesktop = styled.div`
	display: none;
	font-size: 1.3rem;
	align-items: center;
	justify-self: center;
	font-weight: 500;
	white-space: nowrap;

	& > a,
	& > button {
		margin-left: 2.4rem;
		background-color: transparent;
		border: none;
		font-weight: 500;
		margin-right: 2.4rem;
		transition: opacity 1s;
		border-bottom: 2px solid transparent;
		&:hover {
			opacity: 1;
			color: ${colors.primary};
			border-bottom: 2px solid ${colors.primary};
		}
	}
	@media only screen and ${device.mobileL} and (orientation: landscape) {
		display: flex;
		position: initial;
		left: initial;
		top: initial;
		transform: initial;
		& > a,
		& > button {
			font-size: 1.4rem;
			margin-left: 0.8rem;
			margin-right: 0.8rem;
		}
	}
	@media only screen and ${device.tablet} {
		display: flex;
		font-size: 1.4rem;

		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		& > a {
			margin-left: 2.2rem;
			margin-right: 2.2rem;
		}
	}
	@media only screen and ${device.laptop} {
		font-size: 1.6rem;
		& > a,
		& > button {
			margin-left: 2.4rem;
			margin-right: 2.4rem;
		}
	}
`

function HeaderComp({ location }) {
	const [isOpen, setisOpen] = useState(false)
	const { message } = useContext(MessagesContext)
	const { authentication: auth } = useContext(AuthenticationContext)

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'initial'
	}, [isOpen])

	useEffect(() => {
		if (auth && auth.token) setAuthToken(auth.token)
	})

	function handleClick() {
		setisOpen(!isOpen)
	}

	function handleClickLogo() {
		const current = location.pathname
		if (current === '/') {
			window.scrollTo(0, 0)
		}
	}

	return (
		<Header className="horizontalPadding">
			<ContentContainer>
				<Link
					to={process.env.PUBLIC_URL + '/'}
					style={{ alignSelf: 'center' }}
					onClick={handleClickLogo}
				>
					<img src={logo} alt="Jovana Jevtic" />
				</Link>
				<NavDesktop>
					<NavLinksComp />
				</NavDesktop>
				<SocialIconsContainerDesktop>
					<SocialIcons />
				</SocialIconsContainerDesktop>
				<HamburgerMenu
					src={hamburger}
					onClick={handleClick}
					alt="Hamburger menu"
				/>
				<Nav onBlur={() => setisOpen(false)} isOpen={isOpen}>
					<X src={x} onClick={handleClick} alt="Hamburger menu" />
					<NavItemsContainer>
						<NavLinksComp />
					</NavItemsContainer>
					<SocialIconContainerMobile>
						<SocialIcons />
					</SocialIconContainerMobile>
				</Nav>
			</ContentContainer>
			{message && message.text && <Message message={message} />}
		</Header>
	)
}

export default withRouter(HeaderComp)
