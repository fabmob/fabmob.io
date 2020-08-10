import React, { useState } from 'react'
import { Link } from './Lang'
import colors from './colors'
import members from './members.yaml'
import Page from './Page'

export default () => {
	const [filter, setFilter] = useState({})
	return (
		<Page
			titre="Ecosystème"
			nav2={{ membres: 'Nos membres', experts: 'Nos experts' }}
		>
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
							filter.géo === 'france'
								? `background: ${colors.vert} !important`
								: ''
						}
						onClick={() =>
							setFilter({ géo: filter.géo === 'france' ? null : 'france' })
						}
					>
						<img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"></img>
						<span>France</span>
					</button>
					<button
						css={
							filter.géo === 'québec'
								? `background: ${colors.vert} !important`
								: ''
						}
						onClick={() =>
							setFilter({ géo: filter.géo === 'québec' ? null : 'québec' })
						}
					>
						<img src="https://images.unsplash.com/photo-1558489580-faa74691fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
						<span>Québec</span>
					</button>
				</div>
			</header>
			<Présentation filter={filter} />
		</Page>
	)
}

let Présentation = ({ filter }) => (
	<main>
		<section
			css={`
				aside {
					width: 10rem;
					text-align: center;
					padding: 1rem;
				}
				aside h3 {
					margin: 0.3rem;
				}
				aside img {
					width: 10rem;
				}
				aside p {
					margin: 0.3rem;
				}
			`}
		>
			<header>
				<h2>Nos membres</h2>
			</header>
			{members
				.filter((el) => !filter.géo || el.géo === filter.géo)
				.map(({ nom, image, rôle }) => (
					<aside>
						<img src={image} title={nom} />
						<h3>{nom}</h3>
						<p>{rôle}</p>
					</aside>
				))}
			<header>
				<h2>Les experts</h2>
			</header>
			{members
				.filter((el) => !filter.géo || el.géo === filter.géo)
				.map(({ nom, image, rôle }) => (
					<aside>
						<img src={image} title={nom} />
						<h3>{nom}</h3>
						<p>{rôle}</p>
					</aside>
				))}
		</section>
	</main>
)
