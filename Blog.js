import React from 'react'
import { imageResizer } from './Article'
import { Link } from 'react-router-dom'
import articles from './getArticles.js'
import { Switch, Route, useParams } from 'react-router-dom'
import Article from './Article'

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
		<Switch>
			<Route exact path="/blog/:id">
				<Article />
			</Route>
			<Route path="/blog/année/:year">
				<Articles />
			</Route>
			<Route path="/blog/">
				<Articles year="2020" />
			</Route>
		</Switch>
	</main>
)

const years = ['2020', '2019', '2018', '2017', '2016', '2015', '2014']

const Articles = ({ year }) => {
	let year2 = year || useParams().year
	console.log(year2, year, useParams())
	return (
		<div>
			<Header />
			<section>
				<YearMenu year2={year2} />
				<ul
					css={`
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: center;
						aside {
							text-align: center;
							width: 20rem;
							height: 28rem;
						}
					`}
				>
					{articles
						.sort((a1, a2) =>
							new Date(a1.attributes.date) > new Date(a2.attributes.date)
								? -1
								: 1
						)
						.filter((a) => new Date(a.attributes.date).getFullYear() == year2)
						.map((a) => (
							<li key={a.id}>
								<ArticleVignette {...a} />
							</li>
						))}
				</ul>
			</section>
		</div>
	)
}
const YearMenu = ({ year2 }) => (
	<ul
		css={`
			display: flex;
			justify-content: center;
			li {
				margin: 0 0.2rem;
			}
			button {
				margin: 0;
				padding: 0.1rem 0.6rem;
			}
		`}
	>
		{years.map((y) => (
			<li key={y}>
				<button css={y === year2 ? 'background: var(--color-secondary)' : ''}>
					<Link to={'/blog/année/' + y}>{y}</Link>
				</button>
			</li>
		))}
	</ul>
)

const ArticleVignette = ({
	id,
	attributes: { date, résumé, titre, image },
	body,
}) => {
	const résumé2 = résumé || body.split(' ').slice(0, 16).join(' ') + '...'
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
					css={`
						max-width: 20rem;
						max-height: 10rem;
						box-shadow: rgb(147, 143, 143) 2px 2px 10px 0px;
						${!image ? 'padding: .4rem' : ''}
					`}
					src={
						image
							? imageResizer('m')(image)
							: 'http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg'
					}
				></img>
			</Link>
			<p>{résumé2} </p>
			<Link to={'/blog/' + id}>
				<em>Lire</em>
			</Link>
		</aside>
	)
}
