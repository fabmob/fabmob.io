import React from 'react'
import { Link } from 'Components/Lang'
import { CardList, Card, Title } from '../UI'
import colors from 'Components/colors'
import Meta from '../Meta'

export default () => (
	<div>
		<header>
			<Title colors={[colors.jaune, colors.jauneVert]}>Passer à l'action</Title>
			<Meta
				title="Participez en pratique !"
				description="Nous mettons à disposition de nos adhérents et de notre communauté tous les meilleurs outils open source pour échanger et travailler efficacement."
			/>
		</header>
		<div
			css={`
				> div {
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					margin-bottom: 1rem;
				}

				> div p {
					margin: 0 1rem;
					width: 20rem;
				}
				> div button {
					margin-top: 0.6rem;
					width: 20rem;
				}
			`}
		>
			<div css="">
				<p>La Fabrique est une association 1901.</p>
				<a
					href="https://www.helloasso.com/associations/la-fabrique-des-mobilites/adhesions/adhesions-2020-2021"
					target="_blank"
				>
					<button>Adhérer à FabMob France</button>
				</a>
			</div>
			<div>
				<p>
					En 2 minutes, accédez à la galaxie FabMob en créant votre compte
					unique.
				</p>

				<a
					href="https://id.indie.host/auth/realms/fabmob-io/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fwiki.lafabriquedesmobilites.fr%2Fwiki%2FSp%25C3%25A9cial%3AConnexion&client_id=wiki&scope=openid"
					target="_blank"
				>
					<button>Créer un compte FabMobID</button>
				</a>
			</div>
		</div>
		<Présentation />
	</div>
)

let Présentation = () => (
	<main>
		<p css="text-align: center">
			Ce compte centralisé vous permet d'accéder à tous nos outils :{' '}
		</p>
		<section>
			<CardList
				css={`
					li {
						height: 22rem;
						padding-left: 2rem;
					}
					li a {
						display: block;
					}
					li img {
						height: 6rem;
						max-width: inherit;
					}
					h3 {
						margin-top: 0rem;
					}
					p {
						height: 3rem;
					}
				`}
			>
				<Card>
					{/* <img src={require('./images/appli.svg').default}></img>*/}
					<h3>Le Wiki</h3>
					<p>Plongez dans le contenu et participez à sa construction</p>
					<a href="https://wiki.fabmob.io">wiki.fabmob.io</a>
					<img src="https://www.mediawiki.org/static/images/project-logos/mediawikiwiki.png" />
					<p>
						<a href="#">
							<button>Documenter↗</button>
						</a>
					</p>
				</Card>
				<Card>
					<h3>Le forum</h3>
					<p>Discutez de façon posée</p>
					<a href="https://forum.fabmob.io">forum.fabmob.io</a>
					<img src="https://www.discourse.org/a/img/favicon.png" />
					<p>
						<a href="https://forum.fabmob.io">
							<button>Discuter posément↗</button>
						</a>
					</p>
				</Card>
				<Card>
					{/* <img src={require('./images/vélo.svg').default}></img>*/}
					<h3>Le chat</h3>
					<p>Discutez en direct avec toutes nos communautés</p>
					<a href="https://chat.fabmob.io">chat.fabmob.io</a>
					<img src="https://upload.wikimedia.org/wikipedia/commons/5/55/RocketChat_Logo_1024x1024.png" />
					<p>
						<a href="https://chat.fabmob.io">
							<button>Discuter↗</button>
						</a>
					</p>
				</Card>
				<Card>
					{/* <img src={require('./images/appli.svg').default}></img>*/}
					<h3>Le pad</h3>
					<p>Prenez de notes collaboratives</p>
					<a href="https://pad.fabmob.io">pad.fabmob.io</a>
					<img src="https://d33wubrfki0l68.cloudfront.net/5a26e2c8eafa7e50df52260b0f912f53a4c52efe/002dd/assets/images/tool-icons/codimd.png" />
					<p>
						<a href="https://pad.fabmob.io/">
							<button>Prenez des notes↗</button>
						</a>
					</p>
				</Card>
				<Card>
					{/* <img src={require('./images/appli.svg').default}></img>*/}
					<h3>Le cloud</h3>
					<p>Téléchargez et partagez des fichiers</p>
					<a href="https://cloud.fabmob.io">cloud.fabmob.io</a>
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/2560px-Nextcloud_Logo.svg.png" />
					<p>
						<a href="https://cloud.fabmob.io">
							<button>Télécharger↗</button>
						</a>
					</p>
				</Card>
				<Card>
					{/* <img src={require('./images/appli.svg').default}></img>*/}
					<h3>Nos codes</h3>
					<p>Explorer et construire des produits</p>
					<a href="https://github.com/fabmob.fabmob.io">github.com/fabmob</a>
					<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
					<p>
						<a href="https://github.com/fabmob.fabmob.io">
							<button>Coder</button>
						</a>
					</p>
				</Card>
			</CardList>
		</section>
	</main>
)
