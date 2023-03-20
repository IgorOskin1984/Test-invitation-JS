import { filterMyArray } from './my_Filter.js'
import { findMyRemainder } from './my_Find.js'



export const findSolutionFunction = (i, props) => {
	console.log(i);
	console.log(props);
	console.log(props.arrReverseArray);

	props.carentNumber = props.arrReverseArray[i]
	props.remainder = props.maxNumber - props.carentNumber;
	props.arrFilteredNewArray = filterMyArray(props.arrReverseArray, props.remainder, i)

	debugger
	const sum = props.arrFilteredNewArray.reduce((acc, el) => { return acc + el })


	//console.log(props.carentNumber);
	//console.log(props.remainder);
	//console.log(props.arrFilteredNewArray);
	//console.log(sum);

	if (sum < props.remainder) return false

	props.foundNumber = findMyRemainder(props.arrFilteredNewArray, props.remainder)
	//debugger
	if (props.foundNumber) {
		props.solutionIsFound = true
	}


	console.log(props);

	return props.solutionIsFound
}