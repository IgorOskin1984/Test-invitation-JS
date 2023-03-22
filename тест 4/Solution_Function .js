import { additionSortFunc } from "./my_additionSortFunc.js";
import { filterMyArray } from "./my_Filter.js";
import { findRemaindner } from "./my_Find_Remaindner.js";
import { firstIndexPlusNextIndexLoop } from "./my_First_Index_Plus_Next_Index_Loop.js";

export const solutionFunction = (i, props) => {
	let arrayForFiltration;
	if (props.carentValue > props.maxNumber) return false

	const localFiltrFunction = (i, localArrayForFiltration) => {
		const filtrFunc = (el, ind) => {
			if (ind === i) return false;
			else if (ind === i + 1) return false

			else return true

		}
		return localArrayForFiltration.filter(filtrFunc)
	}

	if (props.carentValue > props.arrReverseArray[i]) {
		arrayForFiltration = localFiltrFunction(i, props.arrReverseArray)
	}
	else {
		arrayForFiltration = props.arrReverseArray
	}





	props.remainder = props.maxNumber - props.carentValue;

	console.log(props.arrReverseArray);
	console.log(arrayForFiltration);

	props.arrFilteredNewArray = filterMyArray(arrayForFiltration, props.remainder, i)

	if (props.arrFilteredNewArray.length) {
		findRemaindner(i, props.arrFilteredNewArray, props.remainder, props);
		if (props.solutionIsFound) return props

		for (let j = 0; j < props.arrFilteredNewArray.length; j++) {
			console.log(`inner loop  ${j}`);
			//debugger
			additionSortFunc(j, props.arrFilteredNewArray, props.remainder, props)
			if (props.solutionIsFound) return props
			firstIndexPlusNextIndexLoop(j, props.arrFilteredNewArray, props.remainder, props)
			if (props.solutionIsFound) return props
		}
	}

}