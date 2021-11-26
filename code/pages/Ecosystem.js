import React, { useState } from 'react'
import { Link } from 'Components/Lang'
import colors from 'Components/colors'
import ecosystème from 'Content/ecosystème.yaml'
import Emoji from 'Components/Emoji'
import Page from 'Components/Page'
import { shuffle } from '../utils'
import Adhérents from 'Pages/Adhérents'
import { ArticleStyle } from '../UI'
import Meta from '../Meta'
import styled from 'styled-components'

export default () => {
	const [filter, setFilter] = useState({})
	return (
		<ArticleStyle
			colors={[colors.bleu, colors.bleuClair]}
			css="max-width: 1000px"
		>
			<h1>L'ecosystème FabMob</h1>
			<Présentation filter={filter} />
		</ArticleStyle>
	)
}

let Présentation = ({ filter }) => (
	<main>
		<Meta
			title="La FabMob, c'est qui ?"
			description="Découvrez qui se cache derrière la FabMob : l'équipe, le conseil d'administration, les adhérents et les acteurs de la communauté"
		/>
		<section
			css={`
				aside {
					width: 10rem;
					text-align: center;
					padding: 0.4rem;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: auto;
				}
				@media (max-width: 800px) {
					aside {
						width: 8rem;
						margin: 0.4rem;
					}
				}
				aside h3 {
					margin: 0.3rem;
					text-align: center;
				}
				aside img {
					width: 10rem;
					margin: 0.4rem;
					filter: grayscale(1);
				}
				aside p {
					margin: 0.3rem;
				}
			`}
		>
			<div css="margin: 0 auto; width: 20rem; margin-top: 3vh">								
					<CTA
						text="Rejoignez nous"
						to="https://pad.fabmob.io/s/cudgcUGeG"
						img={<CTAArrow />}
					/>
			</div>
			<h2>L'équipe</h2>
			<Members data={ecosystème["L'équipe"]} />
			<h2>Le conseil d'administration</h2>

			<Members data={ecosystème["Le conseil d'administration"]} />

			<h2>Nos 10 derniers acteurs sur le wiki</h2>
			<div css="text-align: center"></div>
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
			Le modèle de la fabrique, initié en France sur la mobilité, se réplique
			dans d'autres pays et domaines.
		</p>
		<div
			css={`
				display: flex;
				justify-content: center;
				align-items: center;
				> a {
					width: 16rem;
					padding: 0.6rem;
					margin: 1rem;
					font-weight: bold;
					text-transform: uppercase;
					background: ${colors.bleu};
					border: none;
					border-radius: 0.3rem;
					text-align: center;
				}
				img {
					border-radius: 0.3rem;
					height: 6rem;
					display: block;
				}
			`}
		>
			<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Centre_d’excellence_des_technologiques_ouvertes_pour_la_mobilité">
				<img src="https://images.unsplash.com/photo-1558489580-faa74691fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
				<span>La FabMob Québec</span>
			</a>
			<a href="https://www.lafabriquedelalogistique.fr/">
				<img src="https://wiki.lafabriquedesmobilites.fr/images/fabmob/1/1c/Fablog.jpg"></img>
				<span>La Fabrique de la Logistique</span>
			</a>
			<a href="https://fabsan.mystrikingly.com">
				<img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_100/3323786/137041_142635.png"></img>
				<span>La Fabrique des Santés</span>
			</a>
		</div>
	</div>
)

const Surligné = styled.span`
	background: yellow;
	font-weight: normal;
	color: black;
`
const CTAButton = styled.button`
	width: 250px;
        height: 40px;
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
	border: none;
	border-radius: 0;
	display: block;
	padding: 0.6rem;
	display: flex;
	justify-content: left;
	margin: 0.6rem 0;
`

const CTAArrow = () => (
	<img
		src="/images/flèche-nord-est.svg"
		css="width: 1rem; margin-right: 1rem; "
	/>
)
const CTA = ({ to, text, img }) =>
	to.includes('http') ? (
		<a href={to}>
			<CTAButton>
				{img}
				<span>{text}</span>
			</CTAButton>
		</a>
	) : (
		<Link to={to}>
			<CTAButton>
				{img}
				<span>{text}</span>
			</CTAButton>
		</Link>
)
