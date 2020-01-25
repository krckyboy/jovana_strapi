import { NavLink } from 'react-router-dom'
import React, { useContext } from 'react'
// import { AuthenticationContext } from '../../../contexts/authenticationContext'
// import { MessagesContext } from '../../../contexts/messagesContext'
// import dispatchWithTimeoutDispatch from '../../../contexts/utils/dispatchWithTimeoutDispatch'
import styled from 'styled-components/macro'

const navLinkStyle = {
	marginTop: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'pointer',
}

const ButtonLogOut = styled.button`
	position: relative;

	& span {
		opacity: 0;
	}

	&:hover span {
		opacity: 1;
	}
`

const Username = styled.span`
	position: absolute;
	bottom: -150%;
	left: 0;
`

export default function NavLinksComp() {
	// const { dispatch: dispatchAuth, authentication: auth } = useContext(
	// 	AuthenticationContext
	// )
	// const { dispatch: dispatchMsg, message } = useContext(MessagesContext)

	// function handleOnClickLogout() {
	// 	dispatchAuth({ type: 'LOGOUT' })
	// 	dispatchWithTimeoutDispatch(
	// 		dispatchMsg,
	// 		{ type: 'LOGOUT' },
	// 		{ type: 'CLEAR_MESSAGE' },
	// 		message
	// 	)
	// }

	return (
		<>
			{' '}
			<NavLink
				style={navLinkStyle}
				activeClassName="primaryColor"
				to={process.env.PUBLIC_URL + '/'}
				exact
			>
				Početna
			</NavLink>
			<NavLink
				style={navLinkStyle}
				activeClassName="primaryColor"
				to={process.env.PUBLIC_URL + '/o_meni'}
				exact
			>
				O meni
			</NavLink>
			<NavLink
				style={navLinkStyle}
				activeClassName="primaryColor"
				to={process.env.PUBLIC_URL + '/radovi'}
				exact
			>
				Radovi
			</NavLink>
			<NavLink
				style={navLinkStyle}
				activeClassName="primaryColor"
				to={process.env.PUBLIC_URL + '/blog'}
				exact
			>
				Blog
			</NavLink>
			{/*{auth && auth.token && auth.user && (*/}
			{/*	<ButtonLogOut*/}
			{/*		style={navLinkStyle}*/}
			{/*		onClick={handleOnClickLogout}*/}
			{/*	>*/}
			{/*		Izloguj se*/}
			{/*		<Username>({auth.user.username})</Username>*/}
			{/*	</ButtonLogOut>*/}
			{/*)}*/}
		</>
	)
}
