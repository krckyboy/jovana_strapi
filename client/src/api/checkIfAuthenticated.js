import axios from 'axios'

export default async function() {
	try {
		console.log(
			'Token inside checking if authenticated',
			axios.defaults.headers.common['Authorization']
		)
		const res = await axios.get(`/users/me`)

		return res.data
	} catch (e) {
		return { error: e }
	}
}
