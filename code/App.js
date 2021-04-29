import css from './main.css.js'
import React, { createContext, useEffect, useState } from 'react'
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
import Tracemob from './tracemob/Tracemob'

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
			<Nav />

			<Switch>
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
				<Route path="/feu-le-forum">
					<TempForumDown />
				</Route>
				<Route path="/tracemob">
					<Tracemob />
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
				<Route path="/communs">
					<Communs />
				</Route>
				<Route path="/ecosystem">
					<Ecosystem />
				</Route>
				<route path="/participer">
					<Participer />
				</route>
				<route path="/à-propos">
					<About />
				</route>
				<route path="/événements">
					<Événéments />
				</route>
				{/* Pour la migration vers le nouveau site*/}
				<UtmFriendlyRedirect from="/articles/:category/:id" to="/blog/:id" />
				<UtmFriendlyRedirect from="/articles/:id" to="/blog/:id" />
				<UtmFriendlyRedirect from="/:category/:id" to="/blog/:id" />
				<Route path="/">
					<Accueil />
				</Route>
			</Switch>
		</Router>
	</WikiContextProvider>
)

export default Container

const TempForumDown = ({}) => (
	<div css="max-width: 750px; margin: 0 auto; text-align: center; margin-top: 2rem">
		<img
			src="https://img.phonandroid.com/2021/03/incendie-ovh-e1615372715610.jpg"
			css="width: 20rem"
		/>
		<p>forum.fabmob.io est tombé avec le datacenter OVH. </p>
		<p>
			Nous publierons ici des nouvelles quand nous aurons avancé sur sa remise
			en ligne.
		</p>
		<p>
			Il était hébergé à <a href="http://92.222.85.102">cette adresse IP</a>.
		</p>
	</div>
)
