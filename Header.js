import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Emoji from './Emoji'

function useQuery() {
	return new URLSearchParams(useLocation().search)
}
const LangSwitch = () => {
	let query = useQuery()

	const lang = query.get('lang') || 'fr'
	const fromTo = { en: 'fr', fr: 'en' }
	const flags = { en: '🇬🇧', fr: '🇫🇷' }

	return (
		<Link to={`?lang=${fromTo[lang]}`}>
			<Emoji emoji={flags[fromTo[lang]]} />
		</Link>
	)
}

export default () => (
	<header>
		<nav
			css={`
				ul > li > a {
					color: var(--color);
				}
				.emoji {
					margin: 0;
				}
			`}
		>
			<Link to="/">
				<img
					css="width: 80%"
					src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg"
				></img>
			</Link>
			<ul>
				<li>
					<a href="https://wiki.lafabriquedesmobilites.fr/">Wiki ↗</a>
				</li>
				<li>
					<Link to="/france">France</Link>
				</li>
				<li>
					<a href="#docs">Québec</a>
				</li>
				<li>
					<a href="#faq">FAQ</a>
				</li>
				<li>
					<LangSwitch />
				</li>
			</ul>
		</nav>
	</header>
)
