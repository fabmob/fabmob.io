import Accueil from './Accueil'
import css from './main.css.js'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
					<div>A venir ! </div>
				</Route>
				<Route
					path="/france"
					render={(props) => {
						// look for some param in the query string...
						const en =
							new URLSearchParams(props.location.search).get('lang') === 'en'
						console.log('en', props)
						let C
						if (en) {
							C = require('./France.en').default
						} else {
							C = require('./France').default
						}
						return <C />
					}}
				/>
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
