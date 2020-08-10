import React from 'react'
import Nav2 from './Nav2'

export default ({ children, nav2 }) => (
	<div
		css={`
			display: flex;
		`}
	>
		<Nav2 data={nav2} />
		<div>{children}</div>
	</div>
)
