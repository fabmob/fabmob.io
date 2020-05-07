import React from 'react'
import Emoji from './Emoji'
import { LangSwitch, Link } from './Lang'

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
					<Link to="/québec">Québec</Link>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<Link to="/sidewalks">Sidewalks</Link>
				</li>
				<li>
					<LangSwitch />
				</li>
			</ul>
		</nav>
	</header>
)
