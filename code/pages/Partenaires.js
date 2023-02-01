import React, { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import colors from 'Components/colors'
import ecosystème from 'Content/ecosystème.yaml'
import { shuffle } from '../utils'
import { ArticleStyle } from '../UI'
import Meta from '../Meta'
import { Link } from 'Components/Lang'
import {Surligne} from 'Components/Surligne'

export default () => {
	const [filter, setFilter] = useState({})
	const location = useLocation()
	return (
		<ArticleStyle
			colors={[colors.bleu, colors.bleuClair]}
		>
			<Partenaires filter={filter} location={location} />
		</ArticleStyle>
	)
}

let Partenaires = ({ filter, location }) => (
	<main>
		<Meta
			title="Les partenaires de la fabrique"
			description="Découvrez les adhérents et les acteurs de la communauté"
		/>
		<section
			css={`
				aside {
					width: 12rem;
					text-align: center;
					padding: 0.4rem;
					display: flex;
					align-items: center;
					overflow: hidden;
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
				<Link to="/à-propos/partenaires">{location.pathname ===  "/à-propos/partenaires" ? <Surligne>Partenaires</Surligne> : <span>Partenaires</span>}</Link>
				<Link to="/à-propos/partenaires/adherents">{location.pathname ===  "/à-propos/partenaires/adherents" ? <Surligne>Adhérents</Surligne> : <span>Adhérents</span>}</Link>
			</div>
			<Switch>
				<Route exact path="/à-propos/partenaires">
					<Members data={ecosystème["Partenaires"]} />
				</Route>
				<Route exact path="/à-propos/partenaires/adherents">
					<Members data={ecosystème["Adherents"]} />
				</Route>
			</Switch>
		</section>
		
	</main>
)

const Members = ({ data }) => (
	<div css="display:flex; justify-content: left;flex-wrap: wrap">
		{shuffle(data).map(({ nom, image, siteweb }) => (
			<aside>
                <a href={siteweb} target="_blank"><img src={image} title={nom} /><h3>{nom}</h3></a>
			</aside>
		))}
	</div>
)
