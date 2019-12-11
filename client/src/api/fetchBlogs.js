import axios from 'axios'

export default async function() {
	// const blogs = await axios.get('http://localhost:1337/blogs')
	const blogs = await axios.get('/blogs')
	return blogs.data
}
