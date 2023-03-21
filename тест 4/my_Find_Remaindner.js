import { myFindFunc } from './my_Find.js'

export const findRemaindner = (i, arr, remainder, props) => {
	//debugger
	console.log(props);

	const sum = arr.reduce((acc, el) => { return acc + el })

	if (sum < remainder) return false

	props.foundNumber = myFindFunc(arr, remainder)
	//debugger
	if (props.foundNumber) {
		props.solutionIsFound = true
		return props.solutionIsFound
	}
	else return false

}