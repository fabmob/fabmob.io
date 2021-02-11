import frontMatter from 'front-matter'

var req = require.context('../contenu', false, /\.md$/)
const rawArticles = [...req.keys()].map((key) => [
	key.replace(/.\/(\d\d\d\d\/)?/g, '').replace('.md', ''),
	req(key).default,
])

export default rawArticles.map(([id, string]) => ({
	...frontMatter(string),
	id,
}))
