import React from 'react'
import { imageResizer } from './Article'
import { Link } from 'react-router-dom'
import articles from './getArticles.js'

export const pageLayout = `
			max-width: 800px;
			margin: 0 auto;
`

const Header = () => (
	<header
		css={`
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 1rem;
			> h1 {
				margin: 0.8rem;
			}
			> p {
				margin-top: 0;
			}
		`}
	>
		<h1>Le blog de la FabMob</h1>
	</header>
)

export default ({}) => (
	<main css={pageLayout}>
		<Header />
		<section
			css={`
				display: flex;
				flex-direction: column;
				align-items: center;
				aside {
					text-align: center;
					width: 20rem;
				}
			`}
		>
			{articles
				.sort((a1, a2) => (a1.attributes.date > a2.attributes.date ? -1 : 1))
				.map((a) => (
					<aside
						css={`
							p {
								max-width: 36rem;
								margin-bottom: 0.3rem;
							}
							header {
								margin-bottom: 1rem;
							}
							header > a {
								text-decoration: none;
							}
							h2 {
								display: block;
								text-decoration: none;
								margin-bottom: 0.3rem;
							}
							margin-bottom: 3rem;
						`}
					>
						<header>
							<a href={'/' + a.id}>
								<h2>{a.attributes.titre}</h2>
							</a>
							<small>
								{a.attributes.date.toLocaleString(undefined, {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</small>
						</header>
						<Link to={'/' + a.id}>
							<img
								css="width: 75%; box-shadow: rgb(147, 143, 143) 2px 2px 10px 0px;"
								src={imageResizer('m')(a.attributes.image)}
							></img>
						</Link>
						<p>{a.attributes.résumé} </p>
						<Link to={'/' + a.id}>
							<em>Lire</em>
						</Link>
					</aside>
				))}
		</section>
	</main>
)
