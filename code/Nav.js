import React, { Suspense, lazy, useState } from 'react'
import Emoji from 'Components/Emoji'
import { Link as RouterLink, LangSwitch } from 'Components/Lang'
import colors from 'Components/colors'
import LogoSansTexte from 'Images/fabmob_cmjn6.svg'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { WikiContext } from './App'
import { navData as aboutNavData } from './pages/About'
import { navData as participerNavData } from './pages/Participer'
import { EmailContact } from './components/Socials'

const MenuLink = (setClosed) => ({ to, children }) => (
	<RouterLink to={to} onClick={() => setClosed()}>
		{children}
	</RouterLink>
)
export default () => {
	const location = useLocation()
	const [open, setOpen] = useState(false)
	const [eventData] = useContext(WikiContext)

	const Link = MenuLink(() => setOpen(false))
	return (
		<nav
			css={`
				ul {
					text-align: center;
					margin: 0;
				}
				li {
					line-height: 40px;
					color: black;
				}
				li:hover {
					box-shadow: -3px 0px 4px 0px #ababab;
					margin-left: 3px;
				}
				a:hover {
					filter: unset !important;
					text-decoration: none;
					
				}
				@media (min-width: 800px) {
					ul {
						writing-mode: vertical-rl;
						position: fixed;
						height: 100vh;
						transform: rotate(-180deg);
					}
					.ulright {
						right: 0;
					}
					.ulleft {
						left: 0;
					}
					li {
						width: 40px;
					}
					.subnav {
						margin-left: 40px;
						position: fixed;
						z-index: 10;
					}
					.subnavmobile {
						display: none;
					}
					.mobileSubMenu {
						display: none
					}
				}
				@media (max-width: 800px) {
					justify-content: space-evenly;

					ul {
						flex-direction: column;
						align-item: end;
						${open ? 'display: flex' : 'display: none'}
					}
					> a {
						width: 192px;
						height: 54px;
						${open ? 'display: none' : 'display: flex'}
					}
					li {
						text-align: left;
						padding-left: 20px;
					}
					.mobileSubMenu {
						font-size: 15px;
					}
					.subnav {
						display: none;
					}
				}
			`}
		>
			<div className="subnavmobile">
				<Link to="/">
					<img css="height: 50px" src={LogoSansTexte} />
				</Link>
				<div
					title={open ? 'Fermer le menu' : 'Ouvrir le menu'}
					css={`
						cursor: pointer;
						border: none;
						padding: 0;
						margin: 8px;
						svg {
							width: 2rem;
							height: 2rem;
						}

						display: none;
						@media (max-width: 800px) {
							display: block;
							float: right
						}
					`}
					onClick={() => setOpen(!open)}
				>
					{open ? <CloseMenuIcon /> : <MenuIcon />}
				</div>
			</div>
			<ul className='ulleft'>
				{(location.pathname.indexOf("/à-propos") > -1 || location.pathname.indexOf("/blog") > -1)  && <><Link to="/à-propos/manifeste">
					<li css="background-color: #FFFF38">
						<b>À propos</b> de la fabrique
					</li>
					</Link>
					{Object.entries(aboutNavData).map(([key, value]) => (
						<Link to={key} key={key}>
							<li className="mobileSubMenu" css="background-color: #FFFF78">
								{value}
							</li>
						</Link>
					))}
					
					</>
				}
				{location.pathname.indexOf("/communs") > -1  && <Link to="/communs">
					<li css="background-color: #92E5FF">
						<b>Les activités</b> de la fabrique
					</li>
				</Link>}
				{location.pathname.indexOf("/participer") > -1  && <><Link to="/participer">
					<li css="background-color: #50F19E">
						<b>Rejoindre</b> la fabrique
					</li>
				</Link>
				{Object.entries(participerNavData).map(([key, value]) => (
					<Link to={key} key={key}>
						<li className="mobileSubMenu" css="background-color: #98F9CE">
							{value}
						</li>
					</Link>
				))}
				</>
				}
			</ul>
			
			<ul className='ulright'>
				{(location.pathname.indexOf("/à-propos") === -1 && location.pathname.indexOf("/blog") === -1)  && <><Link to="/à-propos/manifeste">
					<li css="background-color: #FFFF38">
						<b>À propos</b> de la fabrique
					</li>
					</Link>
					{Object.entries(aboutNavData).map(([key, value]) => (
						<Link to={key} key={key}>
							<li className="mobileSubMenu" css="background-color: #FFFF78">
								{value}
							</li>
						</Link>
					))}
					
					</>}
				{location.pathname.indexOf("/communs") === -1  && <Link to="/communs">
					<li css="background-color: #92E5FF">
						<b>Les activités</b> de la fabrique
					</li>
				</Link>}
				{location.pathname.indexOf("/participer") === -1  && <><Link to="/participer">
					<li css="background-color: #50F19E">
						<b>Rejoindre</b> la fabrique
					</li>
				</Link>
				{Object.entries(participerNavData).map(([key, value]) => (
					<Link to={key} key={key}>
						<li className="mobileSubMenu" css="background-color: #98F9CE">
							{value}
						</li>
					</Link>
				))}
				</>}
			</ul>
			<ul className="subnavmobile" css="border-bottom: 1px solid lightgray">
				<li>
					<a href='https://us12.list-manage.com/subscribe?u=7e792185ad77b9a84eaaa62e9&id=7c902a8341'>
						Newsletter
					</a> | <EmailContact /> | <Link to='/à-propos/mentions-légales-et-données'>Mentions légales</Link>
                </li>
			</ul>
			{location.pathname !== "/" && <div className="subnav">
				<Link to="/">
					<img css="height: 50px" src={LogoSansTexte} />
				</Link>
			</div>}
		</nav>
	)
}

export const Notifications = ({ count }) =>
	!count ? null : (
		<span
			css={`
				background: ${colors.jaune};
				color: black;
				border-radius: 1rem;
				right: -0.2rem;
				top: -0.8rem;
				font-size: 60%;
				padding: 0.2rem 0.6rem;
				position: relative;
			`}
		>
			{count}
		</span>
	)

const MenuIcon = () => (
	<svg viewBox="0 0 100 80" width="40" height="40">
		<rect width="100" height="20"></rect>
		<rect y="30" width="100" height="20"></rect>
		<rect y="60" width="100" height="20"></rect>
	</svg>
)

const CloseMenuIcon = () => (
	<svg
		enable-background="new 0 0 386.667 386.667"
		height="512"
		viewBox="0 0 386.667 386.667"
		width="512"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z" />
	</svg>
)

const LazyBlogNotifications = lazy(() => import('./BlogNotifications'))
