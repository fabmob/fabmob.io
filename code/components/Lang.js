import React from 'react'
import Emoji from 'Components/Emoji'

import { Link as OriginalLink, useLocation } from 'react-router-dom'
export const Link = ({ to, ...props }) => {
	const path = useLocation().pathname

	const destination = path.includes('/en') ? '/en' + to : to

	return <OriginalLink {...{ ...props, to: destination }}></OriginalLink>
}

export const LangSwitch = () => {
	const path = useLocation().pathname

	const flags = { en: '🇬🇧', fr: '🇫🇷' }
	const destination = path.includes('/en/')
		? path.replace('/en/', '/')
		: '/en' + path

	return (
		<OriginalLink to={destination}>
			<Emoji emoji={destination.includes('/en') ? flags['en'] : flags['fr']} />
		</OriginalLink>
	)
}
