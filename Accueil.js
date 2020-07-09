import React from 'react'
import { useLocation, Link as OriginalLink } from 'react-router-dom'
import { Link } from './Lang'
import Emoji from './Emoji'

export default () => {
	return (
		<div>
			<header
				css={`
					> section {
						height: 65vh;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					h1 {
						font-size: 120%;
					}
				`}
			>
				<section>
					<Link to="/">
						<img
							css="width: 10rem; margin: 1rem;"
							src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg"
						></img>
					</Link>
					<h1>Révolutionner la mobilité via les communs</h1>
					<p>
						L'association pour construire les nouvelles mobilités en réunissant
						tous les acteurs autour de communs open source.
					</p>
					<br />
				</section>
				<footer
					css={`
						ul {
							padding: 0;
							list-style-type: none;
							li {
								display: inline-block;
								margin: 1rem;
							}
						}
					`}
				>
					<ul>
						<li>
							<a href="https://twitter.com/fab_mob" title="twitter">
								<Emoji emoji="🐦" />
							</a>
						</li>
						<li>
							<a href="https://fr-fr.facebook.com/FABM0B" title="facebook">
								<Emoji emoji="📘" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/fabmob/"
								title="linkedin"
							>
								<Emoji emoji="💼" />
							</a>
						</li>
						<li>
							<a
								href="mailto:lafabriquedesmobilites@gmail.com"
								title="courriel"
							>
								<Emoji emoji="✉" />
							</a>
						</li>
					</ul>
				</footer>
			</header>
		</div>
	)
}

