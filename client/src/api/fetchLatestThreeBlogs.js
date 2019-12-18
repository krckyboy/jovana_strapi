import axios from 'axios'

export default async function() {
	const blogs = await axios.get(`/blogs?_limit=3&_sort=created_at:desc`)

	return { blogs: blogs.data }
}
