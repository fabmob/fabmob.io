import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Meta from './Meta'
import { PageMain } from './UI'
const Article = lazy(() => import('./Article'))
const Articles = lazy(() => import('./Articles'))

export default ({}) => (
	<PageMain>
		<Meta
			title="Le blog FabMob"
			description="Essais, analyses, manifestes et fictions sur les sujets passionnants de la mobilité"
		/>
		<Suspense fallback={<div>Chargement...</div>}>
			<Switch>
				<Route exact path="/blog/:id">
					<Article />
				</Route>
				<Route path="/blog/année/:year">
					<Articles />
				</Route>
				<Route path="/blog/tag/:tag">
					<Articles />
				</Route>
				<Route path="/blog/">
					<Articles year="2021" />
				</Route>
			</Switch>
		</Suspense>
	</PageMain>
)
