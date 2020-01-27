import { NavLink } from 'react-router-dom'
import React from 'react'

const navLinkStyle = {
	marginTop: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'pointer',
}

export default function NavLinksComp() {
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
		</>
	)
}
