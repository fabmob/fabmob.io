import React, { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import colors from 'Components/colors'
import ecosystème from 'Content/ecosystème.yaml'
import { shuffle } from '../utils'
import Adhérents from 'Pages/Adhérents'
import { ArticleStyle } from '../UI'
import Meta from '../Meta'
import { CTA, CTAArrow } from 'Pages/Accueil'
import { Link } from 'Components/Lang'
import {Surligne} from 'Components/Surligne'

export default () => {
	const [filter, setFilter] = useState({})
	const location = useLocation()
	return (
		<ArticleStyle
			colors={[colors.bleu, colors.bleuClair]}
		>
			<Présentation filter={filter} location={location} />
		</ArticleStyle>
	)
}

let Présentation = ({ filter, location }) => (
	<main>
		<Meta
			title="La FabMob, c'est qui ?"
			description="Découvrez qui se cache derrière la FabMob : l'équipe, le conseil d'administration, les adhérents et les acteurs de la communauté"
		/>
		<section
			css={`
				aside {
					width: 12rem;
					text-align: center;
					padding: 0.4rem;
					display: flex;
					align-items: center;
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
					margin: 0.4rem auto 0.4rem auto;
					filter: grayscale(1);
				}
				aside p {
					margin: 0.3rem;
				}
			`}
		>
			<div css={`
					display: flex;
					flex-direction: column;
					margin-bottom: 20px;
					line-height: 44px;
					span {
						padding: 10px;
					}
					@media (min-width: 1200px) {
						flex-direction: row;
						span {
							margin-right: 30px;
						}
					}
					a {
						color: black;
						text-transform: uppercase;
					}
				`}>
				<Link to="/à-propos/nous">{location.pathname ===  "/à-propos/nous" ? <Surligne>Équipe</Surligne> : <span>Équipe</span>}</Link>
				<Link to="/à-propos/nous/conseiladministration">{location.pathname ===  "/à-propos/nous/conseiladministration" ? <Surligne>Conseil d'administration</Surligne> : <span>Conseil d'administration</span>}</Link>
				<Link to="/à-propos/nous/cooperateurs">{location.pathname ===  "/à-propos/nous/cooperateurs" ? <Surligne>Coopérateurs</Surligne> : <span>Coopérateurs</span>}</Link>
			</div>
			<Switch>
				<Route exact path="/à-propos/nous">
					<Members data={ecosystème["L'équipe"]} />
				</Route>
				<Route exact path="/à-propos/nous/conseiladministration">
					<Members data={ecosystème["Le conseil d'administration"]} />
				</Route>
				<Route exact path="/à-propos/nous/cooperateurs">
					<Members data={ecosystème["Coopérateurs"]} />
				</Route>
				{/* <Route exact path="/à-propos/nous/adherents">
					<Adhérents />
				</Route> */}
			</Switch>
		</section>
		
	</main>
)

const Members = ({ data }) => (
	<div css="display:flex; justify-content: left;flex-wrap: wrap">
		{shuffle(data).map(({ nom, image, rôle, linkedin }) => (
			<aside>
				{linkedin 
					? <a href={linkedin} target="_blank"><img src={image} title={nom} /></a>
					:<img src={image} title={nom} />
				}
				<h3>{nom}</h3>
				<p>{rôle}</p>
			</aside>
		))}
	</div>
)


// const Surligné = styled.span`
// 	background: yellow;
// 	font-weight: normal;
// 	color: black;
// `
// const CTAButton = styled.button`
// 	width: 250px;
//         height: 40px;
// 	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
// 	border: none;
// 	border-radius: 0;
// 	display: block;
// 	padding: 0.6rem;
// 	display: flex;
// 	justify-content: center;
// 	margin: 0.6rem 0;
// `

// const CTAArrow = () => (
// 	<img
// 		src="/images/flèche-nord-est.svg"
// 		css="width: 1rem; margin-right: 1rem; "
// 	/>
// )
// const CTA = ({ to, text, img }) =>
// 	to.includes('http') ? (
// 		<a href={to}>
// 			<CTAButton>
// 				{img}
// 				<span>{text}</span>
// 			</CTAButton>
// 		</a>
// 	) : (
// 		<Link to={to}>
// 			<CTAButton>
// 				{img}
// 				<span>{text}</span>
// 			</CTAButton>
// 		</Link>
// )
