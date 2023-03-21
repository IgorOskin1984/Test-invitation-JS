import { additionSortFunc } from "./my_additionSortFunc.js";
import { filterMyArray } from "./my_Filter.js";
import { findRemaindner } from "./my_Find_Remaindner.js";
import { firstIndexPlusNextIndexLoop } from "./my_First_Index_Plus_Next_Index_Loop.js";

export const solutionFunction = (i, props) => {
	//debugger
	console.log(i);

	props.remainder = props.maxNumber - props.carentValue;

	props.arrFilteredNewArray = filterMyArray(props.arrReverseArray, props.remainder, i)

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