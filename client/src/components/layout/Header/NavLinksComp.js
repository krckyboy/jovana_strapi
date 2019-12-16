import { NavLink } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../contexts/authenticationContext'
import { MessagesContext } from '../../../contexts/messagesContext'
import dispatchWithTimeoutDispatch from '../../../contexts/utils/dispatchWithTimeoutDispatch'

const navLinkStyle = {
	marginTop: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'pointer',
}

export default function NavLinksComp() {
	const { dispatch: dispatchAuth, authentication: auth } = useContext(
		AuthenticationContext
	)
	const { dispatch: dispatchMsg, message } = useContext(MessagesContext)

	function handleOnClickLogout() {
		dispatchAuth({ type: 'LOGOUT' })
		dispatchWithTimeoutDispatch(
			dispatchMsg,
			{ type: 'LOGOUT' },
			{ type: 'CLEAR_MESSAGE' },
			message
		)
	}
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
			{auth && auth.token && (
				<button style={navLinkStyle} onClick={handleOnClickLogout}>
					Izloguj se
				</button>
			)}
		</>
	)
}
