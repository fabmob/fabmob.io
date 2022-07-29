import React from 'react'
import { Link } from 'react-router-dom'

export default ({ data, titre }) => (
	<div
		css={`
			width: 15rem;
			border-right: 1px solid #e9e9e9;
			margin-top: 0.6rem;
			padding: 2rem;
			ul {
				width: 80%;
				margin: 0 auto;
			}
			@media (max-width: 800px) {
				padding: 0.6rem;
				width: 100%;
				h2 {
					margin: 0.6rem;
				}
				ul {
					margin: 0 auto;
					padding: 1rem;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					text-align: center;
				}
				li {
					display: inline-block;
					margin: 0.1rem 0.6rem;
				}
				border-bottom: 1px solid #e9e9e9;
			}
		`}
	>
		{titre && <h2>{titre}</h2>}
		<ul>
			{[
				Object.entries(data).map(([key, value]) => (
					<li key={key}>
						<Link to={'/à-propos/' + key}>{value}</Link>
					</li>
				)),
			]}
		</ul>
	</div>
)
