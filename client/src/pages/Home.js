import React from 'react'
import Layout from '../components/layout/Layout'
import FirstSection from '../components/Home/FirstSection'
import MojiRadovi from '../components/Home/MojiRadovi'
import Blog from '../components/Home/Blog'
import axios from 'axios'

export default function Home() {
	console.log(axios.defaults.headers.common)
	return (
		<Layout>
			<main className={'content'}>
				<FirstSection />
				<MojiRadovi />
				<div className="horizontalPadding">
					<Blog />
				</div>
			</main>
		</Layout>
	)
}
