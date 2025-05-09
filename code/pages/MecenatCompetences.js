import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Title } from '../UI'
import Meta from '../Meta'
import colors from 'Components/colors'
import missionsMecenat from 'Content/mecenat-competences.yaml'

const MecenatVignette = ({missionMecenat}) => {
	const {
		titre,
		description,
		poste,
		commun,
		image,
		dateDebut,
		dateFin,
		url
	} = missionMecenat
	return (
		<div
			css={`	
				border: 1px solid var(--color-bg-secondary);
				border-radius: var(--border-radius);
				box-shadow: var(--box-shadow) var(--color-shadow);
				margin: 1rem;
				padding: 1.25rem;
				width: 80%;
				display: flex;
				flex-direction: row;
				@media (max-width: 1100px) {
					flex-direction: column;
				}
				justify-content: normal;
				align-items: center;
				p {
					margin-bottom: 0.3rem;
				}
				header {
					margin-bottom: 1rem;
				}
				header > a {
					text-decoration: none;
				}
				h2 {
					display: block;
					text-decoration: none;
					margin-bottom: 0.3rem;
				}
				margin-bottom: 3rem;
				ul {
					padding-left: 40px;
					list-style-type: initial;
				}
				button {
					padding: 0.5rem;
					margin: 0.5rem;
					font-weight: normal;
				}
			`}
		>
			<div>
				<img
					css={`
						max-height: 10rem;
						width: 10rem;
						box-shadow: rgb(147, 143, 143) 2px 2px 10px 0px;
						margin: 1rem;
					`}
					src={
						image
					}
				></img>
			</div>
			<div css={`flex-grow: 1; padding-left: 1rem`}>
				<div>
					<h2>{titre}</h2>
					<div>
						<span title="Type de poste">💼 {poste}</span>
						<span title="Commun concerné" css={`padding-left: 1rem`}>🚀 {commun}</span>
					</div>
					<small title="Date de début et de fin de la mission">{dateDebut} - {dateFin}</small>
				</div>
				
				<div>
					<ReactMarkdown source={description} />
				</div>
				<div>
					{url && <a href={url}><button>🔍 Plus d'informations</button></a>}
					<a href={`mailto:contact@fabmob.io?subject=Mission mécénat: ${titre}`}><button>📧 Nous contacter</button></a> 
				</div>
			</div>
		</div>
	)
}

export default () => {
	const [posteFilter, setPosteFilter] = useState({})
	const [communFilter, setCommunFilter] = useState({})
	const location = useLocation()
	const params = new URLSearchParams(location.search)
	const paramId = params.get("id")

	useEffect(() => {
		let postes = {}
		let communs = {}
		for (const mission of missionsMecenat) {
			mission.poste.split(',').forEach(poste => postes[poste.trim()] = false)
			communs[mission.commun.trim()] = false
		}
		setPosteFilter(postes)
		setCommunFilter(communs)
	}, [])
	const filterMissions = (mission) => {
		// If a specific mission is in query param, only display this one
		if (paramId) {
			return mission.id == paramId
		}
		// Check if all values are false
		const allFalsePosts = Object.values(posteFilter).every(v => v === false)
		const allFalseCommuns = Object.values(communFilter).every(v => v === false)
		if (allFalsePosts && allFalseCommuns) {
			return true
		}
		let p = mission.poste.split(',').map(poste => poste.trim())
		let c = mission.commun.trim()
		if (allFalsePosts) {
			return communFilter[c] === true
		}
		if (allFalseCommuns) {
			return p.some(poste => posteFilter[poste] == true)
		}
		return p.some(poste => posteFilter[poste] == true) && communFilter[c] === true
	}
	const postesKeys = Object.keys(posteFilter).sort((a,b) => a.localeCompare(b))
	const communsKeys = Object.keys(communFilter).sort((a,b) => a.localeCompare(b))
	return (
		<div>
			<header>
				<Title colors={[colors.jaune, colors.jauneVert]}>Mécénat de compétences</Title>
				<Meta
					title="Mécénat de compétences"
					description="Liste de missions de mécénat de compétences au service de la décarbonation de la mobilité"
				/>
			</header>
			<div css={`width: 80%; margin: auto`}>
				<p>
						Liste de missions de mécénat de compétences au service de la décarbonation de la mobilité. 
						Pour plus d'informations, consultez <a href="https://cloud.fabmob.io/s/mn4NLE2GgMcArTG">notre présentation sur les différents types de mécénat possibles à la Fabrique des Mobilités</a>.
					</p>
					{!paramId && <div css={`
						button {
							margin: 0.1rem;
							padding: 0.1rem 0.6rem;
						}
					`}>
						<div>Filtrer par poste</div>
						{postesKeys.map(poste => <button 
							key={poste}
							css={posteFilter[poste] ? 'background: var(--color-secondary)' : ''}
							onClick={() => setPosteFilter({...posteFilter, [poste]: !posteFilter[poste]})}
						>{poste}</button>)}
						<div css={`margin-top: 1rem`}>Filtrer par commun</div>
						{communsKeys.map(commun => <button 
							key={commun}
							css={communFilter[commun] ? 'background: var(--color-secondary)' : ''}
							onClick={() => setCommunFilter({...communFilter, [commun]: !communFilter[commun]})}
						>{commun}</button>)}

					</div>
					}
					{paramId && <div css={`
						button {
							margin: 0.1rem;
							padding: 0.1rem 0.6rem;
						}
					`}>
						<div>Filtre par mission</div>
						<button disabled>{missionsMecenat.find(mission => mission.id == paramId).titre}</button>
						<div>
							<a href="/participer/mecenat">Afficher l'ensemble des missions</a>
						</div>
					</div>}
			</div>
			<div
				css={`
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
				`}
			>
				{missionsMecenat.filter(filterMissions).length === 0 && <p>Aucune mission ne correspond à vos critères</p>}
				{missionsMecenat.filter(filterMissions).map((missionMecenat) => (
					<MecenatVignette key={missionMecenat.titre} missionMecenat={missionMecenat} />
				))}
			</div>
		</div>
	)
}
