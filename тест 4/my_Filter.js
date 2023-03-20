import { solutionPrint } from './my_SplutionPrint.js'


export const filterMyArray = (arrReverseArray, remainder, i) => {

	const filterArray = (arrayItem, index) => {
		if (remainder >= arrayItem && index !== i) {
			//debugger
			//console.log(remainder);
			//console.log(arrayItem);
			//console.log('carentNumber ' + carentNumber);
			//console.log(index);
			return true
		}
	}



	//const filterArray = (arrayItem) => {
	//	return arrayItem <= props.remainder
	//}
	//debugger
	//let newArr = props.arrReverseArray.filter(filterArray);
	//let sum;
	//if (newArr.length > 0) {
	//	sum = newArr.reduce((acc, val) => { return acc + val; })
	//}

	//if (sum === props.remainder) {
	//	solutionPrint(i, props)
	//	return true;
	//}
	return arrReverseArray.filter(filterArray)
}