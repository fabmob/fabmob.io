import { ArticleStyle } from 'Code/UI'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import colors from './components/colors'
import Meta from './Meta'

export const imageResizer = (size) => (src) =>
	src.includes('imgur.com')
		? src.replace(/\.(png|jpg)$/, size + '.jpg')
		: src.includes('unsplash.com')
		? src.replace(/w=[0-9]+\&/, (_, p1) => `w=${size === 'm' ? '320' : '640'}&`)
		: src

export default ({ articles, id: propId }) => {
	const { id } = propId ? { id: propId } : useParams(),
		article = articles.find((a) => a.id === id),
		{ body } = article

	const title = id

	return (
		<ArticleStyle colors={[colors.bleu, colors.bleuClair]}>
			<Meta
				{...{
					title,
				}}
			/>
			<ReactMarkdown source={body} escapeHtml={false} />
		</ArticleStyle>
	)
}
