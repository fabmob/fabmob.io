export default ({ id }) => (
	<img
		src={`https://cdn.jsdelivr.net/npm/@svgmoji/openmoji@2.0.0/svg/${id}.svg`}
		css={`
			width: 1rem !important;
			display: inline !important;
			vertical-align: middle !important;
		`}
	/>
)
