import axios from 'axios'

export default async function(page = 1) {
	const limit = 6
	let start = 0

	if (page > 1) {
		start = (page - 1) * limit
	}

	const blogs = await axios.get(
		`/blogs?_sort=created_at:desc&_start=${start}&_limit=${limit}`
	)

	const blogsCount = await axios.get('/blogs/count')
	const pagesCount = blogsCount.data / limit

	return { blogs: blogs.data, pagesCount }
}
