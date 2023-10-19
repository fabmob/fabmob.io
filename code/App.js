import css from './main.css.js'
import React, {
	lazy,
	Suspense,
	createContext,
	useEffect,
	useState,
} from 'react'
import { createGlobalStyle } from 'styled-components'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Sidewalks from './Sidewalks'
import Accueil from './pages/Accueil'
import Blog from './Blog'
import Communs from './pages/Communs'
import Participer from './pages/Participer'
import Ecosystem from './pages/Ecosystem'
import About from './pages/About'
import Événéments from './pages/Événements'
import { fetchLastEvents } from './wikiAPI.js'
import Meta from './Meta.js'
import Activités from './pages/Activités.js'
const Tracemob = lazy(() => import('./tracemob/Tracemob'))
import TracemobNoisy from './tracemob/TracemobNoisy'

const UtmFriendlyRedirect = (props) => (
	<Redirect
		computedMatch={props.computedMatch}
		to={{ pathname: props.to, search: props.location.search }}
	/>
)

// Create Context Object
export const WikiContext = createContext()

// Create a provider for components to consume and subscribe to changes
export const WikiContextProvider = (props) => {
	const [eventData, setEventData] = useState([])

	useEffect(() => fetchLastEvents(setEventData), [])

	return (
		<WikiContext.Provider value={[eventData, setEventData]}>
			{props.children}
		</WikiContext.Provider>
	)
}

// is this a good idea ? Would it be quicker for the user to load as .css in index.html ?
const GlobalStyle = createGlobalStyle`${css}`
const Container = () => (
	<WikiContextProvider>
		<GlobalStyle />
		<Router>
			<Meta />
			<Nav />
			<div css="@media (min-width: 800px) { width: calc(100% - 120px); margin-left: 40px; padding-top: 20px}">
				<Switch>
					{/* This part was made for the first version of the website, that included a way to get translated pages, as well as a differentiated page for France / Quebec. Disactivated until further developement. */}
					{false && (
						<>
							<Route path="/france">
								<France />
							</Route>
							<Route path="/en/france">
								<FranceEn />
							</Route>
							<Route path="/québec">
								<Québec />
							</Route>
							<Route path="/en/québec">
								<QuébecEn />
							</Route>

							<Route path="/en/">
								<AccueilEn />
							</Route>
						</>
					)}
					<Route path="/tracemob">
						<Suspense fallback={null}>
							<Tracemob />
						</Suspense>
					</Route>
					<Route path="/tracemobNoisy">
						<TracemobNoisy />
					</Route>
					<Route path="/sidewalks">
						<Sidewalks />
					</Route>
					<UtmFriendlyRedirect from="/blog/mentors" to="/blog" />
					<UtmFriendlyRedirect from="/blog/articles" to="/blog" />
					<UtmFriendlyRedirect from="/blog/home" to="/blog" />
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/activités">
						<Activités />
					</Route>
					<Route path="/ecosystem">
						<Ecosystem />
					</Route>
					<Route path="/participer">
						<Participer />
					</Route>
					<Route path="/à-propos">
						<About />
					</Route>
					<Route path="/événements">
						<Événéments />
					</Route>
					{/* Pour la migration vers le nouveau site*/}
					<UtmFriendlyRedirect from="/articles/:category/:id" to="/blog/:id" />
					<UtmFriendlyRedirect from="/articles/:id" to="/blog/:id" />
					<UtmFriendlyRedirect from="/:category/:id" to="/blog/:id" />
					<Route path="/">
						<Accueil />
					</Route>
				</Switch>
			</div>
		</Router>
	</WikiContextProvider>
)

export default Container
