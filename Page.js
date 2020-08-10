import React from 'react'
import Nav2 from './Nav2'

export default ({ children, nav2, titre }) => (
	<div
		css={`
			display: flex;
			flex-wrap: wrap;
		`}
	>
		<Nav2 data={nav2} titre={titre} />
		<div
			css={`
				width: calc(100% - 20rem);
				@media (max-width: 800px) {
					width: 100%;
				}
			`}
		>
			{children}
		</div>
	</div>
)
