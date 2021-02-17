import frontMatter from 'front-matter'

var reqNew = require.context(
	'../contenu/articles',
	true,
	/(2020|2021)(.)*\.md$/
)
const rawNew = [...reqNew.keys()].map((key) => [
	key.replace(/.\/(\d\d\d\d\/)?/g, '').replace('.md', ''),
	reqNew(key).default,
])

export const newArticles = rawNew.map(([id, string]) => ({
	...frontMatter(string),
	id,
}))

var reqOld = require.context(
	'../contenu/articles',
	true,

	/(201\d)(.)*\.md$/
)
const rawOld = [...reqOld.keys()].map((key) => [
	key.replace(/.\/(\d\d\d\d\/)?/g, '').replace('.md', ''),
	reqOld(key).default,
])

export const oldArticles = rawOld.map(([id, string]) => ({
	...frontMatter(string),
	id,
}))
