import React, { useState, useEffect } from 'react'
import colors from 'Components/colors'
import { fetchSelectedCommuns } from '../wikiAPI'
import communsFabmob from 'Content/communs-fabmob.yaml'
import { Tags, Card, CardList, Title } from '../UI'
import Meta from '../Meta'

export default ({}) => {
	const [communs, setCommuns] = useState([])
	useEffect(() => {
		fetchSelectedCommuns(communsFabmob)(setCommuns)
	}, [])
	return (
		<section
			css={`
				h2 {
					text-align: center;
				}
			`}
		>
			<header>
				<Meta
					title="Les communs et communautés FabMob"
					description="Découvrez les communs, des projets ouverts que nous développons activement pour bousculer notre mobilité"
				/>
				<Title colors={[colors.vert, colors.jauneVert]}>Les communs et communautés</Title>
				<p>
					{/* Un commun c'est n'importe quelle ressource utile à quelqu'un (un site
					Web, un logiciel, les plans d'un objet, le process de fabrication d'un
					objet), ayant la particularité d'
					<strong>être ouverte et contributive</strong> : son code est lisible
					et on peut, selon certaines conditions, se l'approprier pour
					l'améliorer. */}
					<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Communs">
						En savoir plus au sujet des communs sur notre wiki
					</a>
				</p>
			</header>
			{/* <h2>Les communs et communautés FabMob</h2> */}
			<CardList>
				{communs.map((commun) => (
					<Commun
						commun={{
							...commun,
							fullurl: commun.title.includes('Traceur')
								? '/tracemob'
								: commun.fullurl,
						}}
					/>
				))}
			</CardList>

			<div
				css={`
					background: var(--color-secondary);
					max-width: 400px;
					margin: 0 auto;
					padding: 1rem 4rem;
					text-align: center;
					a {
						color: black;
					}
				`}
			>
				<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Accueil#Nos_12_Communs_en_cours_de_production">
					Explorer tous les communs sur le wiki
				</a>
			</div>
		</section>
	)
}

const Commun = ({ commun }) => (
	<Card css="height: 26rem">
		<a href={commun.fullurl || '#'}>
			<h3>{commun.title}</h3>
		</a>
		{commun.data.Tags && (
			<Tags>
				{commun.data.Tags.split(',').map((tag) => (
					<li>{tag}</li>
				))}
			</Tags>
		)}
		{commun.data.Main_Picture && (
			<img
				src={
					'https://wiki.lafabriquedesmobilites.fr/wiki/Special:Filepath/' +
					commun.data.Main_Picture
				}
			/>
		)}
		{commun.data.shortDescription &&
			commun.data.shortDescription.trim() !== commun.title && (
				<p>{commun.data.shortDescription}</p>
			)}
	</Card>
)
