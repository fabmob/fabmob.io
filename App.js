import css from './main.css.js'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Sidewalks from './Sidewalks'

const importI18n = (name) => {
	const fr = require(name)
	const en = require(name + '.en')
	return [fr, en]
}
const France = importI18n('./France.js')
const Accueil = importI18n('./Accueil')

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
				<Route path="/france" render={i18n(France)} />
				<Route path="/sidewalks">
					<Sidewalks />
				</Route>
				<Route path="/" render={i18n(Accueil)} />
			</Switch>
			<Footer />
		</Router>
	</div>
)
const i18n = (Components) => (props) => {
	const en = new URLSearchParams(props.location.search).get('lang') === 'en'
	if (en) {
		return Components[1]
	} else {
		return Components[0]
	}
}
export default Container
