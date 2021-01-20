import React from 'react'
import { Link } from 'Components/Lang'

export default () => (
	<div>
		<header>
			<h1>FabMob Québec</h1>
			<p>Description</p>
			<br />
			<p>
				<a href="./mvp.html" target="_blank">
					<i>Découvrir</i>
				</a>
				<a href="#" target="_blank">
					<b>Nous rejoindre</b>
				</a>
			</p>
		</header>
		<Présentation />
	</div>
)

let Présentation = () => (
	<main>
		<section
			css={`
				img {
					width: 12rem;
				}
			`}
		></section>
	</main>
)
