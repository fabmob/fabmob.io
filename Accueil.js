import React from 'react'
import { useLocation, Link as OriginalLink } from 'react-router-dom'
import { Link } from './Lang'
import Emoji from './Emoji'

export default () => {
	return (
		<div>
			<header
				css={`
					> section {
						height: 65vh;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					h1 {
						font-size: 120%;
					}
				`}
			>
				<section>
					<Link to="/">
						<img
							css="width: 10rem; margin: 1rem;"
							src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg"
						></img>
					</Link>
					<h1>Révolutionner la mobilité via les communs</h1>
					<p>
						L'association pour construire les nouvelles mobilités en réunissant
						tous les acteurs autour de communs open source.
					</p>
					<br />
				</section>
				<footer
					css={`
						ul {
							padding: 0;
							list-style-type: none;
						}
					`}
				>
					<ul>
						<li>
							<a href="https://twitter.com/fab_mob" title="twitter">
								<Emoji emoji="🐦" />
							</a>
						</li>
					</ul>
				</footer>
			</header>
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
					margin: 2rem auto;
					display: block;
					border-radius: 0.6rem;
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
				<img src="https://imgur.com/HRpDml8.jpg"></img>
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
			<aside>
				<img src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
				<h3>Votre FabMob</h3>
				<p>
					La Fabrique des mobilités est elle-même un commun bien documenté, et
					nous vous aidons à vous en saisir.
				</p>
				<p>
					<a href="#">
						<em>Répliquer↗</em>
					</a>
				</p>
			</aside>
		</section>
	</main>
)
