import React, { useState, useEffect } from 'react'
import colors from 'Components/colors'
import { fetchLastEvents } from '../wikiAPI'
import { sortBy } from '../utils'
import styled from 'styled-components'
import { Tags, Card, CardList } from '../UI'

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
			<CardList>
				{sortBy('data.data.startDate')(data)
					.reverse()
					.map((data) => (
						<Card>
							{data.data.startDate}
							<a href={data.fullurl || '#'}>
								<h3>{data.title}</h3>
							</a>
							{data.data.Tags && (
								<Tags>
									{data.data.Tags.split(',').map((tag) => (
										<li>{tag}</li>
									))}
								</Tags>
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
						</Card>
					))}
			</CardList>

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
