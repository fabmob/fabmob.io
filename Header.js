import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
	<header>
		<nav
			css={`
				ul > li > a {
					color: var(--color);
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
			</ul>
		</nav>
	</header>
)
