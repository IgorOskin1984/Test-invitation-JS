import { additionSortFunc } from "./my_additionSortFunc.js";
import { filterMyArray } from "./my_Filter.js";
import { findRemaindner } from "./my_Find_Remaindner.js";
import { firstIndexPlusNextIndexLoop } from "./my_First_Index_Plus_Next_Index_Loop.js";

export const solutionFunction = (i, props, j,) => {
	let arrayForFiltration,
		filteredArray;

	const localFiltrFunction = (i, localArrayForFiltration) => {
		//debugger
		const filtrFunc = (el, ind) => {
			if (ind === i) return false;
			else if (ind === j) return false
			else return true
		}
		return localArrayForFiltration.filter(filtrFunc)
	}

	const findRemaindnerContainer = (i, filteredArray, props) => {
		if (filteredArray.length) {
			findRemaindner(i, filteredArray, props.remainder, props);
			if (props.solutionIsFound) return props

			for (let j = 0; j < filteredArray.length; j++) {
				additionSortFunc(j, filteredArray, props.remainder, props)
				if (props.solutionIsFound) return props
				firstIndexPlusNextIndexLoop(j, filteredArray, props.remainder, props)
				if (props.solutionIsFound) return props
			}
		}
	}

	props.remainder = props.maxNumber - props.carentValue;
	//filteredArray = filterMyArray(arrayForFiltration, props.remainder, i)

	if (props.carentValue > props.arrReverseArray[i]) {
		arrayForFiltration = localFiltrFunction(i, props.arrReverseArray)
		filteredArray = filterMyArray(arrayForFiltration, props.remainder, i)
		findRemaindnerContainer(i, filteredArray, props, j)

	}
	else {
		filteredArray = filterMyArray(props.arrReverseArray, props.remainder, i)
		findRemaindnerContainer(i, filteredArray, props, j)
	}

}


