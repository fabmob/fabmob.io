import { Route, Switch } from 'react-router'
import CGU from './CGU'
import SmartphoneScreen from 'Components/SmartphoneScreen'
import Meta from '../Meta'
import Pourquoi from './Pourquoi'
import Archives from './Archives'

export default () => (
	<Switch>
		<Route path="/tracemob/cgu">
			<CGU />
		</Route>
		<Route path="/">
			<Home />
		</Route>
	</Switch>
)

const Home = () => (
	<div>
		<div
			css={`
				height: 90vh;
				box-shadow: 0 12px 12px -10px rgba(48, 41, 41, 0.1);
				background: #375c9dff;
				display: flex;
				flex-direction: column;
				align-items: center;
				overflow: hidden;
			`}
		>
			<Meta
				title="Tracemob"
				description="Collectez vos données de déplacement"
			/>
			<div
				css={`
					color: white;
					width: 80%;
					height: 70%;

					text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
					margin: 0 auto;
					padding-left: 1rem;
					display: flex;
					align-items: center;
					header,
					#phone {
						width: 50%;
					}
					h1 {
						font-size: 350%;
						font-weight: 600;
						margin: 1.2rem 0;
						color: white;
					}
					p {
						font-size: 150%;
					}
					@media (max-width: 800px) {
						flex-wrap: wrap;
						header,
						#phone {
							width: 100%;
						}
					}

					@media (max-width: 800px) {
						width: 100%;
						h1 {
							font-size: 250%;
							margin: 0.4rem 0;
						}
						#phone {
							width: 30%;
						}
						header img {
							width: 100px;
						}

						display: flex;
						flex-wrap: nowrap;
						overflow: hidden;
					}
				`}
			>
				<header>
					<img src={require('./tracemob.svg').default} css="width: 200px" />
					<h1>Tracemob</h1>
					<p>
						Collectez <strong>vos</strong> données <br />
						de déplacement.
					</p>
				</header>
				<SmartphoneScreen />
			</div>
			{/* <div
				css={`
					img {
						height: 40px;
					}

					margin: 0 auto;
					color: white;
				`}
			>
				<p>Téléchargez l'application</p>

				<a href="https://apps.apple.com/us/app/tracemob/id1545371062">
					<img src={require('./appstore-badge.png').default} />
				</a>
				<a href="https://play.google.com/store/apps/details?id=com.fabmob.tracemob">
					<img src={require('./playstore-badge.png').default} />
				</a>

			</div> */}
			<div
				href="#quoi"
				css={`
					width: 100%;
					a {
						display: block;
						background: white;
						border-radius: 0.3rem;
						width: 14rem;
						text-align: center;
						cursor: pointer;
						text-decoration: none;
						padding: 0.2rem 0.6rem;
						font-size: 130%;
						color: black;
						text-transform: uppercase;
						font-weight: 600;
						margin: 3rem auto;
					}
				`}
			>
				<a href="#quoi">😲 Comment ça ?</a>
			</div>
		</div>
		<Pourquoi />
		<Archives />
	</div>
)
