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
					render={(props) => <I18n {...{ ...props, component: 'France' }} />}
				/>
				<Route path="/sidewalks">
					<Sidewalks />
				</Route>
				<Route
					path="/"
					render={(props) => <I18n {...{ ...props, component: 'Acueil' }} />}
				/>
			</Switch>
			<Footer />
		</Router>
	</div>
)
const I18n = ({ component, ...props }) => {
	console.log('C', component)
	const en = new URLSearchParams(props.location.search).get('lang') === 'en'
	let C
	if (en) {
		const name = `./${component}.en`
		C = require(name).default
	} else {
		const name = `./${component}`
		C = require(name).default
	}
	return <C {...props} />
}
export default Container
