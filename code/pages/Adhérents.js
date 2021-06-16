import React from 'react'
import { useEffect, useState } from 'react'
import { fetchAdhérents } from '../wikiAPI'
import Emoji from 'Components/Emoji'

const isAdherent = (string) => (string || 'non').toLowerCase().includes('oui')

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
						Adherent,
					},
				}) => (
					<aside
						css={`
							${isAdherent(Adherent) ? 'border: 2px #00b894 solid' : ''}
						`}
					>
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
						{isAdherent(Adherent) && (
							<div
								css={`
									background: #00b894;
									padding: 0.1rem 0.6rem;
									border-radius: 0.6rem;
									display: flex;
									align-items: center;
									img {
										filter: none !important;
									}
								`}
							>
								<Emoji emoji="⭐️" /> Adhérent
							</div>
						)}
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
