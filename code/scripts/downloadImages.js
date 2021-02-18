const fs = require('fs').promises
const fetch = require('node-fetch')

async function download() {
	const json = await fs.readFile('./code/scripts/articleImages.json', 'utf8'),
		data = JSON.parse(json)

	data.map(async ({ url, coverImage }) => {
		const id = url.split('/').slice(-2)[0]
		const extension = coverImage.split('.').slice(-1)[0]

		if (!coverImage.includes('http')) return null
		//		console.log(url, coverImage, encodeURI(coverImage), 'BLBLBLB')
		const response = await fetch(encodeURI(coverImage)).catch((err) =>
			console.log('OUPS', coverImage)
		)
		const buffer = await response.buffer()
		fs.writeFile(
			`contenu/articles/couvertures/${id}.${extension}`,
			buffer,
			() => console.log('OK ' + url)
		)
	})
}
download()
