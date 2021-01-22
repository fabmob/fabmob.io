import React, { useState, useEffect } from 'react'
import colors from 'Components/colors'
import { fetchLastEvents } from '../wikiAPI'
import communsFabmob from '../communs-fabmob.yaml'
import { sortBy } from '../utils'

export default ({}) => {
	const [data, setData] = useState([])
	useEffect(() => {
		fetchLastEvents(setData)
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
				<h1>Les événements </h1>
			</header>
			<ul
				css={`
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
				`}
			>
				{sortBy('data.data.startDate')(data)
					.reverse()
					.map((data) => (
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
							{data.data.startDate}
							<a href={data.fullurl || '#'}>
								<h3>{data.title}</h3>
							</a>
							{data.data.Tags && (
								<ul>
									{data.data.Tags.split(',').map((tag) => (
										<li>{tag}</li>
									))}
								</ul>
							)}
							{data.data.Main_Picture && (
								<img
									src={
										'https://wiki.lafabriquedesmobilites.fr/wiki/Special:Filepath/' +
										data.data.Main_Picture
									}
								/>
							)}
							{/* 
						data.data.shortDescription &&
							data.data.shortDescription.trim() !== data.title && (
								<p>{data.data.shortDescription}</p>
							)*/}
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
