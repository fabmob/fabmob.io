import React, { useState, useEffect, useContext } from 'react'
import colors from 'Components/colors'
import { fetchLastEvents } from '../wikiAPI'
import { sortBy } from '../utils'
import styled from 'styled-components'
import { Title, Tags, Card, CardList } from '../UI'
import { WikiContext } from '../App'
import Meta from '../Meta'

export const Newsletter = () => (
	<p>
		Pour ne rien rater, abonnez-vous à notre{' '}
		<a href="https://9fb3d644.sibforms.com/serve/MUIFAOQnFNyyn5Kfp1XK5ABDzukRh5tKyEbrTQB6dOdyfYuuF16pfrR-fjQufFYb54qVx7OqaIRBObnP9XBEdusublka34mZZI3Acb5rgABffvu8v_nSLhgje1HvyLFKMzNI6oYvm8hw1VKkS4lQoNaNW5N9rS1BYmSZYNXV609gQB0OtlOihK245-CPP3umEORQf5A46z-HVWWC">
			📮 lettre d'information
		</a>
	</p>
)

export default ({}) => {
	const [data] = useContext(WikiContext)
	return (
		<section
			css={`
				h2 {
					text-align: center;
				}
				h3 {
					margin: 0.4rem 0;
				}
			`}
		>
			<header>
				<Meta
					title="Nos événements"
					description="Découvrez nos événements à venir : ateliers, conférences, discussions techniques, etc."
				/>
				<Title colors={[colors.jaune, colors.jauneVert]}>Les événements </Title>
				<Newsletter />
			</header>
			<CardList>
				{sortBy('data.startDate')(data)
					.reverse()
					.map((data) => (
						<Card>
							{new Date(data.data.startDate).toLocaleString('fr-FR', {
								weekday: 'long',
								month: 'long',
								day: 'numeric',
								year: 'numeric',
							})}
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
					a {
						color: black;
					}
				`}
			>
				<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Evénements">
					Explorer tous les événements sur le wiki
				</a>
			</div>
		</section>
	)
}
