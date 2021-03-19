import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkFootnotes from 'remark-footnotes'
import { useParams } from 'react-router-dom'
import { buildRésumé, dateCool } from './Articles'
import Meta from './Meta'
import { ArticleStyle } from './UI'
import { articles } from './getArticles'
import { EmailContact } from './pages/Accueil'

const repo = 'fabmob/fabmob.io'

export const coverImageURL = (image, id) =>
	image || '/contenu/articles/couvertures/' + id + '.jpg'

const getLastEdit = (name, action) =>
	fetch(
		`https://api.github.com/repos/${repo}/commits?path=articles%2F${name}.md&page=1&per_page=1`
	)
		.then((res) => res.json())
		.then((json) => {
			try {
				const date = json[0].commit.committer.date
				action(date)
			} catch (e) {
				console.log(e)
			}
		})

export const imageResizer = (size) => (src) =>
	src.includes('imgur.com')
		? src.replace(/\.(png|jpg)$/, size + '.jpg')
		: src.includes('unsplash.com')
		? src.replace(/w=[0-9]+\&/, (_, p1) => `w=${size === 'm' ? '320' : '640'}&`)
		: src

export default ({ id: propId }) => {
	const { id } = propId ? { id: propId } : useParams(),
		article = articles.find((a) => a.id === id)
	if (!article)
		return (
			<div>
				<p>Nous n'avons pas trouvé votre article :/</p>
				<p>N'hésitez pas à nous le signaler par mail</p>
				<div css="font-size: 200%">
					<EmailContact />
				</div>
			</div>
		)
	const {
			attributes: { image, titre, auteur, date, résumé },
			body,
		} = article,
		// imported articles from wordpress have english attributes
		author = auteur || article.attributes.author,
		title = titre || article.attributes.title,
		year = new Date(date).getFullYear()

	const [lastEditDate, setLastEditDate] = useState(null)
	getLastEdit(id, setLastEditDate)

	const coverImage = coverImageURL(image, id)

	return (
		<ArticleStyle>
			<Meta
				{...{
					title: titre,
					description: résumé || buildRésumé(body),
					image,
					url: 'https://lafabriquedesmobilites.fr/blog/' + id,
					published: new Date(date).toISOString(),
					updated: lastEditDate,
				}}
			/>
			{coverImage && (
				<img css="max-height: 30rem;" src={imageResizer('l')(coverImage)}></img>
			)}
			{title && <h1>{title}</h1>}
			<p
				css={`
					text-align: center;
					font-style: italic;
					margin-bottom: 2rem;
					border-bottom: 1px solid lightGrey;
					border-top: 1px solid lightGrey;
					padding: 0.4rem;
				`}
			>
				<small>
					Par{' '}
					<span
						css={`
							background: var(--color-secondary);
							padding: 0.1rem 0.3rem;
							margin: 0 0.2rem;
							color: white;
							border-radius: 0.3rem;
						`}
					>
						{author}
					</span>
					le {dateCool(date)}
					{lastEditDate && (
						<span>
							, mis à jour le{' '}
							<a
								href={`https://github.com/${repo}/blob/master/articles/${id}.md`}
							>
								{dateCool(lastEditDate)}
							</a>
						</span>
					)}
				</small>
			</p>
			<ReactMarkdown
				renderers={{
					image: ImageRenderer(year),
					footnoteReference: ({ identifier, label }) => (
						<sup id={'ref' + identifier}>
							<a href={window.location.pathname + '#def' + identifier}>
								{label}
							</a>
						</sup>
					),
					footnoteDefinition: ({ identifier, label, children }) => (
						<div
							id={'def' + identifier}
							css={`
								${window.location.hash === '#def' + identifier
									? `{
								background: var(--color); 
								color: var(--textColor); 
								a {color: inherit}; 
								border-radius: .3rem; 
								padding: 0.1rem 0.3rem;
						    }`
									: ''};
								> p {
									display: inline;
								}
							`}
						>
							<a href={window.location.pathname + '#ref' + identifier}>
								{label}
							</a>{' '}
							: {children}
						</div>
					),
				}}
				source={body}
				plugins={[remarkFootnotes]}
				escapeHtml={false}
			/>
			<p>
				Venez discuter de cet article{' '}
				<a
					class="twitter-share-button"
					href={
						'https://twitter.com/intent/tweet?text= Super article à lire sur le blog @fab_mob ' +
						title +
						' ' +
						'https://lafabriquedesmobilites.fr/blog/' +
						id
					}
					data-size="large"
				>
					sur twitter
				</a>
			</p>
		</ArticleStyle>
	)
}

const ImageRenderer = (year) => ({ src: rawSrc }) => {
	const src = rawSrc.includes('http')
		? imageResizer('l')(rawSrc)
		: rawSrc.indexOf('images/') === 0
		? `/contenu/articles/${year}/images/${rawSrc.split('images/')[1]}`
		: rawSrc
	return <img src={src} />
}
