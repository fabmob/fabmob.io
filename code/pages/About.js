import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Link } from 'Components/Lang'
import pages from 'Code/getContent.js'
import { PageMain } from '../UI'
import Page from '../Page'
import Nav2 from 'Components/Nav2'
import Ecosystem from './Ecosystem'
import colors from 'Components/colors'
import { ArticleStyle } from 'Code/UI'

export default () => (
	<div
		css={`
			display: flex;
			flex-wrap: wrap;
		`}
	>
		<Nav2
			titre="À propos"
			data={navData}
		/>
		<div
			css={`
				@media (min-width: 800px) {
					margin-left: 300px;
				}
				padding: 2%;
				width: calc(95% - 20rem);
				@media (max-width: 800px) {
					width: 100%;
				}
				h1,
				h2,
				h3,
				h4,
				h5 {
					text-align: left;
				}
			`}
		>
			<Switch>
				<Route path="/à-propos/nous">
					<Ecosystem />
				</Route>
				<Route exact path="/à-propos/reseaufabriques">
					<AutresFabriques/>
				</Route>
				<Route exact path="/à-propos/:id">
					<Page articles={pages} />
				</Route>
				<Route path="/à-propos">
					<Redirect to="/à-propos/manifeste" />
				</Route>
			</Switch>
		</div>
	</div>
)
const AutresFabriques = () => (
	<ArticleStyle>
		<h2>Les autres fabriques</h2>
		<p>
			Le modèle de la fabrique, initié en France sur la mobilité, se réplique
			dans d'autres pays et domaines.
		</p>
		<div
			css={`
				display: flex;
				justify-content: center;
				align-items: center;
				> a {
					width: 16rem;
					padding: 0.6rem;
					margin: 1rem;
					font-weight: bold;
					text-transform: uppercase;
					border: none;
					border-radius: 0.3rem;
				}
				img {
					border-radius: 0.3rem;
					height: 6rem;
					display: block;
				}
			`}
		>
			<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Centre_d’excellence_des_technologiques_ouvertes_pour_la_mobilité">
				<img src="https://wiki.lafabriquedesmobilites.fr/images/fabmob/3/38/FabMob_Qu%C3%A9bec_logo_web.png"></img>
				<span>La FabMob Québec</span>
			</a>
			<a href="https://www.lafabriquedelalogistique.fr/">
				<img src="https://wiki.lafabriquedesmobilites.fr/images/fabmob/1/1c/Fablog.jpg"></img>
				<span>La Fabrique de la Logistique</span>
			</a>
			<a href="https://www.fabsan.cc/">
				<img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_100/3323786/651536_218672.png"></img>
				<span>La Fabrique des Santés</span>
			</a>		
		</div>
		<div
			css={`
				display: flex;
				justify-content: center;
				align-items: center;
				> a {
					width: 16rem;
					padding: 0.6rem;
					margin: 1rem;
					font-weight: bold;
					text-transform: uppercase;
					border: none;
					border-radius: 0.3rem;
				}
				img {
					border-radius: 0.3rem;
					height: 6rem;
					display: block;
				}
			`}
		>
			<a href="https://fabpeda.org/">
				<img src="/images/LogoFabpeda1.jpg"></img>
				<span>La Fabrique des Communs Pédagogiques</span>
			</a>
			<a href="https://fabenergies.cc/">
				<img src="/images/Logo_fabrique-des-energies.png"></img>
				<span>La Fabrique des Bifurcations Énergétiques</span>
			</a>
			<a href="https://www.ign.fr/institut/la-fabrique-des-geocommuns-incubateur-de-communs-lign">
				<img src="/images/logo_fabrique_geocommuns.jpg"></img>
				<span>La Fabrique des géocommuns</span>
			</a>
		</div>
	</ArticleStyle>
)
export const navData = {
	'/à-propos/manifeste': 'Manifeste',
	'/à-propos/nous': 'Qui sommes nous ?',
	'/à-propos/partenaires': 'Partenaires',
	'/à-propos/statuts': 'Statuts et documents d’activité',
	'/à-propos/reseaufabriques': 'Le réseau des fabriques',
	'/blog': 'Blog'
	// urgence: "L'urgence",
	// 'mentions-légales-et-données':
	// 	'Mentions légales & données personnelles',
}