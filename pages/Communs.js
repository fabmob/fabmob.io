import React, { useState, useEffect } from 'react'
import colors from 'Components/colors'
import { fetchSelectedCommuns } from '../wikiAPI'
import communsFabmob from '../communs-fabmob.yaml'

export default ({}) => {
	const [communs, setCommuns] = useState([])
	console.log('COMMUNS', communs)
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
				<h1>Les communs </h1>
				<p>
					Un commun c'est n'importe quelle ressource utile à quelqu'un (un site
					Web, un logiciel, les plans d'un objet, le process de fabrication d'un
					objet), ayant la particularité d'
					<strong>être ouverte et contributive</strong> : son code est lisible
					et on peut, selon certaines conditions, se l'approprier pour
					l'améliorer.{' '}
				</p>
			</header>
			<h2>Les communs FabMob</h2>
			<ul
				css={`
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
				`}
			>
				{communs.map((commun) => (
					<li
						css={`
							box-shadow: var(--box-shadow) var(--color-bg-secondary);
							border: 1px solid var(--color-bg-secondary);
							border-radius: var(--border-radius);
							margin: 1rem;
							width: 80%;
							width: 20rem;
							height: 16rem;
							padding: 1rem;
							> ul {
								margin-bottom: 0.6rem;
							}
							> ul > li {
								display: inline-block;
								border: 1px solid ${colors.jauneVert};
								border: 1px solid #ddd;
								background: var(--color-bg-secondary);
								/* box-shadow: var(--box-shadow) var(--color-bg-secondary); */
								padding: 0rem 0.6rem;
								margin: 0.2rem;
								line-height: 1.2rem;
								font-size: 90%;
								border-radius: 0.3rem;
							}
							img {
								max-width: 10rem;
								max-height: 5rem;,
								border-radius: 0.6rem;
							}
						`}
					>
						<a href={commun.fullurl || '#'}>
							<h3>{commun.title}</h3>
						</a>
						{commun.data.Tags && (
							<ul>
								{commun.data.Tags.split(',').map((tag) => (
									<li>{tag}</li>
								))}
							</ul>
						)}
						{commun.data.Main_Picture && (
							<img
								src={
									'https://wiki.lafabriquedesmobilites.fr/wiki/Special:Filepath/' +
									commun.data.Main_Picture
								}
							/>
						)}
						a
						{commun.data.shortDescription &&
							commun.data.shortDescription.trim() !== commun.title && (
								<p>{commun.data.shortDescription}</p>
							)}
					</li>
				))}
			</ul>

			<div
				css={`
					background: var(--color-secondary);
					max-width: 400px;
					margin: 0 auto;
					padding: 1rem 4rem;
				`}
			>
				<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Accueil#Nos_12_Communs_en_cours_de_production">
					Explorer tous les communs sur le wiki
				</a>
			</div>
		</section>
	)
}
