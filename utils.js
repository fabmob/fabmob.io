export function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}

export const sortBy = (path) => (objectList) =>
	objectList.sort((a, b) => getValue(a, path) > getValue(b, path))

export const getValue = (data, dottedPath) => {
	var i,
		path = dottedPath.split('.'),
		len = path.length

	for (i = 0; typeof data === 'object' && i < len; ++i) {
		data = data[path[i]]
	}
	return data
}
