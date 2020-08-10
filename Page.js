import React from 'react'
import Nav2 from './Nav2'

export default ({ children, nav2 }) => (
	<div
		css={`
			display: flex;
			flex-wrap: wrap;
		`}
	>
		<Nav2 data={nav2} />
		<div
			css={`
				width: auto;
				@media (max-width: 800px) {
					width: 100%;
				}
			`}
		>
			{children}
		</div>
	</div>
)
