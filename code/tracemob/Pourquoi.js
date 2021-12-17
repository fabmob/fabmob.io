export default () => (
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
			Vos données sont <b>à vous</b> !
		</h2>
		<span className="illustration">🗺️</span>
		<p>
			Nous sommes tous intéressés par nos déplacements. Combien de km ai-je fait
			le mois dernier ? L'année dernière ? En voiture, en train, en vélo, à pied
			?
		</p>
		<span className="illustration"> 🔒</span>{' '}
		<p>
			Jusqu'à présent, ce sont surtout Google, Apple ou votre opérateur téléphonique
			qui disposent de vos traces de déplacements, et la clef de cet entrepôt privé
			reste dans leur main.
		</p>
		<img
			className="illustration"
			src={require('./tracemob.svg').default}
			css="width: 60px"
		/>
		<p>
			Tracemob suit automatiquement vos déplacements, sans épuiser votre
			batterie, trouve automatiquement le mode de transport utilisé.
		</p>
		<p>
			Visualisez alors vos déplacements, et surtout : faites ce qu'il vous plaît
			avec ces données. Vous pouvez consulter{' '}
			<a href="/tracemob/CGU">les conditions d'utilisation de l'application</a>.
		</p>
		<span className="illustration">🧮🌱💸</span>
		<p>
			Suivez vos déplacements sur une carte annuelle - calculez l'empreinte
			climat de vos déplacements ou suivez vos kilomètres à pied, à vélo et en bus.
		</p>
		<h2>
			Construire ensemble le futur du transport
		</h2>
		<p>
			Si vous le désirez - et la décision vous revient - vous pourrez envoyer
			vos données de déplacement moyennées et anonymisées à votre collectivité
			pour participer à améliorer les transports et l'infrastructure publique.
		</p>
		<p>
			En 2021 et 2022, tracemob est développée avec le soutien de l'Agglo de la Rochelle
			expérimentent <a href="https://agremob.com/self-data-accueil/">dans le cadre du projet Agremob </a>
			un dispositif numérique unique permettant aux citoyens (500 testeurs) 
			de mieux connaître leurs habitudes de déplacement et d’agir pour réduire leurs émissions de CO2.
			Tracemob est l'application de recueil des traces de mobilité,
			associée au cloud personnel cozycloud vers lequel les utilisateurs peuvent envoyer les données
			pour alimenter <a href="https://agremob.com/self-data-les-outils/">une application "CoachCO2"</a>.
		</p>
		<h2>
			Comment ça marche ?
		</h2>
		<p>Installez l'application, et ... rien de plus !</p>{' '}
		<p>
			{' '}
			Elle enregistre et détecte vos déplacements à pied, en voiture, à vélo, en
			bus, ou en métro jour après jour.{' '}
		</p>
		<p>
			Ces données sont re-traitées pour notamment détecter le mode.
			Dans le cadre du projet Agremob, les utilisateurs peuvent ensuite envoyer leurs données
			sur leur <strong>entrepôt de données personnelles cozycloud</strong>.
		</p>
		<p>
			Pour en savoir plus,
				<a href="https://agremob.com/self-data-accueil/"> consultez la documentation utilisateur </a>
			ou ci-dessous
				l'historique avec les livrables plus techniques produits lors de nos tests en 2019.
		</p>
		<h2>Des questions ?</h2>
		<h3>Google les a déjà non ?</h3>
		<p>
			Tout à fait ! Dès lors que vous avez un téléphone dans votre poche et une
			application comme Google Maps, vous êtes suivis, même si en principe vous devriez avoir encore le contrôle.{' '}
		</p>
		<p>
			Vos données sont l'or des GAFAM (Google, Apple, Facebook, Amazon,
			Microsoft...), elles leur permettent de vous cibler pour de la publicité.
			Vos données de déplacement sont même achetées par certaines collectivités
			!
		</p>
		<p>
			Les données collectées par Tracemob ne serviront qu'à vous, vous choisirez
			ce que vous voulez en faire.
		</p>
		<h3>Pourquoi devrais-je vous faire confiance ?</h3>
		<p>
			Le code de l'application est entièrement libre, il est issu d'un{' '}
			<a href="https://github.com/e-mission/e-mission-docs">logiciel libre</a>{' '}
			développé et maintenu par <a href="https://www.nrel.gov/transportation/openpath.html">un labo fédéral américain</a>, tout le monde peut vérifier
			que l'appli ne collecte pas les données sans autorisation. Voici le code
			du <a href="https://github.com/fabmob/tracemob-server">serveur</a> et de{' '}
			<a href="https://github.com/fabmob/tracemob-phone">l'interface</a>.
		</p>
		<h3>Et ma batterie 🔋 ? </h3>
		<p>
			Les versions récentes d'Android ou d'IOS ont beaucoup profressé : suivre votre position
			ne consomme que quelques petits % de batterie par jour.{' '}
		</p>
		<p>
			Si vous constatez le contraire dans les paramètres, envoyez-nous un mail
			puis désinstallez-là en un clic !
		</p>
		<h3>Les données collectées seront-elles représentatives ?</h3>
		<p>
			Les données collectées ne peuvent être qu'un complément des enquêtes actuelles
			sur la base desquelles les politiques de transport sont construites,
			et sont plutôt un outil de suivi individuel des vos pratiques de mobilité.
		</p>
		<p>
			Essayez, vous verrez qu'au fil des semaines vous aurez une meilleure compréhension de
			vos habitudes déplacement et du temps passé dans les différents modes, par exemple,
			même si le recueil n'est pas parfait à 100%...
		</p>
	</div>
)
