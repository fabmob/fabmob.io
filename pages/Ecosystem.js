import React, { useState } from 'react'
import { Link } from 'Components/Lang'
import colors from 'Components/colors'
import ecosystème from '../ecosystème.yaml'
import Emoji from 'Components/Emoji'
import Page from 'Components/Page'
import { shuffle } from '../utils'
import Adhérents from 'Pages/Adhérents'

export default () => {
	const [filter, setFilter] = useState({})
	return (
		<Page
			titre="Ecosystème"
			nav2={{ membres: 'Nos membres', experts: 'Nos experts' }}
		>
			<h1>L'ecosystème FabMob</h1>
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
			<h2>L'équipe</h2>
			<Members data={ecosystème["L'équipe"]} />
			<h2>Le conseil d'administration</h2>

			<Members data={ecosystème["Le conseil d'administration"]} />

			<h2>Nos 10 derniers adhérents</h2>
			<div css="text-align: center">
				<p>
					<Emoji emoji="🏗" />
					{'  '}Section en construction
				</p>
			</div>
			<Adhérents />
		</section>
		<AutresFabriques />
	</main>
)

const Members = ({ data }) => (
	<div css="display:flex; justify-content: center;flex-wrap: wrap">
		{shuffle(data).map(({ nom, image, rôle }) => (
			<aside>
				<img src={image} title={nom} />
				<h3>{nom}</h3>
				<p>{rôle}</p>
			</aside>
		))}
	</div>
)

const AutresFabriques = () => (
	<div>
		<h2>Les autres fabriques</h2>
		<p css="text-align: center">
			Le modèle de la fabrique, initié en France, se répliquer dans d'autres
			pays et domaines.
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
			<button>
				<img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"></img>
				<span>France</span>
			</button>
			<button>
				<img src="https://images.unsplash.com/photo-1558489580-faa74691fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
				<span>Québec</span>
			</button>
		</div>
	</div>
)
