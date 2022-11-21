import React from 'react'
import { Link } from 'react-router-dom'
import {Surligne} from './Surligne'
import { useLocation } from 'react-router-dom'
import { Socials } from './Socials'

export default ({ data, titre }) => {
	const location = useLocation()
	return (
		<div
			css={`
				position: fixed;
				width: 15rem;
				border-right: 1px solid #e9e9e9;
				margin-top: 0.6rem;
				padding: 2rem;
				height: 100%;
				ul {
					width: 80%;
					margin: 0 auto;
				}
				h2 {
					width: 80%;
					margin: 0 auto 10px auto;
				}
				@media (max-width: 800px) {
					display: none
				}
				a {
					color: black
				}
			`}
		>
			{titre && <h2>{titre}</h2>}
			<ul>
				{[
					Object.entries(data).map(([key, value]) => (
						<li key={key}>
							<Link to={key}>
								{location.pathname.indexOf(key) > -1  ? <Surligne>{value}</Surligne> : <div>{value}</div>}
							</Link>
						</li>
					)),
				]}
			</ul>
			<div css="bottom: 40px; position: fixed;">
				<Socials />
			</div>
		</div>
	)
}
