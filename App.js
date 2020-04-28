import Accueil from './Accueil'
import css from './main.css.js'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import France from './France'
import Header from './Header'
import Footer from './Footer'
import Sidewalks from './Sidewalks'

// is this a good idea ? Would it be quicker for the user to load as .css in index.html ?
const GlobalStyle = createGlobalStyle`${css}`
const Container = () => (
	<div>
		<GlobalStyle />
		<Router>
			<Header />
			<Switch>
				<Route path="/québec">
					<France />
				</Route>
				<Route path="/france">
					<France />
				</Route>
				<Route path="/sidewalks">
					<Sidewalks />
				</Route>
				<Route path="/">
					<Accueil />
				</Route>
			</Switch>
			<Footer />
		</Router>
	</div>
)
export default Container
