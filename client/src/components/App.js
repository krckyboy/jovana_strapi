import React, { lazy, Suspense } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Loading from './Loading'
import '../styles/App.css'
import AuthenticationProvider from '../contexts/authenticationContext'
import MessagesProvider from '../contexts/messagesContext'

const Home = lazy(() => import('../pages/Home'))
const AboutMe = lazy(() => import('../pages/AboutMe'))
const MyWork = lazy(() => import('../pages/MyWork'))
const Blog = lazy(() => import('../pages/Blog'))
const BlogPost = lazy(() => import('../pages/BlogPost'))
const Login = lazy(() => import('../pages/auth/Login'))
const NewBlogPost = lazy(() => import('../pages/auth/NewBlogPost'))

// # Add content loader for nice feel.
// # (coded) Create a login page
// # (designed) Create a 'new product page'
// # (coded) Create a 'new blog page'
// # (designed) Create am 'edit blog page'
// # (designed) Create a 'delete blog modal confirmation'
// # (designed) Create a 'delete product modal confirmation'
// # Show if user is logged
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
									path={process.env.PUBLIC_URL + '/blog/novi'}
									component={NewBlogPost}
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
			</MessagesProvider>
		</AuthenticationProvider>
	)
}

export default App
