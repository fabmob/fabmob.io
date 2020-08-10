import React from 'react'
import Emoji from './Emoji'
import { LangSwitch, Link } from './Lang'
import colors from './colors'
import LogoSansTexte from './images/logo fabmob sans texte.svg'
import { useLocation } from 'react-router-dom'

export default () => {
	let location = useLocation()
	return (
		<nav
			css={`
				font-weight: bold;
				margin: 0 auto;
				width: 100%;
				padding: 0.6rem 0;
				box-shadow: var(--box-shadow) var(--color-bg-secondary);
				border-bottom: 1px solid var(--color-bg-secondary);
				display: flex;
				align-items: center;
				justify-content: center;

				ul {
					justify-content: center;
					flex-wrap: wrap;
					align-items: center;
					display: flex;
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
					color: black;
				}
				.emoji {
					margin: 0;
				}
				img {
					margin: 0rem 2rem;
					width: 4rem;
					${location.pathname === '/' ? 'display: none;' : ''}
				}
			`}
		>
			<Link to="/">
				<img css="" src={LogoSansTexte} />
			</Link>
			<ul>
				<li css="position: relative">
					<Link to="/à-propos">Philosophie</Link>
				</li>
				<li>
					<Link to="/ecosystem">Écosystème</Link>
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
}

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
