import React from 'react'
import { Link } from './Lang'

export default () => (
	<div>
		<header>
			<h1>Passer à l'action</h1>
			<p>La Fabrique est une assoctiation 1901.</p>
			<a
				href="https://www.helloasso.com/associations/la-fabrique-des-mobilites/adhesions/adhesions-2019-2020"
				target="_blank"
			>
				<i>Adhérer</i>
			</a>
		</header>
		<Présentation />
	</div>
)

let Présentation = () => (
	<main>
		<section
			css={`
				img {
					width: 12rem;
				}
			`}
		>
			<header>
				<h2>Nos outils</h2>
				<p>
					En 2 minutes, créez un compte unique qui vous donnera accès à toute la
					galaxie FabMob
				</p>

				<a
					href="https://id.indie.host/auth/realms/fabmob-io/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fwiki.lafabriquedesmobilites.fr%2Fwiki%2FSp%25C3%25A9cial%3AConnexion&client_id=wiki&scope=openid"
					target="_blank"
				>
					<i>Créer un compte FabMobId</i>
				</a>
			</header>
			<aside>
				{/* <img src={require('./images/vélo.svg').default}></img>*/}
				<h3>Le chat</h3>
				<p>Discutez avec de multiples communautés</p>
				<p>
					<a href="#">
						<em>Discuter↗</em>
					</a>
				</p>
			</aside>
			<aside>
				{/* <img src={require('./images/appli.svg').default}></img>*/}
				<h3>Le Wiki</h3>
				<p>Découvrez et participez à la construction du Wiki</p>
				<p>
					<a href="#">
						<em>Documenter↗</em>
					</a>
				</p>
			</aside>
		</section>
	</main>
)
