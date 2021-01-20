import css from './main.css.js'
import React from 'react'
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
import France from './France'
import FranceEn from './France.en'
import Québec from './Québec'
import QuébecEn from './Québec.en'
import Accueil from './pages/Accueil'
import AccueilEn from './Accueil.en'
import Blog from './Blog'
import Communs from './pages/Communs'
import Participer from './pages/Participer'
import Ecosystem from './pages/Ecosystem'
import Philosophie from './pages/Philosophie'

const UtmFriendlyRedirect = (props) => (
	<Redirect
		computedMatch={props.computedMatch}
		to={{ pathname: props.to, search: props.location.search }}
	/>
)

// is this a good idea ? Would it be quicker for the user to load as .css in index.html ?
const GlobalStyle = createGlobalStyle`${css}`
const Container = () => (
	<div>
		<GlobalStyle />
		<Router>
			<Nav />

			<Switch>
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
				<Route path="/sidewalks">
					<Sidewalks />
				</Route>
				<Route path="/en/">
					<AccueilEn />
				</Route>
				<Route path="/blog">
					<Blog />
				</Route>
				{/* Pour la migration vers le nouveau site*/}
				<UtmFriendlyRedirect from="/articles/:id" to="/blog/:id" />
				<Route path="/communs">
					<Communs />
				</Route>
				<Route path="/ecosystem">
					<Ecosystem />
				</Route>
				<route path="/participer">
					<Action />
				</route>
				<route path="/philosophie">
					<Philosophie />
				</route>
				<Route path="/">
					<Accueil />
				</Route>
			</Switch>
		</Router>
	</div>
)

export default Container
