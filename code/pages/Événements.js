import React, { useState, useEffect, useContext } from 'react'
import { sortBy } from '../utils'
import { Title, Tags, Card, CardList } from '../UI'
import events from 'Content/evenements-fabmob.yaml'
import Meta from '../Meta'

let yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)
const futureEvents = events.filter(event => new Date(event.date) > yesterday)
const pastEvents = events.filter(event => new Date(event.date) <= yesterday)

export const Newsletter = () => (
	<p>
		Pour ne rien rater, abonnez-vous à notre{' '}
		<a href="https://9fb3d644.sibforms.com/serve/MUIFAOQnFNyyn5Kfp1XK5ABDzukRh5tKyEbrTQB6dOdyfYuuF16pfrR-fjQufFYb54qVx7OqaIRBObnP9XBEdusublka34mZZI3Acb5rgABffvu8v_nSLhgje1HvyLFKMzNI6oYvm8hw1VKkS4lQoNaNW5N9rS1BYmSZYNXV609gQB0OtlOihK245-CPP3umEORQf5A46z-HVWWC">
			📮 lettre d'information
		</a>
	</p>
)

export const EvtCard = ({ event, index, showRegister }) => {
	let dateFmt
	if (event.date.length > 10) { // Contains hours
		dateFmt = new Date(event.date).toLocaleString('fr-FR', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		})
	} else {
		dateFmt = new Date(event.date).toLocaleString('fr-FR', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		})
	}
	return (
	<Card key={index} css="height: 30rem; width: 30rem; position: relative">
		{dateFmt}
		<a href={event.url || '#'}>
			<h3>{event.title}</h3>
		</a>
		{event.picture && (
			<img
				src={event.picture}
			/>
		)}
		{event.description && <p>{event.description}</p>}
		{showRegister && event.url && <div css="position: absolute; bottom: 0;">
			<a href={event.url || '#'}><button>S'inscrire</button></a>
		</div>}
	</Card>
)}

export default ({}) => {
	return (
		<section
			css={`
				header {
					max-width: 800px;
				}
				header p {
					margin: 0;
					text-align: left;
				}
			`}
		>
			<header css="max-width: 66rem !important">
				<Meta
					title="Nos événements"
					description="Découvrez nos événements à venir : ateliers, conférences, discussions techniques, etc."
				/>
				<h2>Les événements</h2>
				<Newsletter />
			</header>

			<CardList>
				{sortBy('date')(futureEvents)
					.map((event, index) => (
						<EvtCard event={event} index={index} showRegister={true}></EvtCard>
					))}
			</CardList>
			<div css="max-width: 66rem; margin: auto;">
				<h2>Événements passés</h2>
			</div>
			<CardList>
				{sortBy('date')(pastEvents)
					.reverse()
					.map((event, index) => (
						<EvtCard event={event} index={index} showRegister={false}></EvtCard>
					))}
			</CardList>
		</section>
	)
}
