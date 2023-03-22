export const findRemaindner = (i, arr, remainder, props) => {
	const myFindFunc = (arr, remainder) => {
		const findfunc = (item) => {
			if (item === remainder) return true
		}
		return arr.find(findfunc)
	}
	const sum = arr.reduce((acc, el) => { return acc + el })
	if (sum < remainder) return false
	props.foundNumber = myFindFunc(arr, remainder)
	if (props.foundNumber) {
		props.solutionIsFound = true
		props.foundNumbersArray.push(props.carentValue, remainder)
		console.log(props.foundNumbersArray);
		return props.solutionIsFound
	}
	else return false

}