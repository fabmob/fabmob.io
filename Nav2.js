import React from 'react'

export default ({ data }) => (
	<div
		css={`
			width: 25%;
			border-right: 1px solid #e9e9e9;
			margin-top: 0.6rem;
			ul {
				width: 80%;
				margin: 0 auto;
				padding: 1rem;
			}

			@media (max-width: 800px) {
				width: 100%;
				ul {
					margin: 0 auto;
					padding: 1rem;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
				}
				li {
					display: inline-block;
					margin: 0.1rem 0.6rem;
				}
				border-bottom: 1px solid #e9e9e9;
				img {
					display: none;
				}
			}
		`}
	>
		<img
			css="width: 8rem; margin: 2rem;"
			src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/fabmob-logo.svg"
		/>
		<ul>
			{[
				Object.entries(data).map(([key, value]) => (
					<li key={key}>
						<a href={window.location.href.split('#')[0] + '#' + key}>{value}</a>
					</li>
				)),
			]}
		</ul>
	</div>
)
