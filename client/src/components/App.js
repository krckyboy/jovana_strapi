import React, { lazy, Suspense } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Loading from './Loading'
import '../styles/App.css'
import AuthenticationProvider from '../contexts/authenticationContext'
import MessagesProvider from '../contexts/messagesContext'
import setAuthToken from '../utils/setAuthToken'

const Home = lazy(() => import('../pages/Home'))
const AboutMe = lazy(() => import('../pages/AboutMe'))
const MyWork = lazy(() => import('../pages/MyWork'))
const Blog = lazy(() => import('../pages/Blog'))
const BlogPost = lazy(() => import('../pages/BlogPost'))

// Set auth token if in local storage
if (localStorage.authentication) {
	const parsedAuthentication = JSON.parse(
		localStorage.getItem('authentication')
	)

	if (parsedAuthentication !== null && parsedAuthentication.token) {
		setAuthToken(parsedAuthentication.token)
	}
}

// # Add content loader for nice feel.
// # Add 404 page
// # Refactor API calls not to use API wrapper but regular try catch block
// # See what to do with "radovi" - maybe when clicked to expand image or show description?
function App() {
	return (
		<AuthenticationProvider>
			<MessagesProvider>
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
							</Switch>
						</>
					</Suspense>
				</Router>
			</MessagesProvider>
		</AuthenticationProvider>
	)
}

export default App
