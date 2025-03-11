import React from 'react'
import { Link } from 'Components/Lang'
import { CardList, Card, Title } from '../UI'
import { Switch, Route, Redirect } from 'react-router-dom'
import Page from '../Page'
import colors from 'Components/colors'
import Meta from '../Meta'
import Nav2 from 'Components/Nav2'
import pages from 'Code/getContent.js'

export default () => (
	<div
		css={`
			display: flex;
			flex-wrap: wrap;
		`}
	>
		<Nav2
			titre="Rejoindre la Fabrique"
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
				<Route exact path="/participer/pourquoiAdherer">
					<Content />
				</Route>
				<Route exact path="/participer/tarifs">
					<Tarifs />
				</Route>
				{/* <Route exact path="/participer/commentRejoindreProjet">
					<CommentRejoindreProjet />
				</Route> */}
				<Route exact path="/participer/outils">
					<Outils />
				</Route>
				<Route exact path="/participer/:id">
					<Page articles={pages} />
				</Route>
				<Route path="/participer">
					<Redirect to="/participer/pourquoiAdherer" />
				</Route>
			</Switch>
		</div>
	</div>
)
export const navData = {
	'/participer/pourquoiAdherer': 'Pourquoi adhérer ?',
	'/participer/tarifs': 'Tarifs',
	// '/participer/commentRejoindreProjet': 'Comment rejoindre un projet ?',
	'/participer/outils': 'Nos outils',
}
// const CommentRejoindreProjet = () => (
// 	<div>
// 		<header>
// 			<Title colors={[colors.jaune, colors.jauneVert]}>Comment rejoindre un projet ?</Title>
// 			<Meta
// 				title="Participez en pratique !"
// 				description="Nous mettons à disposition de nos adhérents et de notre communauté tous les meilleurs outils open source pour échanger et travailler efficacement."
// 			/>
// 		</header>
// 		<div
// 			css={`
// 				> div {
// 					display: flex;
// 					flex-wrap: wrap;
// 					align-items: center;
// 					justify-content: center;
// 					margin-bottom: 1rem;
// 				}

// 				> div p {
// 					margin: 0 1rem;
// 					width: 20rem;
// 				}
// 				> div button {
// 					margin-top: 0.6rem;
// 					width: 20rem;
// 				}
// 			`}
// 		>
// 			<div>
// 				<p>
// 					En 2 minutes, accédez à la galaxie FabMob en créant votre compte
// 					unique.
// 				</p>

