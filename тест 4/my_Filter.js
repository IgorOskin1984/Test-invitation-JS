import { solutionPrint } from './my_SolutionPrint.js'


export const filterMyArray = (arrayForFiltration, remainder, i) => {
	//debugger

	const filterArray = (arrayItem, index) => {
		if (remainder >= arrayItem && index !== i) {

			return true
		}
	}
	arrayForFiltration = arrayForFiltration.filter(filterArray)
	if (arrayForFiltration.length) return arrayForFiltration
	else return false



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


	//return arrReverseArray.filter(filterArray)
}