import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'Components/Lang'
import pages from 'Code/getContent.js'
import { PageMain } from '../UI'
import Page from '../Page'
import Nav2 from 'Components/Nav2'
import Ecosystem from './Ecosystem'

export default () => (
	<div
		css={`
			display: flex;
			flex-wrap: wrap;
		`}
	>
		<Nav2
			data={{
				'': 'À propos',
				nous: 'Qui sommes nous ?',
				durable: 'Mobilité durable',
				travailler: 'Travailler ensemble',
			}}
		/>
		<div
			css={`
				padding: 2%;
				width: calc(95% - 20rem);
				@media (max-width: 800px) {
					width: 100%;
				}
				h1,
				h2,
				h3,
				h4,
				h5 {
					text-align: left;
				}
			`}
		>
			<Switch>
				<Route exact path="/à-propos/nous">
					<Ecosystem />
				</Route>
				<Route exact path="/à-propos/:id">
					<Page articles={pages} />
				</Route>
				<Route path="/à-propos">
					<Page articles={pages} id="à-propos" />
				</Route>
			</Switch>
		</div>
	</div>
)
