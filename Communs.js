import React, { useState, useEffect } from 'react'

var url = 'https://wiki.lafabriquedesmobilites.fr/api.php'

var params = {
	action: 'query',
	generator: 'categorymembers',
	gcmtitle: 'Category:Commun',
	gcmsort: 'timestamp',
	gcmdir: 'desc',
	format: 'json',
	prop: 'revisions',
	rvprop: 'content',
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
				.then(
					(list) =>
						console.log(list) ||
						setCommuns(Object.values(list.query.categorymembers))
				)
				.catch((e) => console.log(e))
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
					<a href={commun.fullurl}>{commun.title}</a>
				</li>
			))}
		</ul>
	)
}
