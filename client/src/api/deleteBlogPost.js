import axios from 'axios'

export default async function(id) {
	const blog = await axios.delete(`/blogs/${id}`)

	return { blogPost: blog.data }
}
