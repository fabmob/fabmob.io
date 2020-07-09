import React from 'react'
import Emoji from './Emoji'
import { LangSwitch, Link } from './Lang'
import colors from './colors'

export default () => (
	<nav
		css={`
			font-weight: bold;
			margin: 0 auto;
			max-width: 60rem;
			padding: 1.6rem 0;

			background: #079992;

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
				margin: 0.4rem 0.6rem;
				position: relative;
				text-align: left;
				text-transform: uppercase;
				font-size: 110%;
			}
			/* Nav Dropdown */
			ul li:hover ul {
				display: block;
			}
			ul > li > a {
				color: white;
			}
			.emoji {
				margin: 0;
			}
		`}
	>
		<ul>
			<li css="position: relative">
				<Link to="/à-propos">Philosophie</Link>
			</li>
			<li>
				<Link to="/fabriques">Écosystème</Link>
			</li>
			<li>
				<Link to="/communs">Communs</Link>
			</li>
			<li>
				<Link to="/fabriques">Événements</Link>
				<Notifications count={2} />
			</li>
			<li>
				<Link to="/blog">Blog</Link>
				<Notifications count={2} />
			</li>
			<li
				css={`
					padding: 0.2rem 0.3rem;
					a {
						color: ${colors.bleu} !important;
					}
				`}
			>
				<Link to="/participer">Participer</Link>
			</li>
			<li>
				<LangSwitch />
			</li>
		</ul>
	</nav>
)

const Notifications = ({ count }) => (
	<span
		css={`
			background: ${colors.jaune};
			color: black;
			border-radius: 1rem;
			right: -0.2rem;
			top: -0.8rem;
			font-size: 60%;
			padding: 0.2rem 0.6rem;
			position: relative;
		`}
	>
		{count}
	</span>
)
