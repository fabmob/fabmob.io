import React, { useState, useEffect } from 'react'
import colors from './colors'

var url = 'https://wiki.lafabriquedesmobilites.fr/api.php'

var params = {
	action: 'query',
	generator: 'categorymembers',
	gcmtitle: 'Category:Commun',
	gcmsort: 'timestamp',
	gcmdir: 'desc',
	format: 'json',
	prop: 'info|revisions',
	rvprop: 'content',
	inprop: 'url',
}

url = url + '?origin=*'
Object.keys(params).forEach(function (key) {
	url += '&' + key + '=' + params[key]
})

export default ({}) => {
	const [communs, setCommuns] = useState([])
	useEffect(() => {
		const fetchData = () =>
			fetch(url)
				.then((res) => res.json())
				.then((list) => {
					console.log(list)
					const elements = list.query.pages
					const parsed = Object.values(elements).map((e) => {
						const content = e.revisions[0]['*']
						const dataPairs = content
								.split('{{')[1]
								.split('}}')[0]
								.split('|')
								.map((el) => el.split('=')),
							data = Object.fromEntries(dataPairs)

						console.log(data)
						return {
							...e,
							content,
							data,
						}
					})

					setCommuns(parsed)
				})
				.catch((e) => console.log(e))
		fetchData()
	}, [])
	return (
		<section>
			<header>
				<h1>Nos communs actifs</h1>
				<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Accueil#Nos_12_Communs_en_cours_de_production">
					Explorer tous nos communs sur le wiki
				</a>
			</header>
			<ul
				css={`
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
				`}
			>
				{communs.map((commun) => (
					<li
						css={`
							box-shadow: var(--box-shadow) var(--color-bg-secondary);
							border: 1px solid var(--color-bg-secondary);
							border-radius: var(--border-radius);
							margin: 1rem;
							width: 80%;
							padding: 1rem;
							> ul > li {
								display: inline-block;
								border: 1px solid ${colors.jauneVert};
								border: 1px solid #ddd;
								background: var(--color-bg-secondary);
								/* box-shadow: var(--box-shadow) var(--color-bg-secondary); */
								padding: 0rem 0.6rem;
								margin: 0.2rem;
								line-height: 1.2rem;
								font-size: 90%;
								border-radius: 0.3rem;
							}
						`}
					>
						<a href={commun.fullurl || '#'}>
							<h2>{commun.title}</h2>
						</a>
						{commun.data.Tags && (
							<ul>
								{commun.data.Tags.split(',').map((tag) => (
									<li>{tag}</li>
								))}
							</ul>
						)}
						{commun.data.shortDescription.trim() !== commun.title && (
							<p>{commun.data.shortDescription}</p>
						)}
					</li>
				))}
			</ul>
		</section>
	)
}
