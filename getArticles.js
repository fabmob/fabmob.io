import frontMatter from 'front-matter'

var req = require.context('./articles', true, /\.md$/)
const rawArticles = [...req.keys()].map((key) => [
	key.replace('./', '').replace('.md', ''),
	req(key).default,
])
console.log({ rawArticles })

export default rawArticles.map(([id, string]) => ({
	...frontMatter(string),
	id,
}))
