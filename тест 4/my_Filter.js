export const filterMyArray = (arrayForFiltration, remainder, i) => {
	const filterArray = (arrayItem, index) => {
		if (remainder >= arrayItem && index !== i) {
			return true
		}
	}
	arrayForFiltration = arrayForFiltration.filter(filterArray)
	if (arrayForFiltration.length) return arrayForFiltration
	else return false
}