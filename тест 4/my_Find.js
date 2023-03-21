export const myFindFunc = (arr, remainder) => {
	//debugger
	const findRemainder = (item) => {
		if (item === remainder) return true
	}

	return arr.find(findRemainder)
}
