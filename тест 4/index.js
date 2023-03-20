import { randomArray } from './random-Array.js'
import { findSolutionFunction } from './my_SolutionFunction.js'
import { solutionPrint } from './my_SolutionPrint.js'
import { bubleSort } from './my_bubleSort.js'
import { firstIndexPlusNextIndaxLoop } from './my_first_Index_Plus_Next_Indax_Loop.js'

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
		carentNumber: null,
		solutionIsFound: false
	}

	//props.maxNumber = props.mainMaxNumber


	for (let i = 0; i < props.arrReverseArray.length; i++) {
		//debugger
		findSolutionFunction(i, props);

		if (props.solutionIsFound) return props
		else if (props.arrFilteredNewArray) {
			for (let j = 0; j < props.arrFilteredNewArray.length; j++) {
				console.log(`inner loop  ${j}`);
				//debugger
				bubleSort(j, props.arrFilteredNewArray, props.remainder, props)
				if (props.solutionIsFound) return props
				firstIndexPlusNextIndaxLoop(j, props.arrFilteredNewArray, props.remainder, props)
				if (props.solutionIsFound) return props
			}
		}


		//else {
		//	for (let j = 0; j < props.arrayForSecondLoop.length; j++) {
		//		console.log("second loop " + j);
		//		console.log(props);

		//	}
		//}
	}

	console.log('solution not found');
	return props

}


// keep this function call here 
console.log(ArrayChallenge(main_Solution(randomArray())));
