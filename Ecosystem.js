import React, { useState } from 'react'
import { Link } from './Lang'
import colors from './colors'
import members from './members.yaml'

export default () => {
	const [filter, setFilter] = useState({})
	return (
		<div>
			<header>
				<h1>L'ecosystème FabMob</h1>
				<p>
					Le modèle de la fabrique, initié en France, se répliquer dans d'autres
					pays et domaines
				</p>
				<div
					css={`
						display: flex;
						justify-content: center;
						align-items: center;
						> button {
							padding: 0.3rem;
							margin: 1rem;
							font-weight: bold;
							text-transform: uppercase;
							background: ${colors.bleu};
							border: none;
						}
						img {
							border-radius: 0.3rem;
							height: 5rem;
							display: block;
						}
					`}
				>
					<button
						css={
							filter.geo === 'france'
								? `background: ${colors.vert} !important`
								: ''
						}
						onClick={() =>
							setFilter({ geo: filter.geo === 'france' ? null : 'france' })
						}
					>
						<img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"></img>
						<span>France</span>
					</button>
					<button
						css={
							filter.geo === 'québec'
								? `background: ${colors.vert} !important`
								: ''
						}
						onClick={() =>
							setFilter({ geo: filter.geo === 'québec' ? null : 'québec' })
						}
					>
						<img src="https://images.unsplash.com/photo-1558489580-faa74691fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
						<span>Québec</span>
					</button>
				</div>
			</header>
			<Présentation filter={filter} />
		</div>
	)
}

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
				<h2>Nos membres</h2>
			</header>
			<aside>
				<h3> FabMob France</h3>
				<p>
					Premier membre du réseau, la Fabrique des Mobilités s'est constituée
					en association, soutenue notamment par l'ADEME.
				</p>
				<p>
					<a href="#">
						<em>Découvrir↗</em>
					</a>
				</p>
			</aside>
			<aside>
				<img src="https://images.unsplash.com/photo-1558489580-faa74691fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
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
