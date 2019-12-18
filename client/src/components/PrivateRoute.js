import React, { useContext, useEffect, useState } from 'react'
import { AuthenticationContext } from '../contexts/authenticationContext'
import { Route, Redirect } from 'react-router-dom'
import checkIfAuthenticated from '../api/checkIfAuthenticated'
import { MessagesContext } from '../contexts/messagesContext'
import dispatchWithTimeoutDispatch from '../contexts/utils/dispatchWithTimeoutDispatch'
import setAuthToken from '../utils/setAuthToken'
import axios from 'axios'

export default function PrivateRoute({ component: Component, ...rest }) {
	console.log('From private route', axios.defaults.headers.common)
	const { authentication: auth, dispatch: dispatchAuth } = useContext(
		AuthenticationContext
	)
	const { dispatch: dispatchMessage } = useContext(MessagesContext)

	const [isAuthenticated, setIsAuthenticated] = useState(
		Boolean(auth && auth.token && auth.user)
	)

	useEffect(() => {
		;(async () => {
			if (isAuthenticated) {
				const data = await checkIfAuthenticated()
				if (data.error) {
					setIsAuthenticated(false)

					dispatchAuth({
						type: 'AUTHENTICATION_REQUIRED',
					})

					// Clean token
					setAuthToken()

					// Display message to user that login is required
					dispatchWithTimeoutDispatch(
						dispatchMessage,
						{ type: 'LOGIN_REQUIRED' },
						{ type: 'CLEAR_MESSAGE' }
					)
				} else {
					setIsAuthenticated(true)
				}
			}
		})()
	}, [isAuthenticated, dispatchMessage])

	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/login', from: props.location }}
					/>
				)
			}
		/>
	)
}
