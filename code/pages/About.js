import React from 'react'
import { Link } from 'Components/Lang'
import Page from 'Components/Page'

export default () => (
	<Page
		titre="À propos"
		nav2={{
			pourquoi: 'Pourquoi',
			nous: 'Qui sommes nous ?',
			solution: 'Notre solution',
			travailler: 'Travailler ensemble',
		}}
	>
		<header>
			<h1>À propos de la FabMob</h1>
			<p>
				Une association loi 1901 basée à Paris, présente dans tout le pays pour
				construire les nouvelles mobilités en réunissant tous les acteurs autour
				de <mark>communs open source</mark>.
			</p>
			<br />
			<p>
				<a
					href="https://www.helloasso.com/associations/la-fabrique-des-mobilites/adhesions/adhesions-2019-2020"
					target="_blank"
				>
					<button>Adhérer à FabMob France</button>
				</a>
			</p>
		</header>
		<main>
			<article>
				<h2>Le problème</h2>
				<p>
					Les pratiques de mobilité ne changent pas à une vitesse suffisante
					pour être compatibles avec nos objectifs d’émissions de réduction GES,
					de réduction de pollution dans les pays développés. Dans les pays en
					développement, les dynamiques à l’oeuvre sont spécifiques et d’un
					autre ordre de grandeur en terme de vitesse.
				</p>
				<p>
					Les problèmes de mobilité ne seront pas résolus uniquement par des
					solutions de mobilité, avec des approches en silos. Ce sont les modes
					de vie, l’organisation des entreprises et des territoires, les
					temporalités ou encore la gestion de l’espace public qui sont à
					dé-construire et ré-organiser.
				</p>
				<p>
					Pour cela, les organisations doivent également évoluer, donc les
					personnes, les processus de décision, l’allocation des budgets et des
					énergies. Nous nous focalisons sur les cultures différentes de ces
					organisations, pour les faire évoluer et ainsi améliorer les synergies
					et la mise en action.
				</p>
				<h2>La solution</h2>
				<p>
					En tant que plateforme neutre, la FabMob synchronise des dynamiques
					d’entrepreneurs avec plusieurs territoires pionniers, préparés pour
					mieux accueillir l’innovation. Nous apportons des ressources ouvertes
					organisées, un réseau international et des méthodes de travail.
				</p>
			</article>
		</main>
	</Page>
)
