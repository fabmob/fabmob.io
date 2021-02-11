const baseUrl = 'https://wiki.lafabriquedesmobilites.fr/api.php'

export const fetchLastCommuns = (then) => {
	const params = {
		action: 'query',
		generator: 'categorymembers',
		gcmtitle: 'Category:Commun',
		gcmsort: 'timestamp',
		gcmdir: 'desc',
		format: 'json',
		prop: 'info|revisions|image',
		rvprop: 'content',
		inprop: 'url',
	}

	const url =
		baseUrl +
		'?origin=*' +
		Object.keys(params).reduce(
			(memo, key) => memo + '&' + key + '=' + params[key],
			''
		)

	fetch(url)
		.then((res) => res.json())
		.then((list) => {
			const elements = list.query.pages
			const parsed = Object.values(elements).map((e) => {
				const content = e.revisions[0]['*']
				const dataPairs = content
						.split('{{')[1]
						.split('}}')[0]
						.split('|')
						.map((el) => el.split('=')),
					data = Object.fromEntries(dataPairs)

				return {
					...e,
					content,
					data,
				}
			})

			then(parsed)
		})
		.catch((e) => console.log(e))
}

export const fetchSelectedCommuns = (selection) => (then) => {
	const params = {
		action: 'query',
		format: 'json',
		prop: 'info|revisions|image',
		rvprop: 'content',
		inprop: 'url',
		titles: selection.join('|'),
	}

	const url =
		baseUrl +
		'?origin=*' +
		Object.keys(params).reduce(
			(memo, key) => memo + '&' + key + '=' + params[key],
			''
		)

	fetch(url)
		.then((res) => res.json())
		.then((list) => {
			const elements = list.query.pages
			console.log('ELEMENS', elements)
			const parsed = Object.values(elements).map((e) => {
				if (!e.revisions) return null
				const content = e.revisions[0]['*']

				const dataPairs = content
						.split('{{')[1]
						.split('}}')[0]
						.split('|')
						.map((el) => el.split('=')),
					data = Object.fromEntries(dataPairs)

				return {
					...e,
					content,
					data,
				}
			})

			then(parsed.filter(Boolean))
		})
		.catch((e) => console.log(e))
}

export const fetchLastEvents = (then) => {
	const params = {
		action: 'query',
		generator: 'categorymembers',
		gcmtitle: 'Category:Evénement',
		gcmsort: 'timestamp',
		gcmdir: 'desc',
		format: 'json',
		prop: 'info|revisions|image',
		rvprop: 'content',
		inprop: 'url',
	}

	const url =
		baseUrl +
		'?origin=*' +
		Object.keys(params).reduce(
			(memo, key) => memo + '&' + key + '=' + params[key],
			''
		)

	fetch(url)
		.then((res) => res.json())
		.then((list) => {
			const elements = list.query.pages
			const parsed = Object.values(elements).map((e) => {
				const content = e.revisions[0]['*']
				const dataPairs = content
						.split('{{')[1]
						.split('}}')[0]
						.split('|')
						.map((el) => el.split('=')),
					data = Object.fromEntries(dataPairs)

				return {
					...e,
					content,
					data,
				}
			})

			then(parsed)
		})
		.catch((e) => console.log(e))
}

export const fetchAdhérents = (suffix = '', then) => {
	const params = {
		action: 'query',
		generator: 'categorymembers',
		gcmtitle: 'Category:Acteur',
		gcmsort: 'timestamp',
		gcmdir: 'desc',
		format: 'json',
		prop: 'info|revisions|image',
		rvprop: 'content',
		inprop: 'url',
	}

	const url =
		baseUrl +
		'?origin=*' +
		Object.keys(params).reduce(
			(memo, key) => memo + '&' + key + '=' + params[key],
			''
		) +
		suffix

	fetch(url)
		.then((res) => res.json())
		.then((list) => {
			const elements = list.query.pages
			const parsed = Object.values(elements).map((e) => {
				const content = e.revisions[0]['*']
				const dataPairs = content
						.split('{{')[1]
						.split('}}')[0]
						.split('|')
						.map((el) => el.split('=')),
					data = Object.fromEntries(dataPairs)

				return {
					...e,
					content,
					data,
				}
			})

			then(parsed, list.continue.gcmcontinue)
		})
		.catch((e) => console.log(e))
}
