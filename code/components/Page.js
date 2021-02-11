import React from 'react'
import Nav2 from 'Components/Nav2'

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
				h1,
				h2,
				h3,
				h4,
				h5 {
					text-align: center;
				}
			`}
		>
			{children}
		</div>
	</div>
)
