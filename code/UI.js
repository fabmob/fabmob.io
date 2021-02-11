import styled from 'styled-components'
import colors from './components/colors'

export const Card = styled.li`
	box-shadow: var(--box-shadow) var(--color-bg-secondary);
	border: 1px solid var(--color-bg-secondary);
	border-radius: var(--border-radius);
	margin: 1rem;
	width: 80%;
	width: 20rem;
	height: 16rem;
	padding: 1rem;
	img {
		max-width: 10rem;
		max-height: 5rem;,
		border-radius: 0.6rem;
	}
`
export const CardList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`

export const Tags = styled.ul`
	margin-bottom: 0.6rem;
	> li {
		display: inline-block;
		border: 1px solid #ddd;
		background: var(--color-bg-secondary);
		padding: 0rem 0.6rem;
		margin: 0.2rem;
		line-height: 1.2rem;
		font-size: 90%;
		border-radius: 0.3rem;
	}
`
