import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Loading from './Loading'

const Home = lazy(() => import('../pages/Home'))
const AboutMe = lazy(() => import('../pages/AboutMe'))
const MyWork = lazy(() => import('../pages/MyWork'))
const Blog = lazy(() => import('../pages/Blog'))
const BlogPost = lazy(() => import('../pages/BlogPost'))

// # Add content loader for nice feel.
function App() {
	return (
		<Router
			onUpdate={() => window.scrollTo(0, 0)}
			basename={process.env.PUBLIC_URL}
		>
			<Suspense fallback={Loading()}>
				<div className="content">
					<ScrollToTop />
					<Switch>
						<Route
							exact
							path={process.env.PUBLIC_URL + '/'}
							component={Home}
						/>
						<Route
							exact
							path={process.env.PUBLIC_URL + '/o_meni'}
							component={AboutMe}
						/>
						<Route
							exact
							path={process.env.PUBLIC_URL + '/radovi'}
							component={MyWork}
						/>
						<Route
							exact
							path={process.env.PUBLIC_URL + '/blog'}
							component={Blog}
						/>
						<Route
							exact
							path={process.env.PUBLIC_URL + '/blog/:id'}
							component={BlogPost}
						/>
					</Switch>
				</div>
			</Suspense>
		</Router>
	)
}

export default App
