import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import articles from './getArticles.js'
import { dateCool } from './Blog'

const repo = 'fabmob/fabmob.io'

const getLastEdit = (name, action) =>
	fetch(
		`https://api.github.com/repos/${repo}/commits?path=articles%2F${name}.md&page=1&per_page=1`
	)
		.then((res) => res.json())
		.then((json) => {
			const date = json[0].commit.committer.date

			action(dateCool(new Date(date)))
		})

export const imageResizer = (size) => (src) =>
	src.includes('imgur.com')
		? src.replace(/\.(png|jpg)$/, size + '.jpg')
		: src.includes('unsplash.com')
		? src.replace(/w=[0-9]+\&/, (_, p1) => `w=${size === 'm' ? '320' : '640'}&`)
		: src

export default ({}) => {
	const { id } = useParams(),
		article = articles.find((a) => a.id === id),
		{
			attributes: { image, date },
			body,
		} = article

	const [lastEditDate, setLastEditDate] = useState(null)
	getLastEdit(id, setLastEditDate)

	return (
		<div css={() => articleStyle}>
			<img css="max-height: 30rem;" src={imageResizer('l')(image)}></img>
			<p
				css={`
					text-align: center;
					font-style: italic;
					margin-bottom: 2rem;
				`}
			>
				<small>
					Publié le {dateCool(date)}, mis à jour le{' '}
					<a href={`https://github.com/${repo}/blob/master/articles/${id}.md`}>
						{lastEditDate}
					</a>
				</small>
			</p>
			<ReactMarkdown
				renderers={{ image: ImageRenderer }}
				source={body}
				escapeHtml={false}
			/>
			<p>
				Venez discuter de cet article{' '}
				<a
					class="twitter-share-button"
					href="https://twitter.com/intent/tweet?text=La crise, ou la ville idéale ? kont.me/ville-id%C3%A9ale-ou-crise @maeool"
					data-size="large"
				>
					sur twitter
				</a>
			</p>
		</div>
	)
}

const ImageRenderer = ({ src }) => <img src={imageResizer('l')(src)} />

const articleStyle = `
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
