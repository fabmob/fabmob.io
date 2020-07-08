import React from 'react'
import Emoji from './Emoji'
import { LangSwitch, Link } from './Lang'

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
				margin: 0 0.5rem;
				position: relative;
				text-align: left;
			}
			/* Nav Dropdown */
			ul li:hover ul {
				display: block;
			}
			ul > li > a {
				color: var(--color);
			}
			.emoji {
				margin: 0;
			}
		`}
	>
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
				<Link to="/blog">Blog</Link>
			</li>
			<li>
				<LangSwitch />
			</li>
		</ul>
	</nav>
)
