import { NavLink } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../contexts/authenticationContext'

const navLinkStyle = {
	marginTop: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'pointer',
}

export default function NavLinksComp() {
	const { dispatch, authentication: auth } = useContext(AuthenticationContext)
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
			{auth.token && (
				<button
					style={navLinkStyle}
					onClick={() => dispatch({ type: 'LOGOUT' })}
				>
					Izloguj se
				</button>
			)}
		</>
	)
}
