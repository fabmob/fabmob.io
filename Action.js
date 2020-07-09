import React from 'react'
import { Link } from './Lang'

export default () => (
	<div>
		<header>
			<h1>Passer à l'action</h1>
		</header>
		<div css="text-align: center">
			<p>La Fabrique est une assoctiation 1901.</p>
			<a
				href="https://www.helloasso.com/associations/la-fabrique-des-mobilites/adhesions/adhesions-2019-2020"
				target="_blank"
			>
				<i>Adhérer à FabMob France</i>
			</a>
		</div>
		<Présentation />
	</div>
)

let Présentation = () => (
	<main>
		<section
			css={`
				img {
					width: 8rem;
					margin-top: 1rem;
				}
				aside {
					width: 13rem;
				}
				aside h3 {
					margin: 0 0.3rem;
				}
				aside p {
					margin: 0.3rem;
				}
			`}
		>
			<header>
				<p>
					En 2 minutes, accédez à la galaxie FabMob en créant un compte unique
					galaxie FabMob
				</p>

				<a
					href="https://id.indie.host/auth/realms/fabmob-io/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fwiki.lafabriquedesmobilites.fr%2Fwiki%2FSp%25C3%25A9cial%3AConnexion&client_id=wiki&scope=openid"
					target="_blank"
				>
					<i>Créer un compte FabMobId</i>
				</a>
			</header>
			<aside>
				{/* <img src={require('./images/vélo.svg').default}></img>*/}
				<h3>Le chat</h3>
				<p>Discutez en direct avec toutes nos communautés</p>
				<a href="https://chat.fabmob.io">chat.fabmob.io</a>
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/55/RocketChat_Logo_1024x1024.png" />
				<p>
					<a href="https://chat.fabmob.io">
						<em>Discuter↗</em>
					</a>
				</p>
			</aside>
			<aside>
				{/* <img src={require('./images/appli.svg').default}></img>*/}
				<h3>Le pad</h3>
				<p>Prenez de notes collaboratives</p>
				<a href="https://pad.fabmob.io">pad.fabmob.io</a>
				<img src="https://d33wubrfki0l68.cloudfront.net/5a26e2c8eafa7e50df52260b0f912f53a4c52efe/002dd/assets/images/tool-icons/codimd.png" />
				<p>
					<a href="#">
						<em>Prenez des notes↗</em>
					</a>
				</p>
			</aside>
			<aside>
				{/* <img src={require('./images/appli.svg').default}></img>*/}
				<h3>Le Wiki</h3>
				<p>Plongez dans le contenu et participez à sa construction</p>
				<a href="https://wiki.fabmob.io">wiki.fabmob.io</a>
				<img src="https://www.mediawiki.org/static/images/project-logos/mediawikiwiki.png" />
				<p>
					<a href="#">
						<em>Documenter↗</em>
					</a>
				</p>
			</aside>
			<aside>
				<h3>Le forum</h3>
				<p>Discutez de façon posée</p>
				<a href="https://forum.fabmob.io">forum.fabmob.io</a>
				<img src="https://www.discourse.org/a/img/favicon.png" />
				<p>
					<a href="https://forum.fabmob.io">
						<em>Discuter posément↗</em>
					</a>
				</p>
			</aside>
			<aside>
				{/* <img src={require('./images/appli.svg').default}></img>*/}
				<h3>Le cloud</h3>
				<p>Téléchargez et partagez des fichiers</p>
				<a href="https://cloud.fabmob.io">cloud.fabmob.io</a>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/2560px-Nextcloud_Logo.svg.png" />
				<p>
					<a href="https://cloud.fabmob.io">
						<em>Télécharger↗</em>
					</a>
				</p>
			</aside>
		</section>
	</main>
)
