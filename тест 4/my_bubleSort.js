export const bubleSort = (i, arr, remainder, props) => {

	const additionBreake = (sum, remainder, i) => {
		for (let j = 0; j < arr.length; j++) {
			if (j > i) {
				sum = sum + arr[j]
				if (sum > remainder) return false
				else if (sum === remainder) {
					props.foundNumber = sum
					return true
				}
			}
		}
		return false
	}

	let sum = 0;
	sum = arr[i];

	props.solutionIsFound = additionBreake(sum, remainder, i)

	//console.log(sum);

	return props.solutionIsFound;

}