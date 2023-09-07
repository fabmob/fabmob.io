import React, { useState, useEffect } from 'react'
import { fetchSelectedCommuns } from '../wikiAPI'
import publicationsFabmob from 'Content/publications-fabmob.yaml'
import { Tags, Card, CardList, Title } from '../UI'
import Meta from '../Meta'

export default ({}) => {
	const [publications, setPublications] = useState([])
	useEffect(() => {
		console.log("publicationsFabmob", publicationsFabmob)
		fetchSelectedCommuns(publicationsFabmob.map(p=>p.id_wiki))(fetchedPublications => {
			console.log("fetchedPublications", fetchedPublications)
			setPublications(publicationsFabmob.map(originalPublication => {
				const fetchedPublication = fetchedPublications.find(p => p.title === originalPublication.id_wiki.replaceAll("_", " "))
				return {
					...fetchedPublication,
					originalPublication: originalPublication
				}
			}))
		})
	}, [])
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
			<header>
				<Meta
					title="Les publications FabMob"
					description="Nos publications et rapports recents"
				/>
				<h2>Nos publications et rapports recents</h2>
			</header>
			<CardList>
				{publications.map((publication) => (
					<Publication  key={publication.originalPublication.id_wiki} publication={publication} />
				))}
			</CardList>
			<footer>
				<hr/>
				<p>Pour en lire plus, consultez aussi notre <a href="/blog">blog</a>.</p>
			</footer>
		</section>
	)
}

const Publication = ({ publication: publication }) => (
	<Card css="height: 26rem">
		<a href={publication.fullurl || '#'}>
			<h3>{publication.title || publication.originalPublication.id_wiki.replaceAll("_", " ")}</h3>
		</a>
		<Tags>
			<li>{publication.originalPublication.date}</li>
		</Tags>
		{publication?.data?.Main_Picture && (
			<img
				src={
					'https://wiki.lafabriquedesmobilites.fr/wiki/Special:Filepath/' +
					publication.data.Main_Picture
				}
			/>
		)}
		<p>{publication.originalPublication.description}</p>
	</Card>
)
