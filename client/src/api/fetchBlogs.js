import axios from 'axios'

export default async function() {
	const blogs = await axios.get('/blogs')
	return blogs.data
}
