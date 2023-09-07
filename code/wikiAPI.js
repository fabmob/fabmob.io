const baseUrl = 'https://wiki.lafabriquedesmobilites.fr/api.php'

// Extracts useful information for the oddly shaped Wiki API reply
// For reference, here is a typical reply from the API, with uneeded fields removed
/*{
  [...]
  "query": {
    "pages": {
      "796": {
        "pageid": 796,
        "ns": 0,
        "title": "Communauté des conseiller·e·s en mobilité",
        "contentmodel": "wikitext",
        "pagelanguage": "fr",
        "pagelanguagehtmlcode": "fr",
        "pagelanguagedir": "ltr",
        "touched": "2022-04-06T01:42:49Z",
        "lastrevid": 42436,
        "length": 16332,
        "fullurl": "https://wiki.lafabriquedesmobilites.fr/wiki/Communaut%C3%A9_des_conseiller%C2%B7e%C2%B7s_en_mobilit%C3%A9",
        "editurl": "https://wiki.lafabriquedesmobilites.fr/index.php?title=Communaut%C3%A9_des_conseiller%C2%B7e%C2%B7s_en_mobilit%C3%A9&action=edit",
        "canonicalurl": "https://wiki.lafabriquedesmobilites.fr/wiki/Communaut%C3%A9_des_conseiller%C2%B7e%C2%B7s_en_mobilit%C3%A9",
        "revisions": [
          {
            "contentformat": "text/x-wiki",
            "contentmodel": "wikitext",
            "*": "{{Communauté\n|
			Titre=Communauté des conseiller·e·s en mobilité\n|
			Main_Picture=Logo partenaires CeM.png\n|
			description=[...]\n|
			Tags=accompagnement collectif des entreprises, conseiller, collectivité\n|
			Theme=Vélo et Mobilités Actives,Accessibilité dans les transports,Données ouvertes,Conseillers en mobilité\n|
			Objectifs=Il s'agit de renforcer les moyens d'actions des conseiller·ère·s en mobilité pour mieux agir ensemble.\n|
			challenge=Accompagner une collectivité à ouvrir un maximum de ressources et construire un kit d'aide à l'innovation, Accélérer le déploiement du covoiturage quotidien, Aider à réduire les mobilités d'une entreprise dans sa globalité, Améliorer les solutions et développer de nouvelles solutions de mobilités pour tous, Produire un nouveau contrat social entre les citoyens et les acteurs publics / privés pour augmenter les connaissances et changer les pratiques, Rendre accessible une mobilité individuelle à bas coût pour tous sans externalités négatives\n|
			[...]
			}}"
          }
        ]
      },

}
*/
// The revisions "*" string is the one containing most useful data, but it's format doesn't seem to follow a standard
const parseApiReply = (list) => {
	const elements = list.query.pages
	const parsed = Object.values(elements).map((e) => {
		if (!e.revisions) return {...e, content: null, data: null}
		const content = e.revisions[0]['*']
		const dataPairs = content
			.replaceAll('\n', '') // Remove all line returns, uneeded for data parsing
			.match(/[^{]*{{(.*)}}[^}]*/)[1] // extract everything between the first '{{' and the last '}}'
			.split('|') // Split the text in an array of fields
			.map((el) => el.split('=')) // Left side of "=" is the name of the field, right side is the content
		const data = Object.fromEntries(dataPairs)

		// Add content to the growing dict
		return {
			...e,
			content,
			data,
		}
	})
	return parsed
}
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
			const parsed = parseApiReply(list)
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
			const parsed = parseApiReply(list)
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
			const parsed = parseApiReply(list)
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
			const parsed = parseApiReply(list)
			then(parsed, list.continue.gcmcontinue)
		})
		.catch((e) => console.log(e))
}
