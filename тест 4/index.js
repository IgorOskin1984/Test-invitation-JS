import { randomArray } from './random-Array.js'
import { solutionCheckAndPrint } from './my_SolutionPrint.js'
import { solutionBlock1 } from './solutionBlock1.js'
import { solutionBlock2 } from './solutionBlock2.js'
import { solutionBlock3 } from './solutionBlock3.js'


function ArrayChallenge(props) {
	solutionCheckAndPrint(props)
	return props.solutionIsFound
}

function main_Solution(arr) {
	const props = {
		arr: arr.sort(function (a, b) { return a - b }),
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

	const arrayForFirstCheck = props.arrReverseArray.filter((el) => el >= 0)
	const sum = arrayForFirstCheck.reduce((acc, el) => { return acc + el })
	console.log('sum is ' + sum);
	console.log(props.maxNumber);

	if (sum > props.maxNumber) {
		solutionBlock1(props)
		if (props.solutionIsFound) return props
		solutionBlock2(props)
		if (props.solutionIsFound) return props
		solutionBlock3(props)
		if (props.solutionIsFound) return props
	}

	console.warn('solution not found');
	return props
}


// keep this function call here 
console.log(ArrayChallenge(main_Solution(randomArray())));
