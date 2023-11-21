import SmartphoneScreen from 'Components/SmartphoneScreen'
import Meta from '../Meta'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const illustrationCozy = require('./illustration-cozy.png').default
const onboardingImages = [
	require('./onboarding/1.png').default,
	require('./onboarding/2.png').default,
	require('./onboarding/3.png').default,
	require('./onboarding/4.png').default,
]

const nextStep = (step) => {
	return "/tracemobNoisy/" + (step + 1)
}
const prevStep = (step) => {
	if (step > 1) return "/tracemobNoisy/" + (step - 1)
	return "/tracemobNoisy/"
}
export default () => {
	let {step} = useParams()
	useEffect(() => {
		//preloading images
		onboardingImages.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	}, [])
	if (step) {
		step = parseInt(step)
		return (
			<div css={"background-color: " + ((step===1) ? '#0080fa' : '#ebeff1') + "; text-align: center; height: 100svh"}>
				{step < 4 
					? <Link to={nextStep(step)} css="filter: none !important">
						<img src={onboardingImages[step-1]} css="height: calc(100% - 100px)"></img>
					</Link>
					: <a href="https://manager.cozycloud.cc/landings/noisylegrand" css="filter: none !important">
						<img src={onboardingImages[step-1]} css="height: calc(100% - 100px)"></img>
					</a>
					}
				<div>
					<Link to={prevStep(step)} css="margin-right: 20px"><button>Précédent</button></Link>
					{step < 4 
					? <Link to={nextStep(step)}><button>Suivant</button></Link>
					: <a href="https://manager.cozycloud.cc/landings/noisylegrand"><button>Suivant</button></a>
					}
				</div>
			</div>
		)
	}
	return (
		<div>
			<header>
				<img src={require('./coachCO2.svg').default} css="width: 200px" />
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
}
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
			Dans le cadre du <b>changement du plan de circulation du quartier du Marnois</b>, 
			Noisy-Le-Grand expérimente un dispositif numérique unique permettant aux citoyens de mieux 
			connaître leurs habitudes de déplacement et de faciliter l'élaboration de politiques de mobilité 
			et la <b>mesure de l'impact avant et après les travaux</b>.
		</p>
		<p><b>100 volontaires peuvent désormais s'inscrire et tester ce nouveau dispositif.</b></p>
		<p>
			En prenant part à cette initiative, vous aurez accès à des outils numériques qui vous 
			permettront de collecter et de stocker de façon sécurisée les données liées à votre mobilité. 
			Vous pourrez ainsi visualiser vos déplacements et calculer votre empreinte carbone.
		</p>
		<p>
			En somme, il s'agit de mettre le pouvoir du numérique au service de la transition écologique !
		</p>

		<h2>
			Pourquoi ce dispositif ?
		</h2>
		<span className="illustration"> 🔒</span>{' '}
		<p>
			Nous produisons des données personnelles à longueur de journée à l'aide de nos smartphones mais les 
			seuls à les exploiter sont les géants du web. L'idée ici est de se réapproprier nos données 
			personnelles de mobilité pour en tirer des enseignements.
		</p>
		<p>
			Cette technologie civique vous permet aussi de partager des données statistiques avec votre ville, 
			tout en respectant votre vie privée. En effet, vos données personnelles ne sortent jamais de 
			votre coffre-fort numérique sécurisé.
		</p>
		<p>
			Cette nouvelle forme de participation citoyenne facilite donc l'élaboration de politiques de mobilité 
			au plus proche de vos besoins réels. Elle innove aussi dans sa méthode de calcul décentralisée, 
			plus respectueuse de la vie privée. Effectivement, au lieu d'agréger les données sur un serveur et de les traiter en bloc par un algorithme,
			c'est l'algorithme qui vient à vous et est exécuté dans votre coffre-fort personnel, 
			seuls les résultats anonymisés sont transmis au serveur statistique central et à votre ville.
		</p>
		<img src={require('./diagram.png').default} css="width: 100%">
		</img>
		<h2>
			Comment démarrer ?
		</h2>
		<img
			className="illustration"
			src={require('./coachCO2.svg').default}
			css="width: 60px"
		/>
		<div>
			<p><b>Scannez le QR code</b> ci-dessous ou <b><Link to="/tracemobNoisy/1">cliquez ici</Link></b> et suivez le parcours sur mesure pour créer votre coffre-fort personnel et 
			télécharger l'application <span css="white-space: nowrap"><img css="height: 25px; border-radius: 6px; vertical-align: bottom; margin-right: 3px;"src={illustrationCozy} /><b>Cozy</b></span>.</p>
			<Link to="/tracemobNoisy/1"><img 
				className="illustration"
				src={require('./QRCodeOnboardingCozyNoisy.png').default}
				css="width: 200px"
			></img></Link>
			<p>Ou bien, téléchargez directement l'application sur les stores et entrez le code postal de Noisy-le-Grand lors de la création de votre compte.</p>
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
				<a href="https://apps.apple.com/fr/app/cloud-personnel-cozy/id1600636174">
					<img src={require('./appstore-badge.png').default} />
				</a>
				<a href="https://play.google.com/store/apps/details?id=io.cozy.flagship.mobile">
					<img src={require('./playstore-badge.png').default} />
				</a>
			</div>
		</div>
		<h2>Pour combien de temps ? </h2>
		<span className="illustration">📆</span>
		<p>
			L'expérimentation se déroulera <b>jusqu'à fin 2024</b>.
			Libre à vous de rejoindre ou quitter la récolte à votre guise. 
			Sachez que toute donnée est précieuse !
		</p>
		<p>
			Vous restez le maître de vos données, vous pourrez à tout moment les supprimer ou cesser 
			le partage de données statistiques avec votre ville.
		</p>
		<p>
			Vos données vous appartiennent, au-delà de la date de fin de l'expérimentation, 
			vous conserverez définitivement votre coffre-fort personnel
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
			un opérateur français qui conçoit une solution de coffre-fort personnel sécurisé, hébergé en France. 
		</p>
		<p>
			Les équipes de Cozy ont été choisies pour leur démarche de transparence, avec la <a href="https://github.com/cozy" target='_blank'>publication en open source</a> de l'ensemble de leurs ressources,
			mais aussi pour leur expertise dans la gestion et le respect des données personnelles.
			L'utilisation d'un coffre-fort personnel permet en effet une décentralisation des calculs, ce qui élimine la nécessité de transmission de données personnelles.
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
			Partagez, si vous le souhaitez, des résultats statistiques et anonymes avec votre ville, pour mesurer l'impact du nouveau plan de circulation sur vos habitudes
		</p>
		<div style={{textAlign: "center"}}><img style={{height: "120px"}} src={require('./illustration-part-modale.png').default} /></div>
		<p>
			Enrichissez, si vous le souhaitez, vos données avec les autres services de votre coffre-fort personnel. 
			Ce dernier peut en effet vous aider à sécuriser l'ensemble de vos données.
		</p>
		<div style={{textAlign: "center"}}><img style={{height: "80px"}} src={illustrationCozy} /></div>

		<h2>
			Quels traitements des données pour quelles finalités ?
		</h2>
		<div><a href="https://cozy.io/fr/legal/">Mentions légales et CGU</a>, <a href="https://cozy.io/fr/policy/">politique de confidentialité</a></div>
		
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
		<thead>
			<tr>
				<th>Type de traitement</th>
				<th>DONNÉES utilisées, mais NON TRANSMISES À PERSONNE d'autre que l'utilisateur, sécurisées et stockées par l'hébergeur de l'espace privé</th>
				<th>DONNÉES utilisées par l'hébergeur et éditeur du dispositif (Cozy Cloud, chez OVH en France)</th>
				<th>DONNÉES TRANSMISES à des tiers (ville de Noisy-le-Grand)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1. Mémorisation de ses déplacements, par l'utilisateur lui-même dans son espace privé, pour les visualiser</td>
				<td>
					<ul>
						<li>Mouvements et déplacements géographiques du téléphone</li>
						<li>Modes de transports détectés par le système d'exploitation du téléphone</li>
						<li>Raisons des déplacements (précisées par l'utilisateur puis proposées automatiquement)</li>
					</ul>
				</td>
				<td>Aucune</td>
				<td>Aucune</td>
			</tr>
			<tr>
				<td>2. Calcul d'une estimation de l'empreinte carbone de l'utilisateur, afin qu'il puisse la lire et la comprendre</td>
				<td>Idem traitement 1</td>
				<td>Aucune</td>
				<td>Aucune</td>
			</tr>
			<tr>
				<td>3. Nettoyage et amélioration des traces de déplacements afin que l'utilisateur puisse les visualiser avec une meilleure lisibilité.</td>
				<td>
					<ul>
						<li>Mouvements et déplacements géographiques du téléphone</li>
						<li>Modes de transports détectés par le système d'exploitation du téléphone</li>
					</ul>
				</td>
				<td>Aucune</td>
				<td>Aucune</td>
			</tr>
			<tr>
				<td>4. Calculs statistiques et anonymisation au sein de l'espace privé utilisateur, afin de préparer leur agrégat avec ceux des autres utilisateurs</td>
				<td>Idem traitement 1</td>
				<td>Aucune</td>
				<td>Aucune</td>
			</tr>
			<tr>
				<td>5. Partage des résultats des calculs statistiques avec la ville et les autres utilisateurs. Dans le but pour la ville d'ajuster une politique de mobilités ou de partage de données statistiques anonymes en open data. Dans le but direct pour l'utilisateur de se comparer avec la moyenne des utilisateurs. Ce traitement requiert le consentement explicite utilisateur et n'est pas nécessaire au bon fonctionnement des applications.</td>
				<td>Non applicable</td>
				<td>Aucune</td>
				<td>Agrégats anonymisés, par exemple les parts modales des déplacements, les temps de parcours moyens, les raisons des déplacements</td>
			</tr>
			<tr>
				<td>6. Création et hébergement du dispositif (l'espace personnel de l'utilisateur sous forme d'un cloud personnel Cozy)</td>
				<td>Ce qu'il souhaitera à son initiative déposer dans son cloud personnel</td>
				<td>
					<ul>
						<li>Adresse mail de l'utilisateur - afin que l'utilisateur puisse être contacté si besoin (et renouveler en autonomie son mot de passe en cas d'oubli)</li>
						<li>Le code postal de l'utilisateur - afin de valider son éligibilité à cette expérimentation</li>
					</ul>
				</td>
				<td>Uniquement ce que l'utilisateur demandera explicitement lui-même de transmettre durant son usage</td>
			</tr>
		</tbody>
	</table>
)