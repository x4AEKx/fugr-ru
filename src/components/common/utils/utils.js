export const sortingFunc = (arr, label, orderBy) => {
	debugger
	if (label === "id") {
	}
	function asc(a, b) {
		if (label === "id") {
			return a[label] - b[label]
		}
		if (a[label].toLowerCase() > b[label].toLowerCase()) {
			return 1
		} else if (a[label].toLowerCase() < b[label].toLowerCase()) {
			return -1
		}
		return 0
	}

	function desc(a, b) {
		if (label === "id") {
			return b[label] - a[label]
		}
		if (a[label].toLowerCase() < b[label].toLowerCase()) {
			return 1
		} else if (a[label].toLowerCase() > b[label].toLowerCase()) {
			return -1
		}
		return 0
	}

	switch (orderBy) {
		case "asc":
			return arr.sort(asc)
		case "desc":
			return arr.sort(desc)
		default:
			return arr
	}
}
