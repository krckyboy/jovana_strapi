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
const Login = lazy(() => import('../pages/Login'))

// # Add content loader for nice feel.
// # (designed) Create a login page
// # (designed) Create a 'new product page'
// # (designed) Create a 'new blog page'
// # (designed) Create am 'edit blog page'
// # (designed) Create a 'delete blog modal confirmation'
// # (designed) Create a 'delete product modal confirmation'
// # Show if user is logged
function App() {
	return (
		<Router
			onUpdate={() => window.scrollTo(0, 0)}
			basename={process.env.PUBLIC_URL}
		>
			<Suspense fallback={Loading()}>
				<>
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
						<Route
							exact
							path={process.env.PUBLIC_URL + '/login'}
							component={Login}
						/>
					</Switch>
				</>
			</Suspense>
		</Router>
	)
}

export default App
