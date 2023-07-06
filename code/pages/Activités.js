import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Link } from 'Components/Lang'
import pages from 'Code/getContent.js'
import { PageMain } from '../UI'
import Page from '../Page'
import Nav2 from 'Components/Nav2'
import Ecosystem from './Ecosystem'
import colors from 'Components/colors'
import { ArticleStyle } from 'Code/UI'
import Partenaires from './Partenaires'
import Communs from './Communs'

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
				<Route exact path="/activités/:id">
					<Page articles={pages} />
				</Route>
			</Switch>
		</div>
	</div>
)
export const navData = {
	'/activités/communs': 'Nos communs',
	'/activités/publications': 'Nos publications'
}