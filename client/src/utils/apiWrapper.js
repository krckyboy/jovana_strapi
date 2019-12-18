// Receives a dispatch and api call function as param
// Logs out, clearing local storage if 401

import setAuthToken from './setAuthToken'

export default async (apiCall, dispatch, reload) => {
	// debugger
	try {
		const data = await apiCall()
		return data
	} catch (e) {
		dispatch({ type: 'LOGOUT' })
		setAuthToken()
		reload()
		return { error: e }
	}
}
