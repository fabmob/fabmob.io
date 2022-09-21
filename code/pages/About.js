import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
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
			titre="À propos"
			data={navData}
		/>
		<div
			css={`
				@media (min-width: 800px) {
					margin-left: 300px;
				}
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
					<Redirect to="/à-propos/manifeste" />
				</Route>
			</Switch>
		</div>
	</div>
)

export const navData = {
	'/à-propos/manifeste': 'Manifeste',
	'/à-propos/nous': 'Qui sommes nous ?',
	'/à-propos/partenaires': 'Partenaires',
	'/à-propos/statuts': 'Statuts et documents d’activité',
	'/à-propos/reseaufabriques': 'Le réseau des fabriques',
	'/blog': 'Blog'
	// urgence: "L'urgence",
	// 'mentions-légales-et-données':
	// 	'Mentions légales & données personnelles',
}