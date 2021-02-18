const fs = require('fs')

fs.readFile('./articleImages.json', 'utf8', (error, data) => {
	JSON.parse(data).map(({ url, coverImage }) => console.log(url))
})
