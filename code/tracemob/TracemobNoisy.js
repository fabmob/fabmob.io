import SmartphoneScreen from 'Components/SmartphoneScreen'
import Meta from '../Meta'

export default () => (
	<div>
		<header>
			<img src={require('./tracemob.svg').default} css="width: 200px" />
			<h1>Tracemob, l'expérimentation pour mieux comprendre les mobilités du quartier du Marnois</h1>
			<p css="max-width: 60rem">
				
			</p>
			<p css="max-width: 60rem">
				Portée par la ville de <a href="https://www.noisylegrand.fr/" target='_blank'>Noisy-le-grand</a> et 
				l'association <a href="https://lafabriquedesmobilites.fr/" target='_blank'>La Fabrique des Mobilités</a>
			</p>
			<div css={`
				display: inline;
				img {
					height: 80px;
				}
			`}>
				<a href="https://www.noisylegrand.fr/" target='_blank'><img style={{marginRight: "20px"}} src={require('./logo-Noisy-le-Grand.jpg').default} /></a>
				<a href="https://lafabriquedesmobilites.fr/" target='_blank'><img src="/images/fabmob_cmjn1.svg" /></a>
			</div>
			<p css="max-width: 60rem">
				Avec le soutien de la <a href="https://metropolegrandparis.fr/fr" target='_blank'>Métropole du Grand Paris</a> et <a href="https://www.parisandco.com/" target='_blank'>Paris & Co</a>
			</p>
			<div css={`
				display: inline;
				img {
					height: 80px;
					max-width: 200px;
				}
			`}>
				<a href="https://metropolegrandparis.fr/fr" target='_blank'><img style={{marginRight: "20px"}} src={require('./logo-mgp.svg').default} /></a>
				<a href="https://www.parisandco.com/" target='_blank'><img src={require('./logo-paris-and-co.svg').default} /></a>
			</div>
			<p css="max-width: 60rem">Et le support technologique de <a href="https://cozy.io" target='_blank'>CozyCloud</a></p>
			<div css={`
				display: inline;
				img {
					width: 200px;
				}
			`}>
				<a href="https://cozy.io" target='_blank'><img src={require('./logo-cozy-cloud.png').default} /></a>
			</div>
		</header>
		<Desc/>
		<TableFinalites/>
	</div>
)
const Desc = () => (
	<div
		id="quoi"
		css={`
			margin: 0 auto;
			max-width: 40rem;
			padding: 0.3rem 1rem;
			ul {
				list-style-type: none;
				padding-left: 1rem;
			}
			em {
				color: #375c9dff;
				font-style: normal;
			}
			h2 {
				font-weight: 600;
				font-size: 135%;
				padding-right: 2rem;
				margin: 3rem 0 1.2rem;
				line-height: 1.4rem;
			}
			.illustration {
				font-size: 3rem;
				display: block;
				text-align: center;
				margin: 3rem auto 1.6rem;
			}
		`}
	>
		<h2>
			Une expérimentation ?
		</h2>
		<span className="illustration">🗺️</span>
		<p>
			Dans le cadre d’une amélioration de la mobilité du quartier du Marnois, 
			Noisy-Le-Grand expérimente un dispositif numérique unique permettant aux citoyens de mieux 
			connaître leurs habitudes de déplacement et de faciliter l’élaboration de politiques de mobilité. 
			<br/><b>100 volontaires peuvent désormais s’inscrire et tester ce nouveau dispositif.</b>
		</p>
		<p>
			En prenant part à cette initiative, vous aurez accès à des outils numériques qui vous 
			permettront de collecter et de stocker de façon sécurisée les données liées à votre mobilité. 
			Vous pourrez ainsi visualiser vos déplacements et calculer votre empreinte carbone.
		</p>
		<p>
			En somme, il s’agit de mettre le pouvoir du numérique au service de la transition écologique !
		</p>

		<h2>
			Pourquoi ce dispositif ?
		</h2>
		<span className="illustration"> 🔒</span>{' '}
		<p>
			Nous produisons des données personnelles à longueur de journée à l’aide de nos smartphones mais les 
			seuls à les exploiter sont les géants du web. L’idée ici est de se réapproprier nos données 
			personnelles de mobilité pour en tirer des enseignements.
		</p>
		<p>
			Cette technologie civique vous permet aussi de partager des données statistiques avec votre ville, 
			tout en respectant votre vie privée. En effet, vos données personnelles ne sortent jamais de 
			votre espace sécurisé. Le traitement, l’anonymisation et les calculs statistiques sont réalisés 
			dans votre coffre numérique, sous votre contrôle. Seuls les résultats statistiques, 
			comme par exemple les types de véhicule les plus utilisés ou les temps de parcours moyens, sont transmis à votre ville.
		</p>
		<p>
			Cette nouvelle forme de participation citoyenne facilite l’élaboration de politiques de mobilité 
			au plus proche de vos besoins réels. Elle innove dans sa méthode de calcul décentralisée, 
			plus respectueuse de la vie privée. Effectivement, au lieu d'agréger les données sur un serveur et de les traiter en bloc par un algorithme,
			c'est l'algorithme qui vient à vous et est exécuté dans votre coffre numérique, seuls les résultats anonymisés sont transmis au serveur statistique central.
		</p>

		<h2>
			Comment démarrer ?
		</h2>
		<img
			className="illustration"
			src={require('./tracemob.svg').default}
			css="width: 60px"
		/>
		<div>
			<p><b>Première étape</b> - créer votre espace personnel - 3 solutions :</p>
			<ul style={{listStyleType: "initial", paddingLeft: "40px"}}>
				<li>soit scannez avec votre mobile le QR Code suivant (…)</li>
				<li>soit cliquez sur l’URL suivante (…)</li>
				<li>soit installer l’app mobile “Cozy - cloud personnel” sur le store Mobile (Android ou Apple) et fournissez votre code postal (Noisy-le-Grand)</li>
				<div
				css={`
					img {
						height: 40px;
					}

					margin: 0 auto;
					color: white;
					text-align: center;
				`}
			>
				<a href="">
					<img src={require('./appstore-badge.png').default} />
				</a>
				<a href="">
					<img src={require('./playstore-badge.png').default} />
				</a>

			</div>
			</ul>	
			<p><b>Seconde étape</b> - activer la mémorisation de vos déplacements</p>
			<ol>
				<li>dans l’app mobile “Cozy - cloud personnel” </li>
				<li>ouvrez le CoachCO2 préinstallé</li>
				<li>suivez les instructions proposées</li>
			</ol>
        
		</div>
		<h2>Pour combien de temps ? </h2>
		<span className="illustration">📆</span>
		<p>
			L’expérimentation se déroulera jusqu’au 31 Mai 2024.
			Libre à vous de rejoindre ou quitter la récolte à votre guise. 
			Sachez que toute donnée est précieuse !
		</p>
		<p>
			Vous restez le maître de vos données, vous pourrez à tout moment les supprimer ou cesser 
			le partage de données statistiques avec votre ville.
		</p>
		<p>
			Vos données vous appartiennent, au-delà de la date de fin de l’expérimentation, 
			vous conserverez définitivement le dispositif (l’espace privé d’un Cloud Personnel Cozy) 
			mis à votre disposition gratuitement par la ville.
		</p>

		<h2>
			Qui sont les acteurs de l'expérimentation ?
		</h2>
		<span className="illustration">👥</span>
		<p>
			<b><a href="https://lafabriquedesmobilites.fr/" target='_blank'>La Fabrique des Mobilités</a></b> est une association loi 1901 qui encourage les nouvelles mobilités, 
			plus sociales et décarbonées, et rassemble l'écosystème des acteurs volontaires pour travailler en commun sur cette thématique.
			Elle est financée principalement par des organismes étatiques comme l'ADEME, l'AIT et l'AFD ainsi que divers acteurs associatifs.
		</p>
		<p>
			Dans le cadre de l'expérimentation à Noisy-le-Grand, l'association est assistée techniquement par <b><a href="https://cozy.io" target='_blank'>Cozy Cloud</a></b>,
			un opérateur français qui conçoit une solution de cloud personnel sécurisé, hébergé en France. 
		</p>
		<p>
			Les équipes de Cozy ont été choisies pour leur démarche de transparence, avec la <a href="https://github.com/cozy" target='_blank'>publication en open source</a> de l'ensemble de leurs ressources,
			mais aussi pour leur expertise dans la gestion et le respect des données personnelles.
			L'utilisation d'un cloud personnel permet en effet une décentralisation des calculs, ce qui élimine la nécessité de transmission de données personnelles.
		</p>
		<p>
			Cette volonté de transparence et d'ouverture est partagée par les acteurs de l'expérimentation et la ville de <a href="https://www.noisylegrand.fr/" target='_blank'>Noisy-le-Grand</a>.
			En effet, cette dernière est en avance de phase sur l'utilisation et le partage de données sur le territoire, 
			comme en témoigne <a href="https://opendata.noisylegrand.fr/" target='_blank'>sa plateforme d'Open Data</a>.
		</p>
		<h2>Vos bénéfices en tant que citoyen</h2>
		<p>
			Analysez et visualisez vos déplacements
		</p>
		<div css={`
				text-align: center;
				img {
					height: 80px;
				}
			`}>
				<img style={{marginRight: "20px"}} src={require('./illustration-trajet.png').default} />
				<img src={require('./illustration-type-transport.png').default} />
		</div>
		<p>
			Calculez l'empreinte carbone de ces derniers et identifiez quelles en sont les sources (voiture, avion etc..) et raisons (domicile/travail, courses, loisirs etc..)
		</p>
		<div style={{textAlign: "center"}}><img style={{height: "120px"}} src={require('./illustration-co2.png').default} /></div>
		<p>
			Comparez, si vous le souhaitez, vos résultats avec la moyenne des autres participants
		</p>
		<div style={{textAlign: "center"}}><img style={{height: "120px"}} src={require('./illustration-comparaison-emissions.png').default} /></div>
		<p>
			Partagez, si vous le souhaitez, des résultats statistiques et anonymes avec votre ville, pour construire une infrastructure publique adaptée à vos besoins et habitudes
		</p>
		<div style={{textAlign: "center"}}><img style={{height: "120px"}} src={require('./illustration-part-modale.png').default} /></div>
		<p>
			Enrichissez vos données avec les autres services de votre espace personnel
		</p>
		<div style={{textAlign: "center"}}><img style={{height: "80px"}} src={require('./illustration-cozy.png').default} /></div>

		<h2>
			Quels traitements des données pour quelles finalités ?
		</h2>
		
	</div>
)

