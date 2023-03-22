import { solutionFunction } from './solution_Function.js'


export const solutionBlock3 = (props) => {
	for (let i = 0; i < props.arrReverseArray.length; i++) {
		if (props.solutionIsFound) return props
		else {
			props.carentValue = props.arrReverseArray[i]
			for (let j = 0; j < props.arrReverseArray.length; j++) {
				if (props.solutionIsFound) return props
				else {
					if (j > i) {
						props.carentValue += props.arrReverseArray[j]
						if (props.carentValue < props.maxNumber) {
							solutionFunction(i, props)
						}
					}
				}
			}
		}
	}
}