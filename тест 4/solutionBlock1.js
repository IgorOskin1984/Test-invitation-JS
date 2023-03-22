import { solutionFunction } from './solution_Function.js'


export const solutionBlock1 = (props) => {
	//debugger
	for (let i = 0; i < props.arrReverseArray.length; i++) {
		if (props.solutionIsFound) return props
		else {
			props.carentValue = props.arrReverseArray[i]
			solutionFunction(i, props)
		}
	}
}