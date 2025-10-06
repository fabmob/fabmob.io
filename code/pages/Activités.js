import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav2 from 'Components/Nav2'
import pages from 'Code/getContent.js'
import Page from '../Page'
import Communs from './Communs'
import Publications from './Publications'
import Événéments from './Événements'

export default () => (
	<div
		css={`
			display: flex;
			flex-wrap: wrap;
		`}
	>
		<Nav2
			titre="Les activités"
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
				<Route path="/activités/communs">
					<Communs />
				</Route>
				<Route path="/activités/publications">
					<Publications />
				</Route>
				<Route path="/activités/événements">
					<Événéments />
				</Route>
				<Route path="/activités/:id">
					<Page articles={pages} />
				</Route>
			</Switch>
		</div>
	</div>
)

export const navData = {
	'/activités/communs': 'Nos communs',
	'/activités/publications': 'Nos publications',
	'/activités/événements': 'Nos événements',
	'/activités/offre_services': 'Nos offres de services'
}