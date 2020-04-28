import React from 'react'
import { Link } from './Lang'

export default () => (
	<div>
		<header>
			<h1>FabMob France</h1>
			<p>
				Une association loi 1901 basée à Paris, présente dans toute le pays pour
				construire les nouvelles mobilités en réunissant tous les acteurs autour
				de <mark>communs open source</mark>
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
				<h2>Nos communs actifs</h2>
				<p>Nous investissons en particulier sur ces communs en ce moment.</p>
			</header>
			<aside>
				<img src={require('./images/vélo.svg').default}></img>
				<h3>Partageons plus de vélo</h3>
				<p>Blablabla</p>
				<p>
					<a href="#">
						<em>Découvrir↗</em>
					</a>
				</p>
			</aside>
			<aside>
				<img src={require('./images/appli.svg').default}></img>
				<h3>Mon compte mobilité</h3>
				<p>Blablabla</p>
				<p>
					<a href="#">
						<em>Découvrir↗</em>
					</a>
				</p>
			</aside>
		</section>
	</main>
)
