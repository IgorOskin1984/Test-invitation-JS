import { randomArray } from './random-Array.js'
import { findSolutionFunction } from './my_SolutionFunction.js'
import { solutionPrint } from './my_SplutionPrint.js'
import { bubleSort } from './my_bubleSort.js'

randomArray()

function ArrayChallenge(props) {
	//debugger
	console.log('last container');
	solutionPrint()
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
		carentNumber: null,
		solutionIsFound: false
	}

	//props.maxNumber = props.mainMaxNumber


	for (let i = 0; i < props.arrReverseArray.length; i++) {
		//debugger
		console.log(i);

		findSolutionFunction(i, props);

		//props.arrayForSecondLoop = props.arrNewArray;

		if (props.solutionIsFound) return props
		for (let j = 0; j < props.arrFilteredNewArray.length; j++) {
			bubleSort(props.arrFilteredNewArray, props.remainder, [props])
		}

		//else {
		//	for (let j = 0; j < props.arrayForSecondLoop.length; j++) {
		//		console.log("second loop " + j);
		//		console.log(props);

		//	}
		//}
	}

	console.log('true');
	return props

}


// keep this function call here 
console.log(ArrayChallenge(main_Solution(randomArray())));
