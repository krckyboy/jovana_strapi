import axios from 'axios'

export default async function({ identifier, password }) {
	try {
		const res = await axios.post('/auth/local', {
			identifier,
			password,
		})

		return res.data
	} catch (e) {
		console.error(e)
	}
}
