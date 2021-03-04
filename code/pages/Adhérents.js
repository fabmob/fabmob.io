import React from 'react'
import { useEffect, useState } from 'react'
import { fetchAdhérents } from '../wikiAPI'

export default () => {
	const [data, setData] = useState([])
	const [continueString, setContinue] = useState([])

	const setDataAndContinue = (next, nextContinueString) => {
		setData([...data, ...next])
		setContinue(nextContinueString)
	}
	useEffect(() => {
		fetchAdhérents(null, setDataAndContinue)
	}, [])

	console.log(data)

	return (
		<div css="display:flex; justify-content: center; flex-wrap: wrap">
			{data.map(
				({
					fullurl: url,
					title,
					data: {
						name: description,
						"villes d'implantation": cities,
						Main_Picture: image,
					},
				}) => (
					<aside>
						{image && (
							<img
								src={
									'https://wiki.lafabriquedesmobilites.fr/wiki/Special:Filepath/' +
									image
								}
								title={title}
							/>
						)}
						<a href={url} target="_blank">
							{title}
						</a>
						<p>
							<em>{cities}</em>
						</p>
					</aside>
				)
			)}
			<button
				onClick={() =>
					fetchAdhérents('&gcmcontinue=' + continueString, setDataAndContinue)
				}
			>
				Voir les 10 suivants
			</button>
		</div>
	)
}
