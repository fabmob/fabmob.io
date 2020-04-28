import React from 'react'
import { useLocation, Link as OriginalLink } from 'react-router-dom'
import { Link } from './Lang'

export default () => {
	return (
		<div>
			<header>
				<img
					css="height: 5rem"
					src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/bg-communs.svg"
				/>
				<h1>Révolutionner la mobilité via les communs</h1>
				<p>
					L'association pour construire les nouvelles mobilités en réunissant
					tous les acteurs autour de <mark>communs open source</mark>
				</p>
				<br />
				<p>
					<a href="./mvp.html" target="_blank">
						<i>Découvrir</i>
					</a>
					<a href="#" target="_blank">
						<b>Nous rejoindre</b>
					</a>
				</p>
			</header>
			<Présentation />
		</div>
	)
}

let Présentation = () => (
	<main>
		<section
			css={`
				img {
					max-height: 12rem;
					max-width: initial;
					margin: 0 auto;
					display: block;
				}
			`}
		>
			<header>
				<h2>Un concept, des fabriques</h2>
				<p>
					Le modèle de la fabrique, initié en France, se répliquer dans d'autres
					pays et domaines
				</p>
			</header>
			<aside>
				<img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&q=80"></img>
				<h3> FabMob France</h3>
				<p>
					Premier membre du réseau, la Fabrique des Mobilités s'est constituée
					en association, soutenue notamment par l'ADEME.
				</p>
				<p>
					<Link to="france">
						<em>Découvrir↗</em>
					</Link>
				</p>
			</aside>
			<aside>
				<img src="https://images.unsplash.com/photo-1558489580-faa74691fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&q=60"></img>
				<h3> FabMob Québec</h3>
				<p>
					La Fabrique des Mobilités s'est ensuite implantée au Québec, notamment
					autour des associations Savoir faire linux.
				</p>
				<p>
					<a href="#">
						<em>Découvrir↗</em>
					</a>
				</p>
			</aside>
		</section>
	</main>
)
