import React from 'react'
import cities from './sidewalks.yaml'
import Emoji from './Emoji'

export default () => (
	<main>
		<header>
			<h1>Cities with open source sidewalk width</h1>
		</header>
		<section>
			<ul
				css={`
					max-width: 800px;
					margin: 0 auto;
					img {
						margin-right: 0.6rem;
					}
					list-style-type: none;
					padding-left: 0;
				`}
			>
				{cities.map(({ country, name, code, map }) => (
					<li>
						<aside>
							<div>
								{country && <Emoji emoji={country} />}
								{name}
							</div>

							<div>
								<a href={code}>
									<Emoji emoji="💻" />
									Code
								</a>
							</div>
							<div>
								<a href={map}>
									<Emoji emoji="🗺" />
									Map
								</a>
							</div>
						</aside>
					</li>
				))}
			</ul>
		</section>
	</main>
)
