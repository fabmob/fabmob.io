const scrapeIt = require('scrape-it')
const fs = require('fs')

const className = '.archive--article'
const pages = 24

// Promise interface
const data = Promise.all(
	[...Array(pages).keys()].map((i) =>
		scrapeIt('http://lafabriquedesmobilites.fr/category/articles/page/' + i, {
			articleImages: {
				listItem: className,
				data: {
					coverImage: {
						selector: className + ' img',
						attr: 'src',
					},
					url: {
						selector: className + ' a',
						attr: 'href',
					},
				},
			},
		})
	)
).then((a) => {
	const data = a.reduce(
		(memo, { data }) => [...memo, ...data.articleImages],
		[]
	)
	fs.writeFile('articleImages.json', JSON.stringify(data), 'utf8', () =>
		console.log(
			'ça devrait être bon, on a récupéré ' +
				data.length +
				' images, soit ' +
				23 * 5 +
				2
		)
	)
})
