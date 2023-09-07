import React, { useState, useEffect } from 'react'
import { useLocation, Link as OriginalLink } from 'react-router-dom'
import { Link } from 'Components/Lang'
import {Socials} from 'Components/Socials'
import Emoji from 'Components/Emoji'
import {Surligne} from 'Components/Surligne'
import TwitterLogo from 'Images/Twitter_Logo_Blue.png'
import FacebookLogo from 'Images/FacebookLogo.png'
import LinkedinLogo from 'Images/LinkedinLogo.png'
import YouTubeLogo from 'Images/YouTubeLogo.png'

import Logo from 'Images/fabmob_cmjn1.svg'
import { useInterval } from '../utils.js'
import styled from 'styled-components'

const ReDe = () => {
	const [fragment, setFragment] = useState(true)
	useInterval(() => setFragment(!fragment), 2000)
	return (
		<span css="font-weight: 700; margin-right: .1rem; text-transform: capitalize">
			{fragment ? 're' : 'dé'}
		</span>
	)
}

export default () => {
	return (
		<div css={`
			a {
				color:black
			}
		`}>
			<header
				css={`
					> section {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin: 1rem 0;
					}
					> section > p {
						margin-top: 2rem;
						line-height: 35px;
						text-align: left;
					}
					p em {
						background: #ffef23;
						font-style: normal;
					}
					text-align: left;
				`}
			>
					<div
						css={`
							width: 20rem;
							padding-top: 40px;
							img {
								width: 200px;
							}
						`}
						animate={{ scale: [1.5, 1] }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
					>
						<img src={Logo} css="" />
					</div>
				<section>
					<p css="font-size: 150%">
						Face à l'
						<Link to="/à-propos/manifeste">
							<Surligne>urgence</Surligne>
						</Link>
						,
						<br />
						<ReDe />
						construisons les mobilités <br />
						brique par brique, <br />
						ensemble via les <Link to="/activités/communs">
							<Surligne>communs</Surligne>
						</Link> et l'
						<Link to="/blog/lopen-source-au-secours-du-secteur-des-transports">
							<Surligne>open source</Surligne>
						</Link>
						.
					</p>
					<div css="margin: 0 auto; width: 20rem; margin-top: 3vh">
						<CTA
							text="Découvrez nos activités"
							to="/activités/communs"
							img={<CTAArrow />}
						/>

						<CTA
							text="Adhérez à la Fabrique"
							to="/participer"
							img={<CTAArrow />}
						/>

					</div>
					<br />
				</section>
				<Socials />
			</header>
		</div>
	)
}


export const CTAButton = styled.button`
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
	border: none;
	border-radius: 0;
	display: block;
	padding: 0.6rem;
	display: flex;
	justify-content: left;
	margin: 0.6rem 0;
	&:hover img {
		filter: invert(1);
	}
`

export const CTAArrow = () => (
	<img
		src="/images/flèche-nord-est.svg"
		css="width: 1rem; margin-right: 1rem; margin-top: 4px;"
	/>
)
export const CTA = ({ to, text, img }) =>
	to.includes('http') ? (
		<a href={to}>
			<CTAButton>
				{img}
				<span>{text}</span>
			</CTAButton>
		</a>
	) : (
		<Link to={to}>
			<CTAButton>
				{img}
				<span>{text}</span>
			</CTAButton>
		</Link>
	)


