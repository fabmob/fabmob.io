import React from 'react'
import Emoji from './Emoji'
import { LangSwitch, Link } from './Lang'
import colors from './colors'

export default () => (
	<nav
		css={`
			font-weight: bold;
			margin: 1rem;
			ul {
				justify-content: center;
				flex-wrap: wrap;
				align-items: center;
				display: flex;
				width: 100%;
				list-style: none;
				padding: 0;
			}
			ul > li {
				display: inline-block;
				margin: 0 1rem;
				position: relative;
				text-align: left;
				text-transform: uppercase;
				font-size: 130%;
			}
			/* Nav Dropdown */
			ul li:hover ul {
				display: block;
			}
			ul > li > a {
				color: black;
			}
			.emoji {
				margin: 0;
			}
		`}
	>
		<ul>
			<li css="position: relative">
				<Link to="/idée">L'idée</Link>
				<span
					css={`
						background: ${colors.jaune};
						color: black;
						border-radius: 1rem;
						right: -0.3rem;
						top: -0.8rem;
						font-size: 70%;
						padding: 0.2rem 0.6rem;
						position: relative;
					`}
				>
					1
				</span>
			</li>
			<li>
				<Link to="/fabriques">Les fabriques</Link>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
			<li>
				<a href="https://wiki.lafabriquedesmobilites.fr/">Wiki ↗</a>
			</li>
			<li>
				<LangSwitch />
			</li>
		</ul>
	</nav>
)
