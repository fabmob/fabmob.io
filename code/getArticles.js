import frontMatter from 'front-matter'

var req = require.context('../contenu/articles', true, /\.md$/)
const rawArticles = [...req.keys()].map((key) => [
	key.replace(/.\/(\d\d\d\d\/)?/g, '').replace('.md', ''),
	req(key).default,
])

console.log(rawArticles.map(([a]) => a))

export default rawArticles.map(([id, string]) => ({
	...frontMatter(string),
	id,
}))
