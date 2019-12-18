import React from 'react'
import Layout from '../components/layout/Layout'
import FirstSection from '../components/Home/FirstSection'
import MojiRadovi from '../components/Home/MojiRadovi'
import Blog from '../components/Home/Blog'

export default function Home() {
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