const TableFinalites = () => (
	<table css={`
			max-width: 80rem;
			margin: auto;
			th, td {
				border: 1px solid var(--color-bg-secondary);
			}	
		`}>
		<tr>
			<th>Type de traitement</th>
			<th>DONNÉES utilisées, mais NON TRANSMISES À PERSONNE d’autre que l’utilisateur, sécurisées et stockées par l’hébergeur de l’espace privé</th>
			<th>DONNÉES utilisées par l’hébergeur et éditeur du dispositif (Cozy Cloud, chez OVH en France)</th>
			<th>DONNÉES TRANSMISES à des tiers (ville de Noisy-le-Grand)</th>
		</tr>
		<tr>
			<td>1. Mémorisation de ses déplacements, par l’utilisateur lui-même dans son espace privé, pour les visualiser</td>
			<td>
				<ul>
					<li>Mouvements et déplacements géographiques du téléphone</li>
					<li>Modes de transports détectés par le système d’exploitation du téléphone</li>
					<li>Raisons des déplacements (précisées par l’utilisateur puis proposées automatiquement)</li>
				</ul>
			</td>
			<td>Aucune</td>
			<td>Aucune</td>
		</tr>
		<tr>
			<td>2. Calcul d’une estimation de l’empreinte carbone de l’utilisateur, afin qu’il puisse la lire et la comprendre</td>
			<td>Idem traitement 1</td>
			<td>Aucune</td>
			<td>Aucune</td>
		</tr>
		<tr>
			<td>3. Nettoyage et amélioration des traces de déplacements afin que l’utilisateur puisse les visualiser avec une meilleure lisibilité.</td>
			<td>
				<ul>
					<li>Mouvements et déplacements géographiques du téléphone</li>
					<li>Modes de transports détectés par le système d’exploitation du téléphone</li>
				</ul>
			</td>
			<td>Aucune</td>
			<td>Aucune</td>
		</tr>
		<tr>
			<td>4. Calculs statistiques et anonymisation au sein de l’espace privé utilisateur, afin de préparer leur agrégat avec ceux des autres utilisateurs</td>
			<td>Idem traitement 1</td>
			<td>Aucune</td>
			<td>Aucune</td>
		</tr>
		<tr>
			<td>5. Partage des résultats des calculs statistiques avec la ville et les autres utilisateurs. Dans le but pour la ville d’ajuster une politique de mobilités ou de partage de données statistiques anonymes en open data. Dans le but direct pour l’utilisateur de se comparer avec la moyenne des utilisateurs. Ce traitement requiert le consentement explicite utilisateur et n’est pas nécessaire au bon fonctionnement des applications.</td>
			<td>Non applicable</td>
			<td>Aucune</td>
			<td>Agrégats anonymisés, par exemple les parts modales des déplacements, les temps de parcours moyens, les raisons des déplacements</td>
		</tr>
		<tr>
			<td>6. Création et hébergement du dispositif (l’espace personnel de l’utilisateur sous forme d’un cloud personnel Cozy)</td>
			<td>Ce qu’il souhaitera à son initiative déposer dans son cloud personnel</td>
			<td>
				<ul>
					<li>Adresse mail de l’utilisateur - afin que l’utilisateur puisse être contacté si besoin (et renouveler en autonomie son mot de passe en cas d’oubli)</li>
					<li>Le code postal de l’utilisateur - afin de valider son éligibilité à cette expérimentation</li>
				</ul>
			</td>
			<td>Uniquement ce que l’utilisateur demandera explicitement lui-même de transmettre durant son usage</td>
		</tr>
	</table>
)