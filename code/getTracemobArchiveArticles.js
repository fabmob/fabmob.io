import frontMatter from 'front-matter'

var req = require.context('../contenu/tracemob-archive', true, /(.)*\.md$/)
const raw = [...req.keys()].map((key) => [
	key.replace(/.\/(\d\d\d\d\/)?/g, '').replace('.md', ''),
	req(key).default,
])

export default raw.map(([id, string]) => ({
	...frontMatter(string),
	id,
}))

/* This could enable us to load home page articles (2020-2021) and differ the loading of the old ones 
 * but we could need to have the date info in the parameter, which breaks the old wordpress URLs
 * or load a list of article titles -> year to load the good chunk, but this becomes complicated
 * if performance is a problem at this stage, we may be better with using Nextjs which does exactly that

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
*/
