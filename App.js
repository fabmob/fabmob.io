import css from './main.css.js'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Sidewalks from './Sidewalks'
import France from './France'
import FranceEn from './France.en'
import Québec from './Québec'
import QuébecEn from './Québec.en'
import Accueil from './Accueil'
import AccueilEn from './Accueil.en'
import Blog from './Blog'
import Action from './Action'
import Article from './Article'

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
				<Route path="/blog/:id">
					<Article />
				</Route>
				<Route path="/blog">
					<Blog />
				</Route>
				<Route path="/participer">
					<Action />
				</Route>
				<Route path="/">
					<Accueil />
				</Route>
			</Switch>
		</Router>
	</div>
)

export default Container
