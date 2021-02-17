import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { buildRésumé, dateCool } from './Blog'
import Meta from './Meta'
import { ArticleStyle } from 'Code/UI'
import colors from './components/colors'

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

	const titre = id

	return (
		<ArticleStyle colors={[colors.bleu, colors.bleuClair]}>
			<Meta
				{...{
					titre,
				}}
			/>
			<ReactMarkdown source={body} escapeHtml={false} />
		</ArticleStyle>
	)
}
