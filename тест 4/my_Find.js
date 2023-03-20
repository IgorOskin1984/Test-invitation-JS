//import { solutionPrint } from './my_SplutionPrint.js'

export const findMyRemainder = (arr, remainder) => {
	//debugger
	const findRemainder = (item) => {
		if (item === remainder) return true
	}

	return arr.find(findRemainder)
}



//export const findMyRemainder = (i, props) => {
//	const findRemainder = (arrayItem) => {
//		//let sum = props.newArray.reduce((acc, val) => { return acc + val; })
//		if (arrayItem === props.remainder) {
//			solutionPrint(i, props, 'from my_Found')
//			return true;
//		}
//	}
//	return props.arrNewArray.find(findRemainder);
//}