import axios from 'axios'

export default async function(id) {
	const blog = await axios.get(`/blogs/${id}`)

	return { blogPost: blog.data }
}
