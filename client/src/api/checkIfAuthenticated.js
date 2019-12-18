import axios from 'axios'

export default async function(page = 1) {
	try {
		const res = await axios.get(`/users/me`)

		return res.data
	} catch (e) {
		return { error: e }
	}
}
