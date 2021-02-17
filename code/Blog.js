import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PageMain } from './UI'
const Article = lazy(() => import('./Article'))
const Articles = lazy(() => import('./Articles'))

export default ({}) => (
	<PageMain>
		<Suspense fallback={<div>Chargement...</div>}>
			<Switch>
				<Route exact path="/blog/:id">
					<Article />
				</Route>
				<Route path="/blog/année/:year">
					<Articles />
				</Route>
				<Route path="/blog/">
					<Articles year="2020" />
				</Route>
			</Switch>
		</Suspense>
	</PageMain>
)
