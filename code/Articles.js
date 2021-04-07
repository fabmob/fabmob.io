import { articles } from './getArticles'
import { Title } from './UI'
import colors from 'Components/colors'
import { Link, useParams } from 'react-router-dom'
import { couleurImaginaires, coverImageURL, imageResizer } from './Article'
import { Newsletter } from './pages/Événements'

const yearsAndYears = [
	'2021',
	'2020',
	'2019',
	'2018',
	'2017',
	'2016',
	'2015',
	'2014',
]

export const dateCool = (date) => {
	const jsDate = typeof date === 'string' ? new Date(date) : date,
		recentStartDate = new Date(
			new Date().getFullYear(),
			new Date().getMonth() - 3,
			new Date().getDate()
		),
		recentDate = jsDate > recentStartDate

	const humanDate = jsDate.toLocaleString(undefined, {
		year: 'numeric',
		month: 'long',
		...(recentDate ? { day: 'numeric' } : {}),
	})

	return (recentDate ? 'le ' : 'en ') + humanDate
}

const Header = () => (
	<header
		css={`
			display: flex;
			flex-direction: column;
			align-items: center;
			> h1 {
				margin: 0.8rem;
			}
			> p {
				margin-top: 0;
			}
		`}
	>
		<Title colors={[colors.bleu, colors.bleuClair]}>Le blog</Title>
		<Newsletter />
	</header>
)
export default ({ year }) => {
	let year2 = year || useParams().year
	return (
		<div>
			<Header />
			<section>
				<YearMenu year2={year2} />
				<Link
					to="/tag/imaginaires"
					css={`
						background: ${couleurImaginaires};
						color: white;
						width: 60%;
						margin: 0 auto;
						display: block;
						padding: 0.4rem 1rem;
					`}
				>
					Découvrez notre recueil de fictions "Imaginaires de la mobilité"
				</Link>

				<ul
					css={`
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: center;
						aside {
							text-align: center;
							width: 22rem;
							@media (max-width: 860px) {
								width: 80%;
							}

							height: 32rem;
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
			margin: 0px 0px 1rem;
			display: flex;
			-moz-box-align: center;
			align-items: center;
			-moz-box-pack: start;
			@media (max-width: 800px) {
				justify-content: flex-start;
			}
			overflow-x: scroll;
			height: 3.5rem;
			li {
				margin: 0 0.2rem;
			}
			button {
				margin: 0;
				padding: 0.1rem 0.6rem;
			}
			text-align: center;
		`}
	>
		{yearsAndYears.map((y) => (
			<li key={y}>
				<Link to={'/blog/année/' + y}>
					<button css={y === year2 ? 'background: var(--color-secondary)' : ''}>
						{y}
					</button>
				</Link>
			</li>
		))}
	</ul>
)

export const buildRésumé = (body) =>
	body.split(' ').slice(0, 16).join(' ') + '...'

const ArticleVignette = ({
	id,
	attributes: { date, résumé, titre, title, image: rawImage },
	body,
}) => {
	const résumé2 = résumé || buildRésumé(body)
	const image = coverImageURL(rawImage, id)
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
					<h2>{titre || title}</h2>
				</Link>
				<small>
					<small>{dateCool(date)}</small>
				</small>
			</header>
			<Link to={'/blog/' + id}>
				<img
					css={`
						max-width: 100%;
						max-height: 10rem;
						box-shadow: rgb(147, 143, 143) 2px 2px 10px 0px;
						${!image ? 'padding: .4rem' : ''}
					`}
					src={
						image
							? imageResizer('m')(image)
							: '/images/logo fabmob sans texte.svg'
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
