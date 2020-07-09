import React, { useState, useEffect } from 'react'
const url =
	'https://wiki.lafabriquedesmobilites.fr/api.php?action=ask&query=[[Category:Commun]][[Modification date::%2B]]|%3FModification date|sort%3DModification date|order%3Ddesc&format=json'

export default ({}) => {
	const [communs, setCommuns] = useState([])
	useEffect(() => {
		const fetchData = () =>
			fetch(url)
				.then((res) => res.json())
				.then((list) => setCommuns(Object.values(list.query.results)))
		fetchData()
	}, [])
	return (
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
						margin: 1rem;
						width: 100%;
						padding: 1rem;
					`}
				>
					<a href={commun.fullurl}>{commun.fulltext}</a>
				</li>
			))}
		</ul>
	)
}
