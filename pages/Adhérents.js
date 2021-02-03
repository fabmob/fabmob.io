import React from 'react'
import { useEffect, useState } from 'react'
import { fetchAdhérents } from '../wikiAPI'

export default () => {
	const [data, setData] = useState([])
	console.log('ADH', data)
	useEffect(() => {
		fetchAdhérents(setData)
	}, [])

	return (
		<div css="display:flex; justify-content: center; flex-wrap: wrap">
			{data.map(
				({
					fullurl: url,
					title,
					data: { name: description, "villes d'implantation": cities },
					image,
				}) => (
					<aside>
						<img src={image} title={title} />
						<a href={url} target="_blank">
							{title}
						</a>
						<p>
							<em>{cities}</em>
						</p>
					</aside>
				)
			)}
		</div>
	)
}