// 				<a
// 					href="https://id.indie.host/auth/realms/fabmob-io/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fwiki.lafabriquedesmobilites.fr%2Fwiki%2FSp%25C3%25A9cial%3AConnexion&client_id=wiki&scope=openid"
// 					target="_blank"
// 				>
// 					<button>Créer un compte FabMobID</button>
// 				</a>
// 			</div>
// 		</div>
// 	</div>
// )
const Content = () => (
	
	<div>
		<header>
			<Title colors={[colors.jaune, colors.jauneVert]}>Pourquoi adhérer ?</Title>
			<Meta
				title="Participez en pratique !"
				description="Nous mettons à disposition de nos adhérents et de notre communauté tous les meilleurs outils open source pour échanger et travailler efficacement."
			/>
		</header>
		
		<div css={`
			table, tr, td, th {
				border: 1px solid var(--color-bg-secondary);
			}
			.tddesc { text-align: left }
		`}>
			<table>
				<tr>
					<th></th>
					<th></th>
					<th>Non-adhérent</th>
					<th>Adhérent</th>
				</tr>
				<tr>
					<td rowSpan="3">Rencontrer</td>
					<td className="tddesc">intégrez une communauté d’acteurs publics, privés et associatifs engagée sur les enjeux de transformation de la mobilité</td>
					<td></td>
					<td>✔️</td>
				</tr>
				<tr>
					<td className="tddesc">bénéficiez d’accès privilégiés à des évènements organisés par la Fabrique de la Mobilité</td>
					<td></td>
					<td>✔️</td>
				</tr>
				<tr>
					<td className="tddesc">échangez et partagez avec des acteurs qualifiés de l’écosystème mobilité</td>
					<td></td>
					<td>✔️</td>
				</tr>
				<tr>
					<td rowSpan="3">Se former</td>
					<td className="tddesc">bénéficiez de sessions de formation sur les communs</td>
					<td></td>
					<td>✔️</td>
				</tr>
				<tr>
					<td className="tddesc">accédez à la blibliothèque ouverte de ressources, le wiki</td>
					<td>✔️</td>
					<td>✔️</td>
				</tr>
				<tr>
					<td className="tddesc">recevez des conseils personnalisés pour construire des ressources ouvertes</td>
					<td></td>
					<td>✔️</td>
				</tr>
				<tr>
					<td rowSpan="3">Participer</td>
					<td className="tddesc">co-construisez la vision du futur de la mobilité que porte la Fabrique de la Mobilité</td>
					<td>✔️</td>
					<td>✔️</td>
				</tr>
				<tr>
					<td className="tddesc">participez, en Assemblée Générale, aux décisions d’orientation</td>
					<td></td>
					<td>✔️</td>
				</tr>
				<tr>
					<td className="tddesc">choisissez, avec la communauté, les projets de communs initiés par la Fabrique des Mobilités</td>
					<td></td>
					<td>✔️</td>
				</tr>
				<tr>
					<td rowSpan="2">Soutenir</td>
					<td className="tddesc">contribuez au maintien et au développement du wiki de l’association, bibliothèque ouverte de ressources</td>
					<td>✔️</td>
					<td>✔️</td>
				</tr>
				<tr>
					<td className="tddesc">soutenez financièrement une dynamique de transformation de la mobilité par les communs</td>
					<td></td>
					<td>✔️</td>
				</tr>
			</table>
		</div>
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
					href="mailto:contact@fabmob.io?subject=Demande d'adhésion à la fabrique"
					target="_blank"
				>
					<button>Adhérer à FabMob France</button>
				</a>
			</div>

		</div>
	</div>
)
const Tarifs = () => {
	const [showFullPrice, setShowFullPrice] = React.useState(false)
	return (
		<div css={`
				@media (min-width: 900px) {
					width: 80%;
					margin: auto;
				}
			`}>
			<header>
				<Title colors={[colors.jaune, colors.jauneVert]}>Tarifs</Title>
				<Meta
					title="Participez en pratique !"
					description="Nous mettons à disposition de nos adhérents et de notre communauté tous les meilleurs outils open source pour échanger et travailler efficacement."
				/>
			</header>
			
			<div css={`
				table {
					margin: auto;
					width: 100%;
				}
				table, tr, td, th {
					border: 1px solid var(--color-bg-secondary);
				}
				.tddesc { text-align: left }
				.price {
					white-space: nowrap;
				}
			`}>
				<table>
					<tr>		
						<th>Type</th>
						<th>Taille</th>
						<th>Tarif</th>
						{showFullPrice && <th>Tarif sans réduction d'impôts</th>}
					</tr>
					<tr>
						<td rowSpan="5">Entreprises</td>
						<td className="tddesc">1 à 10 personnes</td>
						<td class="price">300 €</td>
					</tr>
					<tr>
						<td className="tddesc">11 à 50 personnes</td>
						<td class="price">665 €*</td>
						{showFullPrice && <td class="price">1 662,5 €</td>}
					</tr>
					<tr>
						<td className="tddesc">51 à 200 personnes</td>
						<td class="price">1 440 €*</td>
						{showFullPrice && <td class="price">3 600 €</td>}
					</tr>
					<tr>
						<td className="tddesc">201 à 1000 personnes</td>
						<td class="price">2 400 €*</td>
						{showFullPrice && <td class="price">6 000 €</td>}
					</tr>
					<tr>
						<td className="tddesc">1000+ personnes</td>
						<td class="price">3 800 €*</td>
						{showFullPrice && <td class="price">9 500 €</td>}
					</tr>
					<tr>
						<td rowSpan="5">Associations et fondations</td>
						<td className="tddesc">1 à 10 personnes</td>
						<td class="price">240 €</td>
					</tr>
					<tr>
						<td className="tddesc">11 à 50 personnes</td>
						<td class="price">745 €</td>
					</tr>
					<tr>
						<td className="tddesc">51 à 200 personnes</td>
						<td class="price">1 600 €</td>
					</tr>
					<tr>
						<td className="tddesc">201 à 1000 personnes</td>
						<td class="price">2 600 €</td>
					</tr>
					<tr>
						<td className="tddesc">1000+ personnes</td>
						<td class="price">4 200 €</td>
					</tr>
					<tr>
						<td rowSpan="2">Etablissements d'enseignement et organismes de recherche</td>
						<td className="tddesc">individuel</td>
						<td class="price">1 995 €</td>
					</tr>
					<tr>
						<td className="tddesc">groupement</td>
						<td class="price">4 600 €</td>
					</tr>
					<tr>
						<td>Collectivités territoriales</td>
						<td className="tddesc"></td>
						<td class="price">3 900 €</td>
					</tr>
					<tr>
						<td>Agences d'état et ministères</td>
						<td className="tddesc"></td>
						<td class="price">5 300 €</td>
					</tr>
				</table>
			</div>
			<div css="margin: 0.4rem;">
				<p><b>* Entreprises de 11 personnes et plus : Explications</b></p>
				<p>La FabMob est reconnue d’intérêt général depuis novembre 2024 au titre de ses activités d’innovation ouverte envers la mobilité durable.</p>
				<p>A ce titre, toute organisation soumise à l’impôt sur le revenu (IR) ou sur les sociétés (IS) est éligible à une <b>réduction d’impôt de 60% sur le montant de leur adhésion</b>. Cette réduction d’impôt est applicable à la fin de l’année fiscale. Elle est à justifier auprès de l’administration fiscale par un reçu fiscal, émis par la FabMob.</p>
				<p>Pour les entreprises, <i>le tarif indiqué est le tarif après réduction d’impôt.</i> <a onClick={() => setShowFullPrice(true)} href='#'>Cliquez ici pour afficher les tarifs sans réduction.</a></p>
				<p>Cette réduction est valable pour toute organisation quel que soit son statut. En pratique, cependant, seules les entreprises de 11 personnes et plus sont soumises à l’impôt parmi nos adhérents. C’est pourquoi, pour tous les autres adhérents (hors entreprises de 11 personnes et plus), les tarifs affichés ne tiennent pas compte d’une réduction d’impôt.</p>
			</div>
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
					<a
						href="mailto:contact@fabmob.io?subject=Demande d'adhésion à la fabrique"
						target="_blank"
					>
						<button>Nous contacter pour adhérer</button>
					</a>
				</div>

			</div>
		</div>
	)
}
let Outils = () => (
	<main>
		<header>
			<Title colors={[colors.jaune, colors.jauneVert]}>Nos outils</Title>
		</header>
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
						<a href="https://wiki.fabmob.io">
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
					<p>Prenez des notes collaboratives</p>
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
					<a href="https://github.com/fabmob">github.com/fabmob</a>
					<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
					<p>
						<a href="https://github.com/fabmob">
							<button>Coder</button>
						</a>
					</p>
				</Card>
			</CardList>
		</section>
	</main>
)
