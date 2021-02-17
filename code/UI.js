import styled, { css } from 'styled-components'
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
export const PageMain = styled.main`
	max-width: 860px;
	margin: 0 auto;
`

export const Title = styled.h1`
	${({ colors }) =>
		false &&
		colors &&
		css`
			background: linear-gradient(to bottom left, ${colors[0]}, ${colors[1]});
			display: inline-block;
			padding: 0.1rem 1rem;
		`}
`
export const ArticleStyle = styled.div`
	${({ colors }) =>
		false &&
		colors &&
		css`
			h1 {
				background: linear-gradient(to bottom left, ${colors[0]}, ${colors[1]});
				display: inline-block;
				padding: 0.1rem 1rem;
			}
		`}
	max-width: 800px;
	margin: 0 auto 4rem;
	h1 {
		text-align: center;
	}
	h2,
	h3,
	h4,
	h5 {
		margin-top: 2rem;
	}
	img {
		max-width: 80%;
		margin: 2rem auto;
		display: block;
	}
	img + em {
		color: #666;
		text-align: center;
	}
	hr {
		border: 1px solid #eee;
		width: 70%;
		margin: 2rem auto;
	}
	blockquote {
		border-left: 6px solid grey;
		padding-left: 1rem;
		margin-left: 0;
	}
	code {
		background: #eee;
		padding: 0.1rem 0.4rem;
		border-radius: 0.3rem;
	}
`
