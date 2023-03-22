import { randomArray } from './random-Array.js'
import { solutionPrint } from './my_SolutionPrint.js'
import { solutionFunction } from './Solution_Function .js'

//randomArray()

function ArrayChallenge(props) {
	//debugger
	console.log('last container');
	solutionPrint(props)
	return props.solutionIsFound
}

function main_Solution(arr) {
	//debugger
	const props = {
		arr: arr.sort(function (a, b) { return a - b }),
		//mainMaxNumber: arr.pop(),
		maxNumber: arr.pop(),
		arrReverseArray: [...arr].reverse(),
		arrFilteredNewArray: null,
		arrayForSecondLoop: null,
		remainder: null,
		foundNumber: null,
		foundNumbersArray: [],
		carentValue: null,
		solutionIsFound: false
	}

	//props.maxNumber = props.mainMaxNumber

	for (let i = 0; i < props.arrReverseArray.length; i++) {
		//debugger
		if (props.solutionIsFound) return props
		else {
			props.carentValue = props.arrReverseArray[i]
			solutionFunction(i, props)
			props.carentValue = props.arrReverseArray[i] + props.arrReverseArray[i + 1]
			props.foundNumbersArray = [];
			props.foundNumbersArray.push(props.arrReverseArray[i], props.arrReverseArray[i + 1])
			console.log(props.foundNumbersArray);
			solutionFunction(i, props)
		}

	}

	console.warn('solution not found');
	return props
}


// keep this function call here 
console.log(ArrayChallenge(main_Solution(randomArray())));
