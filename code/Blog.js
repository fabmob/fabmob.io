import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Meta from './Meta'
import { PageMain } from './UI'
import Nav2 from 'Components/Nav2'
import {navData} from './pages/About'
const Article = lazy(() => import('./Article'))
const Articles = lazy(() => import('./Articles'))

export default ({}) => (
	<div>
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
						<Articles year="2023" />
					</Route>
				</Switch>
			</Suspense>
		</div>

	</div>
)
