export const additionSortFunc = (i, arr, remainder, props) => {
	//debugger
	const additionBreake = (sum, remainder, i) => {
		for (let j = 0; j < arr.length; j++) {
			if (j > i) {
				sum = sum + arr[j]
				if (sum > remainder) return false;
				else if (sum === remainder) {
					props.foundNumbersArray.push(arr[i])

					for (let k = 0; k <= j; k++) {
						if (k > i)
							props.foundNumbersArray.push(arr[k])
					}
					console.log(props.foundNumbersArray);
					props.foundNumber = sum
					return true
				}
			}
		}
		//props.foundNumbersArray = []
		return false
	}

	let sum = 0;
	sum = arr[i];

	props.solutionIsFound = additionBreake(sum, remainder, i)

	//console.log(sum);

	return props.solutionIsFound;

}