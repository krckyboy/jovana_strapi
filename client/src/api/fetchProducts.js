import axios from 'axios'

export default async function(page = 1) {
	const limit = 6
	let start = 0

	if (page > 1) {
		start = (page - 1) * limit
	}

	const products = await axios.get(
		`/products?_start=${start}&_limit=${limit}`
	)

	const productsCount = await axios.get('/products/count')
	const pagesCount = productsCount.data / limit

	return { products: products.data, pagesCount }
}
