import React, { useState, useEffect } from 'react'
import { useLocation, Link as OriginalLink } from 'react-router-dom'
import { Link } from 'Components/Lang'
import Emoji from 'Components/Emoji'
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
		<div>
			<header
				css={`
					> section {
						height: 65vh;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin: 1rem 0;
					}
					> section > p {
						margin-top: 2rem;
						width: 20rem;
						text-align: left;
					}
					p em {
						background: #ffef23;
						font-style: normal;
					}
					text-align: left;
				`}
			>
				<section>
					<div
						css={`
							width: 20rem;
							img {
								width: 200px;
							}
						`}
						animate={{ scale: [1.5, 1] }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
					>
						<img src={Logo} css="" />
					</div>
					<p css="font-size: 130%">
						Face à l'
						<Link to="/à-propos/urgence">
							<Surligné>urgence</Surligné>
						</Link>
						,
						<br />
						<ReDe />
						construisons les mobilités <br />
						brique par brique, <br />
						ensemble via l'
						<Link to="/blog/lopen-source-au-secours-du-secteur-des-transports">
							<Surligné>open source</Surligné>
						</Link>
						.
					</p>
					<div css="margin: 0 auto; width: 20rem; margin-top: 3vh">
						<CTA
							text="Découvrez nos communs"
							to="/communs"
							img={<CTAArrow />}
						/>

						<CTA
							text="Adhérez à la Fabrique"
							to="https://www.helloasso.com/associations/la-fabrique-des-mobilites/adhesions/adhesions-2021-2022"
							img={<CTAArrow />}
						/>
								
						<CTA
							text="Rejoignez nous"
							to="https://pad.fabmob.io/s/cudgcUGeG"
							img={<CTAArrow />}
						/>
					</div>
					<br />
				</section>
				<footer
					css={`
						ul {
							padding: 0;
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: center;
							li {
								display: inline-block;
								margin: 1rem;
							}
						}
					`}
				>
					<ul>
						<li>
							<a href="https://twitter.com/fab_mob" title="twitter">
								<img css="width: 2.1rem" src={TwitterLogo} alt="twitter" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/fabmob/"
								title="linkedin"
							>
								<img css="width: 1.6rem" src={LinkedinLogo} alt="linkedin" />
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/channel/UC7jt1WuLQbb15ois1PQ-clw"
								title="YoutUbe"
							>
								<img
									css="width: 1.6rem"
									src={YouTubeLogo}
									alt="notre chaîne youtube"
								/>
							</a>
						</li>
						<li>
							<EmailContact />
						</li>
					</ul>
				</footer>
			</header>
		</div>
	)
}

const Surligné = styled.span`
	background: yellow;
	font-weight: normal;
	color: black;
`
const CTAButton = styled.button`
	box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
	border: none;
	border-radius: 0;
	display: block;
	padding: 0.6rem;
	display: flex;
	justify-content: left;
	margin: 0.6rem 0;
`

const CTAArrow = () => (
	<img
		src="/images/flèche-nord-est.svg"
		css="width: 1rem; margin-right: 1rem; "
	/>
)
const CTA = ({ to, text, img }) =>
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

export const EmailContact = () => (
	<a
		href="mailto:contact@fabmob.io"
		title="courriel"
		css="img {font-size: 120%}"
	>
		<Emoji emoji="✉" />
	</a>
)
