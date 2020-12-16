import React from 'react'
import { imageResizer } from './Article'
import { Link } from 'react-router-dom'
import articles from './getArticles.js'

export const dateCool = (date) =>
	(typeof date === 'string' ? new Date(date) : date).toLocaleString(undefined, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

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
				flex-wrap: wrap;
				align-items: center;
				aside {
					text-align: center;
					width: 20rem;
					height: 28rem;
				}
			`}
		>
			{articles
				.sort((a1, a2) => (a1.attributes.date > a2.attributes.date ? -1 : 1))
				.map((a) => (
					<ArticleVignette {...a} />
				))}
		</section>
	</main>
)

const ArticleVignette = ({
	id,
	attributes: { date, résumé, titre, image },
}) => {
	return (
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
				<Link to={'/blog/' + id}>
					<h2>{titre}</h2>
				</Link>
				<small>
					<small>{dateCool(date)}</small>
				</small>
			</header>
			<Link to={'/blog/' + id}>
				<img
					css="max-width: 20rem; max-height: 10rem; box-shadow: rgb(147, 143, 143) 2px 2px 10px 0px;"
					src={
						image
							? imageResizer('m')(image)
							: 'http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg'
					}
				></img>
			</Link>
			<p>{résumé} </p>
			<Link to={'/blog/' + id}>
				<em>Lire</em>
			</Link>
		</aside>
	)
}
